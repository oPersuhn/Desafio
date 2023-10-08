"use strict";
// Aqui é nosso 'backend'
const dados = [];
// Essa é nossa função que lista os dados que vieram do HTML
function listarDados() {
    const dadosList = document.getElementById("dadosList");
    dadosList.innerHTML = "";
    dados.forEach(valor => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `Nome: ${valor.nome} <br>
        Data de nascimento: ${valor.nascimento} <br>
        Nome da vacina: ${valor.nomeVacina} <br>
        Data de vacinação: ${valor.dataVacina} <br>
        Data de reforço: ${valor.dataReforco} <br>`;
        dadosList.appendChild(listItem);
    });
}
// Essa é a função para marcara do cpf
const cpfInput = document.getElementById("cpf");
cpfInput.addEventListener("input", function (event) {
    const input = event.target;
    const value = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    const maskedValue = formatCPF(value); // Formata o CPF
    input.value = maskedValue;
});
function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
    // Adiciona a máscara de CPF (###.###.###-##)
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}
// Essa é a função que insere os valores do HTML nas nossas variáveis dentro do JS 
function salvarCadastro() {
    const nome = document.getElementById("nome").value;
    const cpf = parseInt(document.getElementById("cpf").value);
    const nascimento = document.getElementById("nascimento").value;
    const nomeVacina = document.getElementById("nomeVacina").value;
    const dataVacina = document.getElementById("dataVacina").value;
    // Esse é o bloco de código que adiciona 30 dias à data que selecionamos no HTML
    const dataReforco = new Date(dataVacina); // Criamos uma variável que recebe uma data, usamos o construtor new para receber uma data
    dataReforco.setDate(dataReforco.getDate() + 30); // Setamos dentro de dataReforco utilizando o getDate para pegar a data que está dentro da nossa variável e adicionamos 30 à ela
    const dataReforcoFormatada = dataReforco.toISOString().slice(0, 10); // 
    // 
    dados.push({ nome, nascimento, nomeVacina, dataVacina, dataReforco: dataReforcoFormatada }); // Empurramos para dentro da nossa array os dados que foram concedidos
    // 
    const formCadastro = document.querySelector("#form-cadastro");
    formCadastro.reset(); // Resetamos o nosso form para receber mais dados
    // 
    alert("Cadastro realizado com sucesso!"); // Alertamos a realização do cadastro
    // 
    listarDados(); // Chamamos a função listar dados
}

document.getElementById("form-cadastro").addEventListener("submit", function (e) {
    e.
        preventDefault(); // Impede o envio do formulário padrão
    salvarCadastro(); // Chamamos a função salvarCadastro quando algum evento submit for detectado no form-cadastro
});
