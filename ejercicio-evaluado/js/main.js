// EJERCICIO EVALUADO_LECCION 16_POO

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

	function peleaPokemon(){
		var atacante = document.getElementById('pokemon_A').value;
		var atacado = document.getElementById('pokemon_B').value; 
		var imprimir = document.getElementById('imprimir');
		// validar que no sea el mismo pokemon
		if (atacante=="Pokachu" && atacado=="Pokachu"){
			alert("No puede atacarse a sí mismo")
			return
		}
		if (atacante=="Pocky" && atacado=="Pocky"){
			alert("No puede atacarse a sí mismo")
			return
		}
		// validar que no este vacio
		if (atacante=="0" || atacado=="0"){
			alert("Escoja pokemon")
			return
		} 

		var ataque = prompt('Ingrese valor de ataque');
		var pokeObj1 = new Pokemon(atacante,'rojo', ataque);
		var pokeObj2 = new Pokemon(atacado,'otro color', 40);
		pokeObj1.atacar(pokeObj2);

		imprimir.innerHTML = atacante + " atacó a " + pokeObj2.nombre + " y " + pokeObj2.nombre + " tiene " + pokeObj2.vida + " de vida restante";
	}


