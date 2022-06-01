export class Character {
	constructor(naam){
		// Door set en get methode wordt nu set naam() aangeroepen!
		this.naam = naam;
	}
	
	// Aanroep van karakter.naam, wordt nu vervangen door getter!	
	get naam(){
		return this._naam;
	}
	
	// Aanroep van karakter.naam=waarde wordt nu vervangen door setter!
	set naam(n){
		this._naam = n;
	}
}