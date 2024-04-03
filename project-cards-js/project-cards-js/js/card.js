


const blackColor = document.querySelector(".Dodge");
const redColor = document.getElementsByClassName(".Lotus");
const grayColor = document.querySelector(".Mercedez");

const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];

const imageCard = document.querySelector(".img-container");
const feedbackBtn = document.querySelector(".feedback");

// Eventos en los botones de colores

redColor.addEventListener("click", function(){

    cartButton.style.backgroundColor= "red";
    cartButton.style.color = "black";
    itemTag.style.backgroundColor = "red";
    itemTag.style.color = "black";
    imageCard.style.backgroundImage = 'url(../img/challenger.jpg)'
});

darkRedColor.addEventListener("click", function(){

    cartButton.style.backgroundColor= "darkred";
    cartButton.style.color = "black";
    itemTag.style.backgroundColor = "darkred";
    itemTag.style.color = "black";
    imageCard.style.backgroundImage = 'url(../img/lotus.jpg)'
});

grayColor.addEventListener("click", function(){

    cartButton.style.backgroundColor= "gray";
    cartButton.style.color = "black";
    itemTag.style.backgroundColor = "gray";
    itemTag.style.color = "black";
    imageCard.style.backgroundImage = 'url(../img/mercedez.jpg)';
});

// implementar el botón del carrito

const cart = () => {

    cartButton.style.display = "none";
    feedbackBtn.style.display = "block";

}

cartButton.addEventListener("click", cart);

const feedbackFun = () => {

    cartButton.style.display = "block";
    feedbackBtn.style.display = "none";
}

feedbackBtn.addEventListener("click", feedbackFun);