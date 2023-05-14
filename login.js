import { agendar } from "./agendar.js";

export function telaLogin() {
        const conteudo = document.querySelector('.conteudo');
        conteudo.innerHTML =
                `
                <section class="login">
                        <label for="input-data">Escolha a data para realizar o despacho:</label>
                        <input type="date" id="input-data">
                        <label for="input-hora"></label>
                        <input type="time" id="input-hora">
                        <button id="btn-enviar">Enviar</button>
                </section>
                `
        document.getElementById('btn-enviar').addEventListener("click", agendar);

        async function validaLogin() {
                const login = document.getElementById('login');
                const senha = document.getElementById('senha');
            
                const loginJSON = await (await fetch("./perfis.json")).json();

                const validaLogin = loginJSON.login.filter(perfil => perfil === login.value);
                const validaSenha = loginJSON.filter(perfil => perfil.senha === senha.value);
                console.log(validaLogin)
            }
};
