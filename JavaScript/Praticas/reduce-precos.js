lista = [
	{
		preco: 2,
		nome: 'maçã',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 25,
		nome: 'carne',
	},
];

const saldo = 100;

function saldoPrecos(array, saldo = 0){
    return array.reduce(function(prev,current){
        return prev - current.preco;
    }, saldo);
}

console.log(saldoPrecos(lista, saldo));