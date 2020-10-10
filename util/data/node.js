import { nodejsImage } from "../images";

const nodejs = {
  name: "Node.js",
  subTitle: "JavaScript Server-side, without html",
  description:
    "Node.js is the way to run JavaScript on your machine outside of the browser. Whether you want to build a server or just a script that reads and writes files, Node.js is useful in many ways to extend your capabilities with JavaScript outside of the browser. Make sure to install Node.js to your machine before starting this guide. You can find the download link here: https://nodejs.org/en/download/",
  img: nodejsImage,
  prerequisits: ["javascript"],
  parts: [
    // {
    //   image: "anatomy-of-an-html-element.png",
    //   title: "HTML tag structure",
    //   description:
    //     "An html tag is made out of it's openning tag, closing tag, it's content in the middle and it's attributes and values on it's opening tag.\n There are tags the don't have closing tags like the <br/> and <img/> tags.",
    // },
    /*
    <iframe height="1000px" width="100%" src="https://repl.it/@OrYoffe/ConcreteDecisiveMedia?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
      
     */
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
  ],
};

export default nodejs;
