var btn_gotop = document.getElementById("gotop");

btn_gotop.addEventListener("click", scrolla);

function scrolla() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: "smooth"
	});
}

document.getElementById("link1").addEventListener("click", scrollacerca);
document.getElementById("link2").addEventListener("click", scrollserv);
document.getElementById("link3").addEventListener("click", scrollproyectos);
document.getElementById("link4").addEventListener("click", scrolltestimonios);
document.getElementById("link5").addEventListener("click", scrollcontacto);
document.getElementById("DM").addEventListener("click", scrollcontacto);


function scrollacerca() {
	var elmnt = document.querySelector("BODY");
	elmnt.scrollIntoView({ behavior: "smooth" });
}
function scrollserv() {
	var elmnt = document.getElementById("servicios");
	elmnt.scrollIntoView({ behavior: "smooth" });
}
function scrollproyectos() {
	var elmnt = document.getElementById("proyectos");
	elmnt.scrollIntoView({ behavior: "smooth" });
}
function scrolltestimonios() {
	var elmnt = document.getElementById("testimonios");
	elmnt.scrollIntoView({ behavior: "smooth" });
}
function scrollcontacto() {
	var elmnt = document.getElementById("contacto");
	elmnt.scrollIntoView({ behavior: "smooth" });
}

/*CERRAR _ ABRIR MENU */
document.getElementById("close_open").addEventListener("click", closeopen)

function closeopen(){
	document.getElementById("menu").classList.toggle("hide")
}
