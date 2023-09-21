// import images as relative image path won't work with vite/vercel.
import sushi10 from '../assets/sushi-10.png'
import sushi11 from '../assets/sushi-11.png'
import sushi12 from '../assets/sushi-12.png'

import AOS from "aos"
import "aos/dist/aos.css"

// init AOS animation
AOS.init({
    duration: 1000,
    offset: 100,
});

//mobile header active
const mobileMenu = document.querySelector(".header__menu-mobile li img")
const headerMenu = document.querySelector(".header__menu")

mobileMenu.addEventListener("click", ()=>{
    headerMenu.classList.toggle("active-mobile")
})


const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
]

const cards = [
    {
        imgSrc: sushi12,
        alt: "sushi-12",
        title: "Chezu Sushi",
        rating: "4.8",
        price: "$21.00"
    },
    {
        imgSrc: sushi11,
        alt: "sushi-11",
        title: "Originale Sushi",
        rating: "4.8",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: sushi10,
        alt: "sushi-10",
        title: "Ramen Legendo",
        rating: "4.8",
        price: "$21.00"
    }
];