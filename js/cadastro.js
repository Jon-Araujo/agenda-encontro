import { popUpCadastrado } from "./popUp.js";

export function telaCadastro() {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerHTML =
            `
            <section class="cadastro">
                    <p>Posto/Graduação:</p>
                    <select id="select-pg">
                        <option>Coronel</option>
                        <option>Ten-Coronel</option>
                        <option>Major</option>
                        <option>Capitão</option>
                        <option>1º Tenente</option>
                        <option>2º Tenente</option>
                        <option>Aspirante a Oficial</option>
                        <option>1º Sargento</option>
                        <option>2º Sargento</option>
                        <option>3º Sargento</option>
                    </select>

                    <label for="input-usuario">Usuário:</label>
                    <input type="text" id="input-usuario" placeholder="Informe aqui o nome de usuário desejado">

                    <label for="input-senha">Senha:</label>
                    <input type="password" id="input-senha" placeholder="Informe aqui a senha de login desejada">

                    <label for="input-email">Email:</label>
                    <input type="email" id="input-email" placeholder="Informe aqui o seu endereço de email">

                    <p>Escolha a pergunta para recuperação de senha:</p>
                    <select id="select-pergunta">
                        <option>Nº de aluno | cadete?</option>
                        <option>Nome do animal de estimação?</option>
                        <option>Iniciais de um nome?</option>
                        <option>Nº da primeira casa?</option>
                        <option>Data de aniversário, casamento ou namoro?</option>
                        <option>Placa do primeiro carro?</option>
                    </select>

                    <label>Palavra-Chave:</label>
                    <input type="text" id="input-chave" placeholder="Responda aqui à pergunta selecionada acima">

                    <button id="btn-cad">Cadastrar</button>
            </section>
            <button class="btn-voltar">
                <span class="material-symbols-outlined">arrow_back</span>
            </button>
            `
    document.getElementById('btn-cad').addEventListener("click", cadastraUsuario);
    document.getElementById('input-chave').addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            cadastraUsuario();
        };
    });

    document.querySelector('.btn-voltar').addEventListener("click", () => {
        location.reload();
    });
};

function cadastraUsuario() {
    const pg = document.getElementById('select-pg');
    const usuario = document.getElementById('input-usuario');
    const senha = document.getElementById('input-senha');
    const email = document.getElementById('input-email');
    const pergunta = document.getElementById('select-pergunta');
    const resposta = document.getElementById('input-chave');

    if (localStorage.usuarios) {
        lista = JSON.parse(localStorage.getItem('usuarios'));
    } else {
        var lista = [];
    }

    lista.push([pg.value, usuario.value.toLowerCase(), senha.value, email.value.toLowerCase(), pergunta.value, resposta.value.toLowerCase()]);

    localStorage.usuarios = JSON.stringify(lista);

    popUpCadastrado();
};
