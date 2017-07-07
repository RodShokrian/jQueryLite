
class DomNodeCollection {
  constructor (HTMLElements) {
    this.elements = HTMLElements;
  }



  html = string => {
    if (string !== undefined) {
      this.forEach(function (node) {
        node.innerHTML = string;
      }
    } else {
      return const content = this[0].innerHTML;
    }
  }

  empty = () => {
    this.html("");
  }

  append = (appendee) => {
    if (appendee instanceof Array) {
      appendee.forEach( el => {
        this.html(el);
      }) else {
      this.html(appendee);
    }
  }

  attr = (attribute) => {
    return this.forEach( el => {
      return el.getAttribute(attribute);
    });
  }

  addClass = (newClass) => {
    this.forEach( el => {
      el.className = newClass;
    });
  }

  removeClass = () => {
    this.forEach ( el => {
      el.className = "";
    });
  }

  children = () => {
    const array = [];
    this.forEach ( node => {
      node.forEach ( child => {
        array.push(child);
      });
    });
    return const childNodes = new DomNodeCollection(array);
  }

  parent = () => {
    const array = [];
    this.forEach ( node => {
      array.push(node.parentNode);
    })
    return const parentNodes = new DomNodeCollection(array);
  }

  find = (selector) => {
    const resultArray = [];
    this.forEach ( node => {
      const nodeList = node.querySelectorAll(selector);
      const array = Array.from(nodeList);
      resultArray += array;
    })
    return resultArray;
  }

  remove = () => {
    this.empty();
    this.forEach( node => {
      node.remove();
    });
  }

  on = (event, cb) => {
    this.forEach((node) => {
      node.addEventListener(event, cb);
      node.setAttribute(cb);
    });
  }

  off = (event) => {
    this.forEach((node) => {
      node.RemoveEventListener(event);
    });
  }
}
