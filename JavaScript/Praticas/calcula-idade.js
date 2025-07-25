function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Amelia',
	idade: 23,
};

const pessoa2 = {
	nome: 'Márcia',
	idade: 20,
};

const pessoa3 = {
	nome: 'Jonas',
	idade: 13,
};

console.log(calculaIdade.call(pessoa1,4));
console.log(calculaIdade.call(pessoa2,10));
console.log(calculaIdade.call(pessoa3,5));

console.log(calculaIdade.call(pessoa1,[4]));
console.log(calculaIdade.call(pessoa2,[10]));
console.log(calculaIdade.call(pessoa3,[5]));