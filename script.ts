// Aqui é nosso 'backend'
const dados: Array<{
  nome: string;
  nascimento: string;
  nomeVacina: string;
  dataVacina: string;
  dataReforco: string;
}> = [];

// Essa é nossa função que lista os dados que vieram do HTML
function listarDados() {
  const dadosList = document.getElementById("dadosList") as HTMLUListElement;
  dadosList.innerHTML = "";

  dados.forEach(valor => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Nome: ${valor.nome} <br>
        Data de nascimento: ${valor.nascimento} <br>
        Nome da vacina: ${valor.nomeVacina} <br>
        Data de vacinação: ${valor.dataVacina} <br>
        Data de reforço: ${valor.dataReforco}`;
    dadosList.appendChild(listItem);
  });
}

// Essa é a função que insere os valores do HTML nas nossas variáveis dentro do JS 
function salvarCadastro() {
  const nome = (document.getElementById("nome") as HTMLInputElement).value;
  const cpf = (document.getElementById("cpf") as HTMLInputElement).value;
  const nascimento = (document.getElementById("nascimento") as HTMLInputElement).value;
  
 
const nomeVacina = (document.getElementById("nomeVacina") as HTMLInputElement).value;
  const dataVacina = (document.getElementById("dataVacina") as HTMLInputElement).value;

  // Esse é o bloco de código que adiciona 30 dias à data que selecionamos no HTML
  const dataReforco = new Date(dataVacina); // Criamos uma variável que recebe uma data, usamos o construtor new para receber uma data
  dataReforco.setDate(dataReforco.getDate() + 30); // Setamos dentro de dataReforco utilizando o getDate para pegar a data que está dentro da nossa variável e adicionamos 30 à ela
  const dataReforcoFormatada = dataReforco.toISOString().slice(0, 10); // excrever aqui depois de ler no w3

  // 
  dados.push({ nome, nascimento, nomeVacina, dataVacina, dataReforco: dataReforcoFormatada }); // Empurramos para dentro da nossa array os dados que foram concedidos

  // 
  const formCadastro = document.querySelector("#form-cadastro") as HTMLFormElement;
  formCadastro.reset(); // Resetamos o nosso form para receber mais dados

  // 
  alert("Cadastro realizado com sucesso!"); // Alertamos a realização do cadastro

  // 
  listarDados(); // Chamamos a função listar dados
}

// 
document.getElementById("form-cadastro")!.addEventListener("submit", function (e) {
  e.
 
preventDefault(); // Impede o envio do formulário padrão
  
 
salvarCadastro(); // Chamamos a função salvarCadastro quando algum evento submit for detectado no form-cadastro
});