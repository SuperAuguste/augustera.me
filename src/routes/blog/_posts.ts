import matter from "gray-matter";
import { parse } from "marked";
import { readdirSync, readFileSync } from "fs";

export interface Post {
    slug: string,

    title: string,
    published: Date,
    thumbnail: string,
    tags: string[],
    
    content: string,
    excerpt: string,
};

const posts: Post[] = [];

for (const postName of readdirSync("posts")) {
    const postFm = matter(readFileSync(`posts/${postName}`).toString(), {
        excerpt: true
    });
    
    posts.push({
        slug: postName.split(".")[0],

        title: postFm.data.title,
        published: new Date(postFm.data.published),
        thumbnail: postFm.data.thumbnail,
        tags: postFm.data.tags,
        
        content: parse(postFm.content.split("---")[postFm.content.split("---").length - 1]),
        excerpt: postFm.excerpt,
    });
}

export default posts;
