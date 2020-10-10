import { nodejsImage, reactImage } from "./images";
import html from "./data/html";
import css from "./data/css";
import js from "./data/js";

export const items = [html, css, js];

// future items
const futureItems = [
  {
    name: "Node.js",
    subTitle: "JavaScript Server-side",
    img: nodejsImage,
    prerequisits: ["javascript"],
  },
  {
    name: "React",
    subTitle: "JavaScript UI Library",
    img: reactImage,
    prerequisits: ["html", "css", "javascript"],
  },
];
