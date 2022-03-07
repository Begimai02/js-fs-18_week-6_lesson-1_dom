//! getElement/s && querySelector/All

let about = document.getElementById("about");
// console.log(about);

let elems = document.getElementsByClassName("elem");
console.log(elems);
for (let item of elems) {
  console.log(item, "item");
}

let blocks = document.getElementsByTagName("div");
// console.log(blocks[0]);

// -----
let elem = document.querySelector(".elem");
// console.log(elem);

let div = document.querySelector("div");
// console.log(div);

let divs = document.querySelectorAll("div");
// console.log(divs[1]);

// divs.forEach((item) => console.log(item));

// for

//! createElement / innerHTML / innerText /

let newDiv = document.createElement("div");

newDiv.innerText = "текст внутри div";
newDiv.innerHTML = "<h2>Welcome</h2>";

let parent1 = document.querySelector("#parent1");
parent1.append(newDiv);

// ! append / prepend / after / before

parent1.prepend(newDiv);

let inp = document.createElement("input");
about.after(inp);

inp.setAttribute("placeholder", "search the page");

inp.setAttribute("class", "test");

// ! firstElementChild / lastElementChild
// ! nextElementSibling / previousElementSibling

let list = document.querySelector(".list");
// console.log(list.firstElementChild);

// console.log(list.lastElementChild.innerText);

// console.log(list.parentNode);

let firstItem = document.querySelectorAll(".item");
// console.log(firstItem.nextElementSibling);

// console.log(firstItem[1].previousElementSibling);

//!  NodeList vs HTMLCollection

let items = document.getElementsByClassName("item");
// console.log(items);

let nodeItems = document.querySelectorAll(".item");
// console.log(nodeItems);

let newItem = document.createElement("li");
newItem.innerText = "Read more books";
newItem.classList.add("item");

list.append(newItem);
// console.log("after html", items);
// console.log("after node", nodeItems);

nodeList = document.querySelectorAll(".item");
// console.log(nodeList);

// !  style
let title = document.querySelector(".title");
title.style.color = "green";
// console.log(title.style);
title.style.backgroundColor = "gold";

let one = document.querySelector(".block-one");

let style1 = `
    font-size: 20px;
    color: red;
    background-color: black;
    transform: rotate(15deg)
`;
one.style = style1;

let two = document.querySelector(".block-two");
two.classList.add("test");
two.classList.remove("test");
two.classList.toggle("test");

// two.className = "test 2";
