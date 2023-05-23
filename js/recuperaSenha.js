import { popupEmailErrado } from "./popUp.js";
import { popSenhaAlterada } from "./popUp.js";
import { popupChaveErrada } from "./popUp.js";

export function recuperaSenha() {
    const conteudo = document.querySelector('.conteudo');

    conteudo.innerHTML =
        `
    <section class="recupera">
            <label for="email-recupera">Informe seu email cadastrado:</label>
            <input type="email" id="email-recupera">
            
            <p>Selecione seu Posto | Graduação:</p>
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
            
            <label for="nome-recupera">Informe seu nome:</label>
            <input type="text" id="nome-recupera" placeholder="Insira seu nome">

            <button id="btn-proximo">Próximo</button>
    </section>
    <button class="btn-voltar">
        <span class="material-symbols-outlined">arrow_back</span>
    </button>
    `;

    document.getElementById('btn-proximo').addEventListener("click", palavraChave)

    document.querySelector('.btn-voltar').addEventListener("click", () => {
        location.reload();
    });
}

function palavraChave() {
    const conteudo = document.querySelector('.conteudo');
    const email = document.querySelector('#email-recupera').value.toLowerCase();
    const pg = document.getElementById('select-pg').value;
    const nome = document.getElementById('nome-recupera').value.toLowerCase();

    var lista = JSON.parse(localStorage.getItem('usuarios'));

    for (let i = 0; i < lista.length; i++) {
        if (lista[i][3] === email && lista[i][0] === pg && lista[i][1] === nome) {
            var pergunta = lista[i][4];
            conteudo.innerHTML =
                `
                <section class="recupera">
                    <label for="palavraChave">Informe sua resposta:</label>
                    <input type="text" id="palavraChave" placeholder="${pergunta}">

                    <button id="btn-recuperar">Recuperar</button>
                </section>
                <button class="btn-voltar">
                    <span class="material-symbols-outlined">arrow_back</span>
                </button>
                `;
            document.getElementById('btn-recuperar').addEventListener("click", () => {
                const resposta = document.getElementById('palavraChave').value.toLowerCase();
                if (resposta === lista[i][5]) {
                    popSenhaAlterada(conteudo, lista[i][2])
                } else {
                    popupChaveErrada(conteudo, resposta)
                }
            })
            break
        } else {
            if (i === lista.length - 1) {
                popupEmailErrado(conteudo)
            }
        }
    };

    document.querySelector('.btn-voltar').addEventListener("click", () => {
        location.reload();
    });
};