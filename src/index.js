import "./styles.css";
import "./styles.scss";
import imgSrc1 from "./static/presupuesto.webp";
import imgSrc2 from "./static/obrero.webp";
import imgSrc3 from "./static/virus.webp";
//TODO imagines slider
import imgSrc4 from "./static/Img2.png";
import imgSrc5 from "./static/Img3.png";
import imgSrc6 from "./static/img4.jpg";
import imgSrc7 from "./static/Img5.png";
import imgSrc8 from "./static/Img6.png";
import imgSrc9 from "./static/img7.png";
import imgSrc10 from "./static/img8.jpg";
import imgSrc11 from "./static/img9.jpg";
import imgSrc12 from "./static/img10.jpg";

//? Menu Desplegable

const iconoMenu = document.querySelector(".nav__icono-menu");
const menuDesplegable = document.querySelector(".menu-desplegable");
const enlace1 = document.querySelector(".menu-desplegable__link--1");
const enlace2 = document.querySelector(".menu-desplegable__link--2");
const enlace3 = document.querySelector(".menu-desplegable__link--3");
const enlace4 = document.querySelector(".menu-desplegable__link--4");
const enlace5 = document.querySelector(".menu-desplegable__link--5");

iconoMenu.addEventListener("click", () => {
	iconoMenu.classList.toggle("fa-bars");
	iconoMenu.classList.toggle("fa-times");
	menuDesplegable.classList.toggle("scale");
});
enlace1.addEventListener("click", () => {
	menuDesplegable.classList.toggle("scale");
	iconoMenu.classList.toggle("fa-bars");
	iconoMenu.classList.toggle("fa-times");
});
enlace2.addEventListener("click", () => {
	menuDesplegable.classList.toggle("scale");
	iconoMenu.classList.toggle("fa-bars");
	iconoMenu.classList.toggle("fa-times");
});
enlace3.addEventListener("click", () => {
	menuDesplegable.classList.toggle("scale");
	iconoMenu.classList.toggle("fa-bars");
	iconoMenu.classList.toggle("fa-times");
});
enlace4.addEventListener("click", () => {
	menuDesplegable.classList.toggle("scale");
	iconoMenu.classList.toggle("fa-bars");
	iconoMenu.classList.toggle("fa-times");
});
enlace5.addEventListener("click", () => {
	menuDesplegable.classList.toggle("scale");
	iconoMenu.classList.toggle("fa-bars");
	iconoMenu.classList.toggle("fa-times");
});

//? Imagenes

const img1 = document.querySelector(".main__servicios--presupuestos");
img1.src = imgSrc1;
const img2 = document.querySelector(".main__servicios--mano-obra");
img2.src = imgSrc2;
const img3 = document.querySelector(".main__servicios--seguridad");
img3.src = imgSrc3;

//TODO IMAGINES SLIDER

const img4 = document.querySelector(".slider__img--1");
img4.src = imgSrc4;
const img5 = document.querySelector(".slider__img--2");
img5.src = imgSrc5;
const img6 = document.querySelector(".slider__img--3");
img6.src = imgSrc6;
const img7 = document.querySelector(".slider__img--4");
img7.src = imgSrc7;
const img8 = document.querySelector(".slider__img--5");
img8.src = imgSrc8;
const img9 = document.querySelector(".slider__img--6");
img9.src = imgSrc9;
const img10 = document.querySelector(".slider__img--7");
img10.src = imgSrc10;
const img11 = document.querySelector(".slider__img--8");
img11.src = imgSrc11;
const img12 = document.querySelector(".slider__img--9");
img12.src = imgSrc12;

//TODO SLIDER

var swiper = new Swiper(".mySwiper", {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides: true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 50,
		stretch: 0,
		depth: 100,
		modifier: 1,
		slideShadows: true,
	},
	pagination: {
		el: ".swiper-pagination",
	},
});

AOS.init();
