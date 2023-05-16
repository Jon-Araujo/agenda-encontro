import { validaLogin } from "./login.js";
import { telaCadastro } from "./cadastro.js";

export function recuperaSenha() {
    const conteudo = document.querySelector('.conteudo');

    conteudo.innerHTML =
    `
    <section class="recupera">
            <label for="email-recupera">Informe seu email de cadastro:</label>
            <input type="email" id="email-recupera">

            <button id="btn-recuperar">Recuperar senha</button>
    </section>
    <button class="btn-voltar">
        <span class="material-symbols-outlined">arrow_back</span>
    </button>
    `
    document.querySelector('.btn-voltar').addEventListener("click", () => {
        document.querySelector('.conteudo').innerHTML =
        `
        <section class="inicio">
            <label for="login">Login:</label>
            <input type="text" id="login">
            <label for="senha">Senha:</label>
            <input type="password" id="senha">
            <div>
                <button id="btn-entrar">Entrar</button>
                <button id="btn-cadastrar">Cadastre-se</button>
            </div>
            <button class="btn-recupera-senha" href="#">Esqueci minha senha</button>
        </section>
        `
        document.getElementById('btn-entrar').addEventListener("click", validaLogin);
        document.getElementById('btn-cadastrar').addEventListener("click", telaCadastro);
        document.querySelector('.btn-recupera-senha').addEventListener("click", recuperaSenha);
    })
}