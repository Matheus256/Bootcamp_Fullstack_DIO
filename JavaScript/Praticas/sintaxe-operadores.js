function atividadeOperadores(a,b){
	var frase = "Os números " + a + " e " + b;
    const soma = a + b;

    frase = (a === b) ? frase + " são iguais" : frase + " não são iguais";

    frase = frase + ". Sua soma é " + soma + ", que é ";
    
    frase = (soma < 10) ? frase + "menor que 10 e " : frase + "maior ou igual do que 10 e ";

    frase = (soma < 20) ? frase + "menor do que 20." : frase + "maior ou igaul do que 20.";

    return frase;
}

console.log(atividadeOperadores(7,7));