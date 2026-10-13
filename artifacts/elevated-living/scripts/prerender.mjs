import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const packageRoot = path.resolve(fileURLToPath(new URL("..", import.meta.url)));
const outputRoot = path.join(packageRoot, "dist/public");
const templatePath = path.join(outputRoot, "index.html");

process.env.NODE_ENV = "production";

const vite = await createServer({
  configFile: path.join(packageRoot, "vite.config.ts"),
  server: { middlewareMode: true },
  appType: "custom",
});

try {
  const [{ default: App }, { publicRoutes }] = await Promise.all([
    vite.ssrLoadModule("/src/App.tsx"),
    vite.ssrLoadModule("/src/routes.tsx"),
  ]);
  const template = await readFile(templatePath, "utf8");

  for (const { path: routePath } of publicRoutes) {
    const helmetContext = {};
    let appHtml = renderToString(
      React.createElement(App, { ssrPath: routePath, helmetContext }),
    );
    const helmet = helmetContext.helmet;
    const renderedTitle = appHtml.match(/<title\b[^>]*>[\s\S]*?<\/title>/i)?.[0];
    const renderedMeta = [...appHtml.matchAll(/<meta\b[^>]*\/?>/gi)].map(
      ([tag]) => tag,
    );
    const titleHtml = helmet?.title?.toString() || renderedTitle;
    const routeMeta = helmet?.meta?.toString() || renderedMeta.join("");

    if (!titleHtml || !routeMeta) {
      throw new Error(
        `Missing route metadata for ${routePath}; context keys: ${Object.keys(helmetContext)}; rendered head: ${appHtml.slice(0, 300)}`,
      );
    }

    const twitterMeta = [
      ...routeMeta.matchAll(
        /<meta\b(?=[^>]*property="og:(?:title|description|image)")[^>]*>/gi,
      ),
    ]
      .map(([tag]) =>
        tag
          .replace(/property="og:title"/g, 'name="twitter:title"')
          .replace(/property="og:description"/g, 'name="twitter:description"')
          .replace(/property="og:image"/g, 'name="twitter:image"'),
      )
      .join("");
    appHtml = appHtml
      .replace(/<title\b[^>]*>[\s\S]*?<\/title>/gi, "")
      .replace(/<meta\b[^>]*\/?>/gi, "")
      .replace(/<link\b(?=[^>]*rel="canonical")[^>]*>/gi, "");
    const staleHeadMeta =
      /<title\b[^>]*>[\s\S]*?<\/title>|<meta\b(?=[^>]*(?:name="(?:description|twitter:(?:card|title|description|image))"|property="og:(?:title|description|type|image)"))[^>]*>/gi;
    const routeHtml = template
      .replace(staleHeadMeta, "")
      .replace(
        /<link\b(?=[^>]*rel="canonical")[^>]*>/i,
        `<link rel="canonical" href="https://www.elevatedliving.uk${routePath === "/" ? "/" : routePath}" />`,
      )
      .replace("</head>", `${titleHtml}${routeMeta}${twitterMeta}</head>`)
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    const outputPath =
      routePath === "/"
        ? templatePath
        : path.join(outputRoot, routePath.slice(1), "index.html");
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, routeHtml);
  }

  console.log(`Prerendered ${publicRoutes.length} public routes.`);
} finally {
  await vite.close();
}
