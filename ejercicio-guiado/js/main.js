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
 const Pokacho = new Pokemon('Pokacho','amarillo',100);
 const Pocky = new Pokemon('Pocky','café',20);

 Pokacho.atacar(Pocky);
 document.write("La vida de Pocky es: " + Pocky.vida);
 console.log(Pocky.vida);