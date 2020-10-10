import { cssImage } from "../images";

const css = {
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
      embed: `<iframe src="https://codesandbox.io/embed/sleepy-hoover-o8vc4?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="sleepy-hoover-o8vc4"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
      title: "CSS rules (declarations)",
      description:
        "CSS rules are style declarations of how the selected element should appear. There are many but we will focus here on the basic ones.",
    },
    {
      embed: `<iframe src="https://codesandbox.io/embed/crazy-mahavira-lhcog?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="crazy-mahavira-lhcog"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
      title: "CSS rules positioning: display and position",
      description:
        "Many time you will find yourself in need of change the behaviour of elements with others in the page. For those cases knowing the display and position are really useful.",
    },
    {
      embed: `<iframe src="https://codesandbox.io/embed/fragrant-bush-0qic9?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="fragrant-bush-0qic9"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>>`,
      title: "CSS rules spacing: margin and padding",
      description:
        "To control the spacing between elements on the page we use margin and padding rules. They are similar besided the fact that margin effects the outer part of the element and padding effects the inner part of the element.",
    },
    {
      embed: `<iframe src="https://codesandbox.io/embed/dazzling-bogdan-6wr0m?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="dazzling-bogdan-6wr0m"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
      title: "CSS rules fonts: font-family, font-size and more...",
      description:
        "Font rules enable you to change how text appears and much more. Some of the basic useful font rules are: font-family, font-size, color, line-height, font-weight and font-style",
    },
    {
      embed: `<iframe src="https://codesandbox.io/embed/objective-faraday-xp46g?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="objective-faraday-xp46g"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
      title: "Media queries (mobile and different screen sizes)",
      description:
        "Media queries are blocks of css with a condition to apply when it fits. Mostly used to activate rules per the screen width for mobile, tablet and desktop devices.",
    },
  ],
};

export default css;
