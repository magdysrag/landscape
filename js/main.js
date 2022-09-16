let icon = document.querySelector(".icon");
let links = document.querySelector(".links");
let ul = document.querySelector(".links ul");
links.addEventListener("click", (e) => {
  e.preventDefault();
  if (ul.style.display === "block") {
    ul.style.display = "none";
  } else {
    ul.style.display = "block";
  }
});




