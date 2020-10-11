import { nodejsImage } from "../images";

const nodejs = {
  name: "Node.js",
  subTitle: "JavaScript Server-side, without html",
  description:
    "Node.js is the way to run JavaScript on your machine outside of the browser. Whether you want to build a server or just a script that reads and writes files, Node.js is useful in many ways to extend your capabilities with JavaScript outside of the browser. Make sure to install Node.js to your machine before starting this guide. You can find the download link here: https://nodejs.org/en/download/",
  img: nodejsImage,
  prerequisits: ["javascript"],
  parts: [
    {
      embed: `<iframe height="1000px" width="100%" src="https://repl.it/@OrYoffe/ConcreteDecisiveMedia?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>`,
      //   embed: ` <iframe frameborder="0" width="100%" height="500px" src="https://stackblitz.com/edit/js-fp2vpz?devtoolsheight=33&embed=1&file=index.js&theme=dark"></iframe>`,
      //   embed: ` <iframe frameborder="0" width="100%" height="500px" src="https://repl.it/@OrYoffe/ConcreteDecisiveMedia?lite=true"></iframe>`,
      title: "Another way to run JavaScript",
      description:
        "You can do many things with Node.js, the first part to get through is running a JavaScript file on your machine with it. Try doing this yourself on your machine. If you encounter issues with the terminal (Mac) or command-line (Windows), don't be shy and Google to how to change directory with the \"cd\" command and any other issue you might have. There's an answer to any issue, since many tackled it before you and me. Try to be specific as possible when searching and try different search terms.",
      bottomText:
        'You can create your own .js files like this "index.js" or "any-name_you_want.js" and run them in your terminal/command-line by running "node index.js" from the folder the file is in.',
    },
    {
      embed: `<iframe height="1000px" width="100%" src="https://repl.it/@OrYoffe/WarlikeOrganicProcedurallanguage?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>`,
      title: "Requiring other files and modules",
      description:
        "Node.js comes with a built-in function called 'require' to fetch other JavaScript files and Modules and 'module.exports' to export functionality and data to other JavaScript files. Node.js also comes with many 'core modules' such as 'fs' (file system) and many more. To check more of the 'core modules' head over to https://www.w3schools.com/nodejs/ref_modules.asp.",
      bottomText:
        "Try this script on your own computer. The best way to learn is by doing. Try writing a script that will write and prints stuff you need to do, like a todo list.",
    },
    {
      embed: `<iframe src="https://codesandbox.io/embed/web-server-e5icx?expanddevtools=1&fontsize=16&module=%2Fapp.js&theme=dark&view=editor"
     style="width:100%; height:1000px; border:0; border-radius: 4px; overflow:hidden;"
     title="web server"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>`,
      title:
        "The 'package.json' file, npm (node.js package manager) and express (a simple web server framework)",
      description:
        'Node.js projects manage their "dependencies", scripts (commands) and other meta data about the project. To install libraries or any other module for you project, most Node.js developers use npm, the Node.js package manager. By entering "npm install express" in your terminal/comman-line in your project, \'express\' will be added to your list of dependencies and you can require("express") in your project and use it to build a web server.',
      bottomText:
        "Try this script on your own computer. When you run a web server on your machine, the domain will be localhost so you can access it to the port it is listening to, like 8080 in this example. You can open the browser at http://localhost:8080",
    },
  ],
};

export default nodejs;
