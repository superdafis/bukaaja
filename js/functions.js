const body = () => {
  return document.body;
};

const text = (varName, Text) => {
  return (varName.textContent = Text);
};

const selector = (select) => {
  return document.querySelector(select);
};

const selectorAll = (select, index) => {
  return document.querySelectorAll(select)[index];
};

const button = () => {
  return document.createElement("button");
};

const heading = (tagName) => {
  return document.createElement(tagName);
};

const appendChilds = (container, child) => {
  return container.appendChild(child);
};

export default {
  body,
  text,
  button,
  appendChilds,
  heading,
  selector,
  selectorAll,
};
