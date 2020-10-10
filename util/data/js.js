import { jsImage } from "../images";

const js = {
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
     title="Conditions"
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
     title="Functions"
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
     title="Loops"
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
     title="Changing the DOM"
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
     title="Events in the browser"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
      title: "Events in the browser",
      description:
        "Every tag on the page has many events that you can listen to and assign a function to be called when that event happens. Some of the basic ones are click (a left click of the mouse on the tag), hover, keydown (when a user clicks a key on the keyboard) and many more events.",
    },
    {
      embed: `<iframe src="https://codesandbox.io/embed/exciting-fog-fps96?autoresize=1&expanddevtools=1&fontsize=16&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Fetching data and Promises"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
      title: "Fetching data and Promises",
      description:
        "Fetching data is very common on the web, whether it is data that you show on the page like text or numbers or something else you need to show something to users. Often in JavaScript when fetching data, promises are in use.",
      bottomText:
        "You can simply open this URL https://jsonplaceholder.typicode.com/users in the browser and see the data that is being returned.",
    },
    //     {
    //       embed: `<iframe src="https://codesandbox.io/embed/admiring-river-k0nsk?autoresize=1&fontsize=16&hidenavigation=1&theme=dark"
    //    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    //    title="admiring-river-k0nsk"
    //    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    //    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
    //  ></iframe>`,
    //       title: "Libraries (Google maps, jQuery) and using other people's code",
    //       description:
    //         "Many times you would find other people wrote a library (code) that you could use to build your website. A bit of searching ",
    //     },
  ],
};

export default js;
