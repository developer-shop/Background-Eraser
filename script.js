const likeBtn = documento. querySelector(".like__btn");
const likeIcon = documento. querySelector("#icon"),
const  recuento = documento. querySelector("#count");

let clicked = false;


como Btn. addEventListener("clic", () => {
  si (! Clic) {
    clicado = verdadero;
    likeIcon. innerHTML = '<i class="fas fa-thumbs-up"></i>';
    contar. textContent++;
  } más {
    clicado = false;
    likeIcon. innerHTML = '<i class="far fa-thumbs-up"></i>';
    contar. textContent--;
  }
});
