---
title: How Workspace Symbols in ZLS Will Work
publish_date: May 9, 2024
summary: A short yet comprehensive peak behind the curtain
---

- [Introduction](#introduction)
- [N-grams and trigrams](#n-grams-and-trigrams)
- [Mental model for indexing and querying](#mental-model-for-indexing-and-querying)

### Introduction

I'm hopeful I'll be able to rename this blog post to "How Workspace Symbols in ZLS Work" and issue corrections once we finalize all the details and code.

### N-grams and trigrams

An n-gram is a chunk of text of size `n`. It is produced by sliding a window of size `n` and stride 1 across a larger chunk of text, ending when a new window of size `n` cannot be created. A trigram is an n-gram where `n = 3`.

To obtain the trigrams of `agent`, for example, we obtain the first 3 characters, `age`, then shift our window by 1 to obtain `gen`, and again to obtain `ent`. Shifting our window by 1 again would not yield 3 characters, so we stop here. Thus, the trigrams of agent are `age`, `gen`, and `ent`.

N-grams are a nice way to execute approximate searches over a large corpus of text, allowing the consideration not only the entirety, prefix, or suffix of a search target, but also all of its constituent parts. Trigrams also enable efficient large-scale regular expression searches (see [Zoekt](https://github.com/sourcegraph/zoekt) from my ex-employer Sourcegraph), but that's out of scope for this article.

### Mental model for indexing and querying

We need to index the name of every single global constant, variable, and function declaration. This is easily doable with the now-refactored [DocumentScope](https://github.com/zigtools/zls/blob/34ab587a9e8c180a1a808e7fd52007b67b35663f/src/DocumentScope.zig), which lists all declarations in a single contiguous list.

<!-- What is DocumentScope? -->

Note that we could perform indexing immediately during the construction of the `DocumentScope`, but that would incur overhead on every edit that we'd rather split into a separate task in our multithreaded setup to keep ZLS fast and responsive.

We can begin by attaching a flag, `should_be_indexed_for_trigrams`, during the construction of the `DocumentScope` to each declaration identifying whether it's one of our search targets (excluding locals).

During indexing, we iterate over the declarations for each document and find the trigrams for their names. We then create an inverse mapping

Querying is essentially just performing an intersection.

We use a "merge intersection," which is ripped out of merge sort, to intersect lists. [King](https://github.com/kprotty) tried beating this approach in a couple of purely hashmap-based ways, but with our setup which mostly involves many small inverse mappings (~10,000 trigrams with ~30 declarations each, for example), the merge intersection always won out.

I took a look at and partially implemented [Fast Set Intersection in Memory](https://arxiv.org/pdf/1103.2409), but it seems to be significant overkill for this sort of small intersection application. In Section 4, "Experimental Evaluation," they show that merge intersection performs rather well and sometimes comparably to the implementations shown in the paper for small intersection sizes, so that's what we're sticking with unless [someone can find a better solution](https://github.com/zigtools/trigram-bench).
