const myArray = ["HTML", "CSS", "Javascript", "Vue", "Angular", "React"];
let tech = "<ul>";
for (let i = 0; i < myArray.length; i++) {
  const n = myArray[i];
  tech = tech + "<li>" + n + "</li>";
}
tech = tech + "</ul>";
document.querySelector("#container").innerHTML = tech;

const listItems = document.getElementsByTagName("li");
console.log(listItems);
for (let i = 0; i < listItems.length; i++) {
  listItems[i].innerHTML = "C++ rules";
}

const containerElement = document.querySelector("#container");
containerElement.addEventListener("mouseover", () => {
  containerElement.style.color = "green";
  containerElement.innerHTML = tech;
});
containerElement.addEventListener("mouseout", () => {
  containerElement.style.color = "black";
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Dom content loaded");
});

window.addEventListener("load", () => {
  console.log("Window loaded");
});
