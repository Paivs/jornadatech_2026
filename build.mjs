import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import postcss from "postcss";
import tailwind from "@tailwindcss/postcss";
import { renderCatalog, renderSchedule } from "./event-sections.mjs";

const template = await readFile("index.template.html", "utf8");
const html = template
  .replace("<!-- schedule -->", renderSchedule())
  .replace("<!-- catalog -->", renderCatalog());

const css = await readFile("styles.css", "utf8");
const compiled = await postcss([tailwind({ optimize: true })])
  .process(css, { from: "styles.css", to: "site.css" });

await mkdir("dist", { recursive: true });
await Promise.all([
  writeFile("index.html", html),
  writeFile("dist/index.html", html),
  writeFile("site.css", compiled.css),
  writeFile("dist/site.css", compiled.css),
  cp("node_modules/motion/dist/motion.js", "motion.js"),
  cp("node_modules/motion/LICENSE.md", "motion.LICENSE.md"),
  cp("app.js", "dist/app.js"),
  cp("assets", "dist/assets", { recursive: true }),
  cp("node_modules/motion/dist/motion.js", "dist/motion.js"),
  cp("node_modules/motion/LICENSE.md", "dist/motion.LICENSE.md"),
]);
