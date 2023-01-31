// const list = document.querySelectorAll("li");
// list.forEach((el) => {
//   console.dir(el);
// });

// const ul = document.querySelector("ul");
// ul.firstElementChild;
// ul.lastElementChild;
// ul.children[1];
// ul.childNodes;
// ul.children[1].parentElement;
// ul.children[1].nextElementSibling;

const section = document.querySelector("section");
const btn = document.querySelector("button");

// section.className = "red-bg";
btn.addEventListener("click", () => {
  // if (section.className === "red-bg visible") {
  //   section.className = "red-bg invisible";
  // } else {
  //   section.className = "red-bg visible";
  // }
  // section.classList.toggle("visible");
  section.classList.toggle("invisible");
});
