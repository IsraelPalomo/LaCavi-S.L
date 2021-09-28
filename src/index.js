import "./styles.css";
import "./styles.scss";
import imgSrc1 from "./static/img1.png";

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
