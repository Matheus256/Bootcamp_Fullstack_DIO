function soma(a: number, b:number){
    return a + b;
}

//interfaces

/*

interface IAnimal{
    nome: string;
    tipo: "terrestre" | "aquático";
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

const animal: IAnimal = {
    nome: "Elefante",
    tipo: "terrestre",
    executarRugido: (alturaEmDecibeis) => (`$(alturaEmDecibeis)dB`)
}

animal.executarRugido(12);

const felino: IFelino ={
    nome: "Leão",
    tipo: "terrestre",
    visaoNoturna: true,
    executarRugido: (alturaEmDecibeis) => (`$(alturaEmDecibeis)dB`)
}

*/ 

//type

/*
type IAnimal = {
    nome: string;
    tipo: "terrestre" | "aquático";
    domestico: boolean;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: "pequeno" | "medio" | "grande";
}

type IDomestico = IFelino | ICanino;
// type IDomestico = IFelino & ICanino;

const animal: IDomestico = {
    domestico: true,
    nome: "cachorro",
    porte: "medio",
    tipo: "terrestre",
}

//Interfaces são usadas pra definir contratos
//Enquanto que o type é usado para fazer junções

*/

const input = document.getElementById("input") as HTMLInputElement;

input.value;

input.addEventListener("input", (event) => {
    console.log("Digitei");
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});

//Generic types

function adicionaApendiceALista<T>(array: T[], valor: T){
    return array.map(() => valor);
}

adicionaApendiceALista([1,2,3],1);
adicionaApendiceALista(["A","B","C"], "d");

//adicionaApendiceALista([1,2,3], "a"); \\erro

interface IUsuario{
    id: string;
    email: string;
}

interface IAdmin extends IUsuario{
    cargo: "gerente" | "coordenador" | "supervisor";
}

function redirecione(usuario: IUsuario | IAdmin){
    if("cargo" in usuario){
        //Caso o usuario tenha o campo "cargo"
        //Redireciona para a ária de administração
    }

    //Caso contrário
    //Redireciona para a área de usuário 
}

//Mesmo efeito anterior, mas agora com um atributo opcional
interface IUser{
    id: string;
    email: string;
    cargo?: "gerente" | "coordenador" | "supervisor" | "funcionario";
}

function redirecionamento(usuario: IUser){
    if(usuario.cargo){
        //Redirecione(usuario, cargo);
    }

    //redirecionar para área de usuário
}

interface ICachorro{
    nome: string;
    idade: number;
    parqueFavorito?: string;
}

//Mesmos atributos de ICachorro mas apenas para leitura
type ICachorroSomenteLeitura = {
    readonly [k in keyof ICachorro]: ICachorro[k];
    //readonly [k in keyof ICachorro]-?: ICachorro[k]; //Remove os opcionais
}

class MeuCachorro implements ICachorro{
    idade;
    nome;

    constructor(nome, idade){
        this.idade = idade;
        this.nome = nome;
    }
}

const cachorro = new MeuCachorro("Stich",14);

cachorro.idade = 7;

//No caso abaixo os atributos de Estudante serão juntados
interface Estudante {
    nome: string;
    idade: number;
}

interface Estudante{
    serie: string;
}