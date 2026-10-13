import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const appRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(appRoot, "dist", "public");
const routesSource = fs.readFileSync(
  path.join(appRoot, "src", "routes.tsx"),
  "utf8",
);
const vercelConfigPath = path.resolve(appRoot, "..", "..", "vercel.json");
const vercelRewrites = JSON.parse(
  fs.readFileSync(vercelConfigPath, "utf8"),
).rewrites;
const siteOrigin = "https://elevatedliving.uk";

function decodeEntities(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function escapeAttribute(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function getAttribute(tag, name) {
  const match = tag.match(
    new RegExp(`\\b${name}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, "i"),
  );
  const value = match?.[1] ?? match?.[2];
  return value === undefined ? undefined : decodeEntities(value);
}

function findTag(tags, attribute, value) {
  return tags.find((tag) => getAttribute(tag, attribute) === value);
}

function setMeta(html, attribute, key, content) {
  const newTag = `    <meta ${attribute}="${escapeAttribute(key)}" content="${escapeAttribute(content)}" />`;
  const regex = /<meta\b[^>]*\/?>/gi;
  let found = false;

  html = html.replace(regex, (tag) => {
    if (getAttribute(tag, attribute) !== key) return tag;
    if (found) return "";
    found = true;
    return newTag;
  });

  if (!found) html = html.replace("</head>", `${newTag}\n  </head>`);
  return html;
}

function setCanonical(html, href) {
  const newTag = `    <link rel="canonical" href="${escapeAttribute(href)}" />`;
  const tags = [...html.matchAll(/<link\b[^>]*\/?>/gi)].map((match) => match[0]);
  const current = tags.find((tag) => getAttribute(tag, "rel") === "canonical");
  return current
    ? html.replace(current, newTag)
    : html.replace("</head>", `${newTag}\n  </head>`);
}

function getComponentMetadata(componentName) {
  const componentPath = path.join(
    appRoot,
    "src",
    "pages",
    `${componentName}.tsx`,
  );
  if (!fs.existsSync(componentPath)) {
    throw new Error(`Missing route component: ${componentPath}`);
  }

  const source = fs.readFileSync(componentPath, "utf8");
  const helmet = source.match(/<Helmet>([\s\S]*?)<\/Helmet>/)?.[1];
  if (!helmet) return null;

  const title = helmet.match(/<title>([\s\S]*?)<\/title>/)?.[1]?.trim();
  const tags = [...helmet.matchAll(/<(?:meta|link)\b[^>]*\/?>/gi)].map(
    (match) => match[0],
  );
  const description = getAttribute(
    findTag(tags, "name", "description") ?? "",
    "content",
  );
  if (!title || !description) return null;

  const getContent = (property) =>
    getAttribute(findTag(tags, "property", property) ?? "", "content");
  const getNamedContent = (name) =>
    getAttribute(findTag(tags, "name", name) ?? "", "content");
  const image = getContent("og:image");
  const canonicalTag = findTag(tags, "rel", "canonical");

  return {
    title: decodeEntities(title),
    description,
    ogTitle: getContent("og:title") ?? decodeEntities(title),
    ogDescription: getContent("og:description") ?? description,
    image,
    ogType: getContent("og:type"),
    twitterCard: getNamedContent("twitter:card"),
    canonical: canonicalTag ? getAttribute(canonicalTag, "href") : undefined,
  };
}

function renderSocialHtml(route, metadata, pageHtml) {
  const pageUrl = `${siteOrigin}${route === "/" ? "/" : route}`;
  const title = metadata.ogTitle || metadata.title;
  const description = metadata.ogDescription || metadata.description;
  const image = metadata.image || `${siteOrigin}/images/og-social.png`;
  let html = pageHtml.replace(
    /<title>[\s\S]*?<\/title>/i,
    `    <title>${escapeAttribute(metadata.title)}</title>`,
  );

  html = setMeta(html, "name", "description", metadata.description);
  html = setMeta(html, "property", "og:title", title);
  html = setMeta(html, "property", "og:description", description);
  html = setMeta(html, "property", "og:url", pageUrl);
  html = setMeta(
    html,
    "property",
    "og:type",
    metadata.ogType || (route.startsWith("/blog/") ? "article" : "website"),
  );
  html = setMeta(html, "property", "og:image", image);
  html = setMeta(html, "name", "twitter:card", "summary_large_image");
  html = setMeta(html, "name", "twitter:title", title);
  html = setMeta(html, "name", "twitter:description", description);
  html = setMeta(html, "name", "twitter:image", image);
  html = setCanonical(html, pageUrl);
  return html;
}

const routes = [
  ...routesSource.matchAll(
    /\{\s*path:\s*"([^"]+)"\s*,\s*component:\s*([A-Za-z]\w*)\s*\}/g,
  ),
].map(([, route, component]) => ({ route, component }));

for (const { route } of routes) {
  if (route === "/") continue;
  const destination = `${route}/index.html`;
  if (
    !vercelRewrites.some(
      (rewrite) =>
        rewrite.source === route && rewrite.destination === destination,
    )
  ) {
    throw new Error(
      `Add a Vercel rewrite from ${route} to ${destination} so crawlers receive its metadata.`,
    );
  }
}

let generated = 0;
for (const { route, component } of routes) {
  const metadata = getComponentMetadata(component);
  if (!metadata) {
    throw new Error(`Missing title or description for ${route} (${component})`);
  }

  const outputPath =
    route === "/"
      ? path.join(publicDir, "index.html")
      : path.join(publicDir, route.slice(1), "index.html");
  const pageHtml = fs.readFileSync(outputPath, "utf8");
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, renderSocialHtml(route, metadata, pageHtml));
  generated += 1;
}

console.log(`Generated crawler-ready HTML for ${generated} routes.`);
