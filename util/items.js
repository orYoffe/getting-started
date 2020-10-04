import {
  htmlImage,
  cssImage,
  jsImage,
  nodejsImage,
  reactImage,
} from "./images";

export const items = [
  {
    name: "HTML",
    subTitle: "Markup language for web UI",
    description:
      'HTML is made out of tags. \nTags can hold values with attributes.\n For example: \n<html attribute="attribute value">',
    img: htmlImage,
    next: "Css",
    parts: [
      {
        image: "/anatomy-of-an-html-element.png",
        title: "HTML tag structure",
        description:
          "An html tag is made out of it's openning tag, closing tag, it's content in the middle and it's attributes and values on it's opening tag.\n There are tags the don't have closing tags like the <br/> and <img/> tags.",
      },
      {
        embed: `<iframe src="https://codesandbox.io/embed/white-cloud-zyegl?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="white-cloud-zyegl"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title: "HTML page structure",
        description:
          "An html page is the base of the website.\nIt defines the HTML version, meta data and the elements of the page.\nFrom displaying inputs to loading files, you can do a lot with a few steps in HTML",
        bottomText:
          'You can create your own html files like this "index.html" or "any-name_you_want.html" and open it in your browser just by double clicking on it.',
      },
      {
        embed: `<iframe src="https://codesandbox.io/embed/mystifying-montalcini-srutx?autoresize=1&eslint=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="mystifying-montalcini-srutx"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title: "<a>The Anchor tag, linking the web.</a>",
        description:
          "An achor tag can redirect the user to any page online or other files on you machine.",
      },
      {
        embed: `<iframe src="https://codesandbox.io/embed/gifted-ride-xvrby?autoresize=1&fontsize=16&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="gifted-ride-xvrby"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title: "<img>The Image tag, displaying images.",
        description:
          "An image tag can show an image online or from on you computer.",
      },
      {
        embed: `<iframe src="https://codesandbox.io/embed/inspiring-dew-0vqxj?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="inspiring-dew-0vqxj"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title:
          'The input tag gets different types of input from the user. <input type="text" />',
        description:
          "With the input tag and the select and option tags you can ask the user many different types of questions to get his input.",
      },
    ],
  },
  {
    name: "CSS",
    subTitle: "Styling language of the web",
    img: cssImage,
    prerequisits: ["html"],
    next: "javascript",
    parts: [
      {
        embed: `<iframe src="https://codesandbox.io/embed/mystifying-moore-53kvq?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="mystifying-moore-53kvq"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title: "Connecting HTML and CSS",
        description:
          'To insert CSS code in an HTML page we use the <style>, <link> tags or the "style" attribute.\nThe options are to write the CSS code outside the HTML page with <link rel="stylesheet" href="/any-name-you-want.css" /> or inside the page with <style>some css</style> or on the tag with "style" attribute <p style="css code">text</p>',
        bottomText:
          'You can create your own css files like this "index.css" or "any-name_you_want.css", connect it to an html page and open it in your browser.',
      },
      {
        image: "/selector.gif",
        embed: `<iframe src="https://codesandbox.io/embed/epic-sun-vugtv?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="epic-sun-vugtv"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title: "Selectors",
        description:
          "In order to set design rules with CSS to an HTML element (tag).  We need to use a selector, to specify which element should the rules (declarations) apply to.",
      },
      {
        embed: `<iframe src="https://codesandbox.io/embed/lucid-brahmagupta-g21mu?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="lucid-brahmagupta-g21mu"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title: "Pseudo selectors (special selectors)",
        description:
          "There are some special rules selectors to be more specific about which tags should be changed. depending on the tag state or place in the page.",
      },
      {
        embed: `<iframe src="https://codesandbox.io/embed/lucid-brahmagupta-g21mu?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="lucid-brahmagupta-g21mu"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title: "CSS rules (declarations)",
        description: "...",
      },
      {
        embed: `<iframe src="https://codesandbox.io/embed/lucid-brahmagupta-g21mu?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="lucid-brahmagupta-g21mu"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title: "Media queries (mobile and different screen sizes)",
        description: "...",
      },
    ],
  },
  {
    name: "JavaScript",
    subTitle: "The Programming language of the web",
    description:
      "JavaScript is mainly run in the browser, but can run on servers and any other place today.",
    img: jsImage,
    prerequisits: ["html", "css"],
    parts: [
      {
        embed: `<iframe src="https://codesandbox.io/embed/purple-http-3cvem?autoresize=1&expanddevtools=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="purple-http-3cvem"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title: "Connecting HTML and JavaScript",
        description:
          "To insert JavaScript code in an HTML page we use the <script> tag.\nThe two options are to write the JavaScript code inside the tag or link to a JavaScript file with a url.",
      },
      {
        embed: `<iframe src="https://codesandbox.io/embed/fervent-cdn-2e0rt?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="fervent-cdn-2e0rt"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title: "Types and Variables",
        description:
          "JavaScript variables are used to save some value or data to reuse it later. Declaring and using a variable is easy since you don't need to specify the type.",
      },
      {
        embed: `<iframe src="https://codesandbox.io/embed/competent-wildflower-j362q?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="competent-wildflower-j362q"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title: "Conditions",
        description:
          "Making conditions helps to decide what your code will do next. For these case we use if, else and switch statements.",
      },
      {
        embed: `<iframe src="https://codesandbox.io/embed/practical-sky-94t0g?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="practical-sky-94t0g"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title: "Functions",
        description:
          "Functions are blocks of code you can declare to call (execute) later at the right time. They are very useful in order to reuse specific code actions.",
      },
      {
        embed: `<iframe src="https://codesandbox.io/embed/romantic-aryabhata-jf1pi?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="romantic-aryabhata-jf1pi"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title: "Loops",
        description:
          "Many times you will find that you want to go over an array list or values of an object. There are many ways to do loops and we'll cover the basic ones here.",
      },
      {
        embed: `<iframe src="https://codesandbox.io/embed/silent-firefly-x0hsr?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="silent-firefly-x0hsr"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title: "Changing the DOM (the HTML or the page)",
        description:
          "To make websites interactive you might want to change the page by adding different styles or showing different data. To do that we fetch the element (html tag) that we want to change and make our changes on it.",
      },
      {
        embed: `<iframe src="https://codesandbox.io/embed/admiring-river-k0nsk?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="admiring-river-k0nsk"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
        title: "Events in the browser",
        description:
          "Every tag on the page has many events that you can listen to and assign a function to be called when that event happens. Some of the basic ones are click (a left click of the mouse on the tag), hover, keydown (when a user clicks a key on the keyboard) and many more events.",
      },
    ],
  },
];

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
