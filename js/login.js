import { agendar } from "./agendar.js";

async function horariosDisponiveis() {
        const horariosJSON = await (await fetch('./horarios.json')).json();
        const horarios = horariosJSON.horarios;
        const optionsHora = document.getElementById('select-hora');
        optionsHora.innerHTML = '';

        const inputManha = document.getElementById('input-manha');
        const inputTarde = document.getElementById('input-tarde');

        if (inputManha.checked) {
                var horarioDisponivel = horarios.manha;
        } else if (inputTarde.checked) {
                var horarioDisponivel = horarios.tarde;
        }
        if (localStorage.agenda) {
                const agenda = JSON.parse(localStorage.getItem('agenda'));
                var dataSelecionada = document.getElementById('input-data').value;
                var filtro = agenda.filter(data => data.slice(0, 10) === dataSelecionada);
                var horarioIndisponivel = filtro.map(indisponivel => indisponivel.slice(11, 16));



                for (let i = 0; i < horarioDisponivel.length; i++) {
                        for (let j = 0; j < horarioIndisponivel.length; j++) {
                                if (horarioDisponivel[i] === horarioIndisponivel[j]) {
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

function telaLogin(perfil) {
        const conteudo = document.querySelector('.conteudo');
        conteudo.innerHTML =
                `
                <section class="login">
                        <h3>Olá, ${perfil[0] + " " + perfil[1][0].toUpperCase()+perfil[1].slice(1)}! Preencha os campos abaixo para realizar o agendamento:<hr></h3>
                        
                        <p>Escolha o Turno:</p>
                        <div class="check-turnos">
                                <label for="input-manha"><input type="checkbox" id="input-manha">Manhã</label>
                                <label for="input-tarde"><input type="checkbox" id="input-tarde">Tarde</label>
                        </div>

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
        document.getElementById('select-hora').addEventListener('keydown', (evento) => {
                if (evento.key === "Enter") {
                    agendar();
                };
            });

        document.querySelector('.btn-logout').addEventListener("click", () => {
                location.reload();
        });

};

export function validaLogin() {
        const login = document.getElementById('login').value.toLowerCase();
        const senha = document.getElementById('senha').value;

        var perfis = JSON.parse(localStorage.getItem('usuarios'));

        for (let i = 0; i < perfis.length; i++) {
                if (login === perfis[i][1] && senha === perfis[i][2]) {
                        alert("Login realizado com sucesso!");
                        telaLogin(perfis[i]);
                        break
                } else {
                        if (i === perfis.length - 1){
                                alert("Usuário e/ou senha informado(s) estão incorretos");
                        }
                }
        }
};
