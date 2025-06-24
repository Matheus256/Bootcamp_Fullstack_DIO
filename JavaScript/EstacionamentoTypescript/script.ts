interface Veiculo{
    nome: string;
    placa: string;
    entrada: Date | string;
}

(function () {
    const $ = (query: string): HTMLInputElement | null => 
        document.querySelector(query);

        function calcTempo(mil: number){
            const mim = Math.floor(mil / 60000);
            const sec = Math.floor((mil % 60000) / 1000);

            return `${mim}m e ${sec}s`;
        }

        function patio(){

            //Ler as informações patio armazenadas no locaStorage 
            function ler(): Veiculo[]{
                return localStorage.patio ? JSON.parse(localStorage.patio) : [];
            }

            function salvar(veiculos: Veiculo[]){
                localStorage.setItem("patio", JSON.stringify(veiculos));
            }

            function adicionar(veiculo: Veiculo, salva?: boolean){
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${veiculo.nome}</td>
                    <td>${veiculo.placa}</td>
                    <td>${veiculo.entrada}</td>
                    <td>
                        <button class="delete" data-placa="${veiculo.placa}">X</button>
                    </td>
                `;

                row.querySelector(".delete")?.addEventListener("click", function(){
                    remover(this.dataset.placa )
                })

                //Adiciona a linha criada a tabela do HTML
                $("#patio")?.appendChild(row);

                //Ler os veículos já vos e adiciona o novo veículo antes de salvar
                if(salva)
                    salvar([...ler(),veiculo]);
            }

            function remover(placa: string){
                const {entrada, nome} = ler().find(veiculo => veiculo.placa == placa);

                const tempo = calcTempo(new Date().getTime() - new Date(entrada).getTime());

                if(!confirm(`O veículo ${nome} permaneceu por ${tempo}. Deseja encerrar?`)) return;

                salvar(ler().filter(veiculo => veiculo.placa !== placa));
                render();

            }

            function render(){
                $("#patio")!.innerHTML = "";
                const patio = ler();

                if(patio.length){
                    patio.forEach((veiculo) => adicionar(veiculo));
                }
            }

            return {ler, adicionar, remover, salvar, render};
        }

    patio().render();

    $("#cadastrar")?.addEventListener("click", () => {
        const nome = $("#nome")?.value;
        const placa = $("#placa")?.value;

        if(!nome || !placa){
            alert("Os campos nome e placa são obirgatórios");
            return;
        }

        patio().adicionar({nome, placa, entrada: new Date().toISOString()}, true);
    });
})();

//Após salvar e antes de testar lembrar de digitar seguinte comando no terminal:
//npx -p typescript tsc
//Com este comando o arquivo script.js é gerado a partir do script.ts
