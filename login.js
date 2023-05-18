import { agendar } from "./agendar.js";

async function horariosDisponiveis() {
        const horariosJSON = await (await fetch('./horarios.json')).json();
        const horarios = horariosJSON.horarios;
        const optionsHora = document.getElementById('select-hora');
        optionsHora.innerHTML = '';

        if (localStorage.agenda) {
                const agenda = JSON.parse(localStorage.getItem('agenda'));
                const dataSelecionada = document.getElementById('input-data').value;
                var filtro = agenda.filter(data => data.slice(0, 10) === dataSelecionada)
                var horarioIndisponivel = filtro.map(indisponivel => indisponivel.slice(11, 16))
                var horarioDisponivel = horarios;

                for (let i = 0; i < horarios.length; i++) {
                        for (let j = 0; j < horarioIndisponivel.length; j++) {
                                if (horarios[i] === horarioIndisponivel[j]) {
                                        horarioDisponivel.splice(i, 1)
                                }
                        }
                }
                console.log(horarioDisponivel);

                for (let i in horarioDisponivel) {
                        optionsHora.innerHTML +=
                                `
                <option>${horarioDisponivel[i]}</option>;
                `
                }
        } else {
                for (let i in horarioDisponivel) {
                        optionsHora.innerHTML +=
                                `
                <option>${horarioDisponivel[i]}</option>;
                `
                }
        }

};

function telaLogin() {
        const conteudo = document.querySelector('.conteudo');
        conteudo.innerHTML =
                `
                <section class="login">
                        <label for="input-data">Escolha a data para realizar o despacho:</label>
                        <input type="date" id="input-data">
                        
                        <p>Escolha o horário:</p>
                        <select id="select-hora"></select>

                        <button id="btn-enviar">Enviar</button>
                </section>
                <button class="btn-logout">
                        <span class="material-symbols-outlined">logout</span>
                </button>
                `
        document.getElementById('input-data').addEventListener("input", horariosDisponiveis);
        document.getElementById('btn-enviar').addEventListener("click", agendar);

        document.querySelector('.btn-logout').addEventListener("click", () => {
                location.reload();
        });

};

export function validaLogin() {
        const login = document.getElementById('login').value;
        const senha = document.getElementById('senha').value;

        var perfis = JSON.parse(localStorage.getItem('usuarios'));

        for (let i = 0; i < perfis.length; i++) {
                if (login === perfis[i][0] && senha === perfis[i][1]) {
                        alert("Login realizado com sucesso!");
                        telaLogin();
                } else {
                        alert("Usuário e/ou senha informado(s) estão incorretos")
                }
        }
};
