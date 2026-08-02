export const siteUrl = "https://oryoffe.github.io/getting-started";
export const siteName = "Getting Started";
export const defaultDescription =
  "Clear, beginner-friendly guides for learning HTML, CSS, JavaScript, and Node.js.";

export function absoluteUrl(path = "") {
  return `${siteUrl}${path}`;
}

export function jsonLd(value) {
  return { __html: JSON.stringify(value) };
}

export function plainText(value = "") {
  return value.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
}
