const likeBtn = document.querySelector("like__btn");
let count = document.querySelector("#count");

let clicked = false;


likeBtn.addEventListener("click", () => {
  if (!clicked) {
    clicked = true;
    count.textContent++;
  } else {
    clicked = false;
    count.textContent--;
  }
});
