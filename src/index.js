import "./styles.css";
import "./styles.scss";
import imgSrc1 from "./static/img1.png";
import imgSrc2 from "./static/uno.svg";

//? Menu Desplegable

const iconoMenu = document.querySelector(".nav__icono-menu");
const menuDesplegable = document.querySelector(".menu-desplegable");

iconoMenu.addEventListener("click", () => {
	iconoMenu.classList.toggle("fa-bars");
	iconoMenu.classList.toggle("fa-times");
	menuDesplegable.classList.toggle("scale");
});

//? Imagenes
let img1 = document.querySelector(".main__img1");
img1.src = imgSrc1;
let img2 = document.querySelector(".main__img2");
img2.src = imgSrc2;
