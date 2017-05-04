function seleccion(){

	function Pokemon(nombre,color,poderDeAtaque){
		this.nombre = nombre;
		this.color = color;

		this.nivelDeAmistad = 0;
		this.vida = 100;
		this.poderDeAtaque = poderDeAtaque;

		this.mostrarPokemon = function(){
			return('Hola, soy; ' + this.nombre + ' y soy de color: ' + this.color);
		}
		this.aumentarAmistad = function(valor){
			this.nivelDeAmistad = this.nivelDeAmistad + valor;
		}
		this.atacar = function(pokemon){
			pokemon.vida = pokemon.vida - this.poderDeAtaque;
		}
	}
	Pokemon();

	const Pokacho = new Pokemon('Pokacho','amarillo',55);
	const Pocky = new Pokemon('Pocky','café',20);

	function pelear(){
		var seleccion_A = document.getElementsByClassName("opcion")[0];
		var seleccion_B = document.getElementsByClassName("opcion")[1];
		
		// POKEMON A
		for (var i = 0; i < seleccion_A.length; i++) {
		 	//comprobar que escoja pokemon 
		 	if (seleccion_A[i].value=="0") {
		 		alert("Debe elegir Pokémon A");
		 	}

		// POKEMON B
		for (var i = 0; i < seleccion_B.length; i++) {
		 	//comprobar que escoja pokemon 
		 	if (seleccion_B[i].value=="0") {
		 		alert("Debe elegir Pokémon B");
		 	}
	}
	pelear();
}