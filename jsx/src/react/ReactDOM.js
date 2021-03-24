function setAttribute(dom, name, value) {
  if (name === "className") {
    name = "class";
  } else {
    if (value) {
      dom.setAttribute(name, value);
    } else {
      dom.removeAttribute(name, value);
    }
  }
}

function renderVDom(vNode) {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  }

  const dom = document.createElement(vNode.type);
  if (vNode.props) {
    Object.keys(vNode.props).forEach((key) => {
      const value = vNode.props[key];
      setAttribute(dom, key, value);
    });
  }

  if (vNode.children) {
    vNode.children.forEach((child) => render(child, dom));
  }
  return dom;
}

function render(vNode, container) {
  const dom = renderVDom(vNode);
  return container.appendChild(dom);
}

export default {
  render,
};
