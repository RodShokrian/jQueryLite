const DomNodeCollection = require("./dom_node_collection.js");

window.$l = function (argument) {
  if (typeof argument === "string") {
    return Nodeifier(argument);

  } else if (argument instanceof HTMLElement) {
    const wrappedArg = [];
    wrappedArg.push(argument);
    return Nodeifier(wrappedArg);
  }
  

};

const Nodeifier = argument => {
  const nodeList = document.querySelectorAll(argument);
  const array = Array.from(nodeList);
  const elements = new DomNodeCollection(array);
  return elements;
};
