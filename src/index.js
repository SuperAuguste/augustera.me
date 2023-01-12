import { promises as fs } from "fs";
import { default as ejs } from "ejs";
import { default as path } from "path";
import { watch } from "chokidar";
import { default as sass } from "sass";
import { default as finalhandler } from "finalhandler";
import { default as serveStatic } from "serve-static";
import { createServer } from "http";

// TODO: Localize

async function content(p, locale) {
    const data = (await fs.readFile(path.join("content", locale, p))).toString();
    if (p.endsWith(".json")) return JSON.parse(data);
    return data;
}

async function compile(template, data, dest) {
    for (const locale of ["en", /*"fr"*/]) {
        const result = await ejs.renderFile(path.join("templates", template), {
            locale,
            content,
            ...data
        }, {
            async: true,
        });
        await fs.writeFile(path.join("docs", locale === "en" ? "" : locale, dest), result);
    }
}

async function generate() {
    try {await fs.mkdir("docs");} catch {}
    try {await fs.mkdir("docs/resume");} catch {}

    // try {await fs.mkdir("docs/fr");} catch {}
    // try {await fs.mkdir("docs/fr/resume");} catch {}
    
    await compile("index.ejs", {}, "index.html");
    await compile("resume.ejs", {}, "resume/index.html");
    await fs.writeFile("docs/style.css", sass.compile("style/style.scss", { style: "compressed" }).css);
}

watch(["style", "templates", "content"]).on("all", generate);
generate();

var serve = serveStatic("docs");

var server = createServer(function(req, res) {
    var done = finalhandler(req, res);
    serve(req, res, done);
});

process.on("uncaughtException", err => {
    console.error(err);
});

server.listen(5500);

