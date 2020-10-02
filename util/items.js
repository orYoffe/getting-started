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
    parts: [
      {
        embed: `<iframe src="https://codesandbox.io/embed/white-cloud-zyegl?autoresize=1&codemirror=1&fontsize=15&hidenavigation=1&theme=dark"
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
        embed: `<iframe src="https://codesandbox.io/embed/mystifying-montalcini-srutx?autoresize=1&codemirror=1&eslint=1&fontsize=14&hidenavigation=1&theme=dark"
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
        embed: `<iframe src="https://codesandbox.io/embed/gifted-ride-xvrby?autoresize=1&codemirror=1&fontsize=15&theme=dark"
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
  },
  {
    name: "JavaScript",
    subTitle: "The Programming language of the web",
    img: jsImage,
    prerequisits: ["html", "css"],
  },
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
