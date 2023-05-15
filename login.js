import { agendar } from "./agendar.js";

function telaLogin() {
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

};

export async function validaLogin() {
        const login = document.getElementById('login').value;
        const senha = document.getElementById('senha').value;
    
        // const loginJSON = await (await fetch("./perfis.json")).json();

        // if (login === loginJSON.perfis[0].login && senha === loginJSON.perfis[0].senha) {
        //         alert("Login realizado com sucesso!")
        //         telaLogin();
        // } else {
        //         alert("usuário/ou senha errado!")
        // }

        // if (localStorage.usuarios) {
        var perfis = JSON.parse(localStorage.getItem('usuarios'));
        // } else {
        //         var perfis = []
        // }

        for (let i = 0; i < perfis.length; i++) {
                if (login === perfis[i][0] && senha === perfis[i][1]) {
                        alert("Login realizado com sucesso!");
                        telaLogin();
                } else {
                        alert("Usuário e/ou senha informado(s) estão incorretos")
                }
        }
};
