import "./styles.css";
import "./styles.scss";
import imgSrc1 from "./static/presupuesto.png";
import imgSrc2 from "./static/obrero.png";
import imgSrc3 from "./static/virus.png";

//? Menu Desplegable

const iconoMenu = document.querySelector(".nav__icono-menu");
const menuDesplegable = document.querySelector(".menu-desplegable");

iconoMenu.addEventListener("click", () => {
	iconoMenu.classList.toggle("fa-bars");
	iconoMenu.classList.toggle("fa-times");
	menuDesplegable.classList.toggle("scale");
});

//? Imagenes

const img1 = document.querySelector(".main__servicios--presupuestos");
img1.src = imgSrc1;
const img2 = document.querySelector(".main__servicios--mano-obra");
img2.src = imgSrc2;
const img3 = document.querySelector(".main__servicios--seguridad");
img3.src = imgSrc3;
