const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
        nome: 'Miguel',
        nota: 3,
        turma: '1A',
    },
    {
        nome: 'Matheus',
        nota: 10,
        turma: '1A',
    },
];

//Sem usar "object destructuring"
function alunosAprovados1(array, media = 7){
    let aprovados = [];

    for(let i = 0; i < array.length; i++){
        if(array[i].nota >= media){
            aprovados.push(array[i].nome);
        }
    }

    return aprovados;
}

//Usando "object destructuring"
function alunosAprovados(array, media = 7){
    let aprovados = []

    for(let i = 0; i < array.length; i++){
    
        const {nota, nome} = array[i];

        if(nota >= media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos,6));
console.log(alunosAprovados(alunos));