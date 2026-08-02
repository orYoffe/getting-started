import { htmlImage } from "../images";

const html = {
  name: "HTML",
  subTitle: "Markup language for web UI",
  description:
    'HTML is made out of tags. \nTags can hold values with attributes.\n For example: \n<html attribute="attribute value">',
  img: htmlImage,
  next: "Css",
  parts: [
    {
      title: "Start here: how to learn HTML",
      chapter: "Start here",
      description:
        "Work through one chapter at a time: read the goal, change the example, then build the same idea in your own index.html file. HTML is the structure of a page, so begin with meaningful content before worrying about colours or layout.",
      bottomText:
        "Mini-project: create a one-page profile with a heading, two paragraphs, a list, a link and an image. Keep it open in your browser and refresh after every change.",
    },
    {
      title: "Your first page: a complete document",
      chapter: "Foundations",
      description:
        "Every page starts with <!doctype html>, then html, head and body. Put machine-readable information such as the page title and viewport meta tag in head; put everything a visitor reads or uses in body. Save this as index.html and open it in a browser.",
      code: `<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><title>My first page</title></head>
  <body><h1>Hello, web!</h1><p>I made this page.</p></body>
</html>`,
      bottomText:
        "Try it: create a document with a useful title, one h1 and one paragraph. Change the title and notice the browser-tab label change after refresh.",
    },
    {
      title: "Text, headings and lists",
      chapter: "Foundations",
      description:
        "Use one h1 for the page topic, then h2 and h3 headings to group ideas. Use p for paragraphs, ul or ol for lists, and strong or em when meaning matters. Do not choose tags only because they look a certain way—CSS controls appearance later.",
      code: `<h1>Weekend recipe</h1>
<p>This is <strong>easy</strong> to make.</p>
<h2>Ingredients</h2>
<ul><li>Flour</li><li>Water</li></ul>`,
      bottomText:
        "Practice: turn a recipe or a travel plan into a clear outline using headings, paragraphs and an ordered list of steps.",
    },
    {
      image: "anatomy-of-an-html-element.png",
      title: "HTML tag structure",
      chapter: "Foundations",
      description:
        "An html tag is made out of it's openning tag, closing tag, it's content in the middle and it's attributes and values on it's opening tag.\n There are tags the don't have closing tags like the <br/> and <img/> tags.",
    },
    {
      title: "Semantic page landmarks",
      chapter: "Structure & media",
      description:
        "Semantic elements describe their role: header for the introduction, nav for major links, main for the unique page content, section for a themed group, article for standalone content and footer for supporting information. These landmarks help readers, search engines and assistive technology understand the page.",
      code: `<header><nav><a href="#projects">Projects</a></nav></header>
<main><section id="projects"><h1>My projects</h1></section></main>
<footer>© 2026</footer>`,
      bottomText:
        "Practice: replace generic div elements in your profile page with header, main, section and footer where they describe the content more accurately.",
    },
    {
      title: "Links, images and paths",
      chapter: "Structure & media",
      description:
        "Use a for links and img for images. Link text should explain the destination, and every meaningful image needs concise alt text. Relative paths point to files in your project; absolute URLs point to another site. Add target=\"_blank\" only when opening a new tab truly helps, and pair it with rel=\"noreferrer\".",
      code: `<a href="projects.html">See my projects</a>
<img src="profile.jpg" alt="Ada smiling at her laptop">
<a href="https://example.com" target="_blank" rel="noreferrer">
  Read the reference
</a>`,
      bottomText:
        "Practice: add a navigation link to another local page and an image with accurate alternative text. Then unplug the image URL mentally: would the alt text still explain the content?",
    },
    {
      embed: `<iframe src="https://codesandbox.io/embed/white-cloud-zyegl?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;"
     title="HTML page structure"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
      title: "HTML page structure",
      chapter: "Foundations",
      description:
        "An html page is the base of the website.\nIt defines the HTML version, meta data and the elements of the page.\nFrom displaying inputs to loading files, you can do a lot with a few steps in HTML",
      bottomText:
        'You can create your own html files like this "index.html" or "any-name_you_want.html" and open it in your browser just by double clicking on it.',
    },
    {
      embed: `<iframe src="https://codesandbox.io/embed/mystifying-montalcini-srutx?autoresize=1&eslint=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;"
     title="The Anchor tag, linking the web"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
      title: "<a>The Anchor tag, linking the web.</a>",
      chapter: "Structure & media",
      description:
        "An achor tag can redirect the user to any page online or other files on you machine.",
    },
    {
      embed: `<iframe src="https://codesandbox.io/embed/gifted-ride-xvrby?autoresize=1&fontsize=16&theme=dark"
     style="width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;"
     title="gifted-ride-xvrby"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
      title: "<img>The Image tag, displaying images.",
      chapter: "Structure & media",
      description:
        "An image tag can show an image online or from on you computer.",
    },
    {
      embed: `<iframe src="https://codesandbox.io/embed/inspiring-dew-0vqxj?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;"
     title="inspiring-dew-0vqxj"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
      title:
        'The input tag gets different types of input from the user. <input type="text" />',
      chapter: "Forms & accessibility",
      description:
        "With the input tag and the select and option tags you can ask the user many different types of questions to get his input.",
    },
    {
      title: "Forms and labels",
      chapter: "Forms & accessibility",
      description:
        "Forms collect information. Pair every input with a label using matching for and id values, choose the most specific input type, and use button to submit an action. A placeholder is a hint, not a replacement for a label.",
      code: `<form>
  <label for="email">Email</label>
  <input id="email" type="email" required>
  <button type="submit">Subscribe</button>
</form>`,
      bottomText:
        "Practice: build a contact form with name, email, message and submit controls. Check that you can complete it using only the keyboard.",
    },
    {
      title: "Tables and structured data",
      chapter: "Forms & accessibility",
      description:
        "Use a table only for data with rows and columns, not for layout. Start with caption, then thead and tbody; use th for headers and td for values. When a header describes a row or column, add the appropriate scope so screen readers can announce relationships correctly.",
      code: `<table>
  <caption>Weekly study plan</caption>
  <thead><tr><th scope="col">Day</th><th scope="col">Topic</th></tr></thead>
  <tbody><tr><th scope="row">Monday</th><td>HTML</td></tr></tbody>
</table>`,
      bottomText:
        "Practice: make a small weekly study-plan table with a caption, column headings and three rows. Keep visual layout work for CSS.",
    },
    {
      title: "Accessible, resilient HTML",
      chapter: "Forms & accessibility",
      description:
        "Write descriptive link text, give useful alt text to meaningful images, and leave decorative images with an empty alt attribute. Keep a logical heading order and test that the page still makes sense when styles or images fail to load.",
      code: `<h1>My portfolio</h1>
<h2>Projects</h2>
<a href="contact.html">Contact me</a>
<img src="diagram.png" alt="Site map showing three pages">
<img src="divider.svg" alt="">`,
      bottomText:
        "Final challenge: review your profile page with the browser reader mode or a keyboard. Fix any link, image or heading that is unclear without visual styling.",
    },
    {
      title: "Final project: publish a personal profile",
      chapter: "Build a project",
      description:
        "Build a single profile page that includes a semantic header and navigation, an about section, a projects list, a contact form and a footer. Use heading levels in order, descriptive links and image alt text. Validate the page by using Tab to reach every interactive element and by reading the content without relying on styling.",
      code: `<header><nav><a href="#contact">Contact</a></nav></header>
<main><h1>Alex's portfolio</h1><section><h2>Projects</h2><ul><li>Recipe site</li></ul></section></main>
<footer id="contact"><a href="mailto:alex@example.com">Email Alex</a></footer>`,
      bottomText:
        "Completion checklist: one h1; meaningful landmarks; no skipped heading levels; labelled form fields; useful link text; and a page title that describes the page.",
    },
  ],
};

export default html;
