const imagens = [
    "src/images/img1.jpg", 
    "src/images/img1.jpg", 
    "src/images/img2.jpg", 
    "src/images/img2.jpg", 
    "src/images/img3.jpg", 
    "src/images/img3.jpg", 
    "src/images/img4.jpg", 
    "src/images/img4.jpg",
    "src/images/img5.jpg", 
    "src/images/img5.jpg",
    "src/images/img6.jpg", 
    "src/images/img6.jpg",
    "src/images/img7.jpg", 
    "src/images/img7.jpg",
    "src/images/img8.jpg", 
    "src/images/img8.jpg", 
];

let openCards = [];

let shuffledImages = imagens.sort(() => (Math.random() > 0.5 ? 1 : -1));

for (let i = 0; i < shuffledImages.length; i++) {
    let box = document.createElement("div");
    box.className = "item";

    // Coloca a imagem escondida dentro do box
    box.innerHTML = `<img src="${shuffledImages[i]}" alt="imagem" class="hidden" width="50">`;
    box.dataset.img = shuffledImages[i]; // atributo extra para comparar depois
    box.onclick = handleClick;

    document.querySelector(".game").appendChild(box);
}

function handleClick() {
    if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
        this.classList.add("boxOpen");
        this.querySelector("img").classList.remove("hidden");
        openCards.push(this);
    }

    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

function checkMatch() {
    if (openCards[0].dataset.img === openCards[1].dataset.img) {
        openCards[0].classList.add("matched");
        openCards[1].classList.add("matched");
    } else {
        openCards.forEach(card => {
            card.classList.remove("boxOpen");
            card.querySelector("img").classList.add("hidden");
        });
    }

    openCards = [];

    if (document.querySelectorAll(".matched").length === imagens.length) {
        alert("Você ganhou, GIOVANA CARA DE BANANA!!!!!");
    }
}
