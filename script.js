const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  slidesPerView: "auto",
  spaceBetween: 15,
  breakPoints: {
    320: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 3,
    },
    640: {
      slidesPerView: "auto",
    },
  },
});

const newRelease = document.querySelector(".hide-section");

let lastKnownScrollPosition = 0;

const showSection = (actualScrollPosition) => {
  if (actualScrollPosition > 100) {
    newRelease.classList.remove("hide-section");
  } else {
    actualScrollPosition < 100;
    newRelease.classList.add("hide-section");
  }
};

document.addEventListener("scroll", () => {
  lastKnownScrollPosition = window.scrollY;

  showSection(lastKnownScrollPosition);
});

/*const cards = {
    cd1: [{
        title: 'Unorthodox',
        img: './assets/imgs/movies/1.png',
    },
    {
        title: 'After Life',
        img: './assets/imgs/movies/1.png',

    }
  ],
  cd2: [{
    title: 'Unorthodox',
    img: './assets/imgs/movies/1.png',
},
{
    title: 'After Life',
    img: './assets/imgs/movies/1.png',

}
],
cd3: [{
    title: 'Unorthodox',
    img: './assets/imgs/movies/1.png',
},
{
    title: 'After Life',
    img: './assets/imgs/movies/1.png',

}
],
cd4: [{
    title: 'Unorthodox',
    img: './assets/imgs/movies/1.png',
},
{
    title: 'After Life',
    img: './assets/imgs/movies/1.png',

}
]
}

const sideCard=document.getElementById("side-card");
const createCard=(cardData, divToAppend)=>{
    const cardContainer = document.createElement("div");
    cardContainer.setAttribute("class","card gap-1 shadow-sm")
    const imgCard = document.createElement("img");
    imgCard.setAttribute("class", "card-img-top object-fit-cover");
    imgCard.setAttribute("src", cardData.img);
    const bodyCard = document.createElement("div");
    bodyCard.setAttribute("class", "card-body text-white bg-dark");
    const titleCard = document.createElement("h5");
    titleCard.innerText = cardData.title;
    titleCard.setAttribute("class", "card-title");
    bodyCard.appendChild(titleCard);
    cardContainer.append(imgCard, bodyCard)
    sideCard.appendChild(cardContainer);
    divToAppend.appendChild(sideCard);
}

cards.cd1.forEach(card => {
    createCard(card, sideCard);
})

const sideCard2=document.getElementById("side-card2")
cards.cd2.forEach(card => {
    createCard(card, sideCard2);
})*/
