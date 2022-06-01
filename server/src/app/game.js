import { Character } from "./character.js";

window.onload = function() {
	let c = new Character("Unicorn");
	console.log(c.naam);
	document.getElementsByTagName("main")[0].innerHTML = c.naam;
}