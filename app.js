const list = document.querySelectorAll("li");
list.forEach((el) => {
  console.dir(el);
});

const ul = document.querySelector("ul");
ul.firstElementChild;
ul.lastElementChild;
ul.children[1];
ul.childNodes;
ul.children[1].parentElement;
ul.children[1].nextElementSibling;
