import "./styles.css";
import "./styles.scss";

//?Menu Desplegable

const iconoMenu = document.querySelector(".nav__icono-menu");
const menuDesplegable = document.querySelector(".menu-desplegable");
iconoMenu.addEventListener("click", () => {
	iconoMenu.classList.toggle("fa-bars");
	iconoMenu.classList.toggle("fa-times");
	menuDesplegable.classList.toggle("opacity");
});
