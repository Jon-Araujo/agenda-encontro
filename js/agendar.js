import { popUpMarcado } from './popUp.js'

export function agendar() {
    const data = document.getElementById('input-data');
    const hora = document.getElementById('select-hora');

    if (localStorage.agenda) {
        var lista = JSON.parse(localStorage.getItem('agenda'));
    } else {
        var lista = [];
    }

    const dataHora = data.value + " " + hora.value;

    if (lista !== []) {
        const filtro = lista.filter(elemento => elemento == dataHora);
        if (filtro.length == 0) {
            lista.push(dataHora);
            popUpMarcado(data.value, hora.value)
        } else {
            alert("Erro. Data e/ou horário não disponível")
        }
    } else {
        lista.push(dataHora);
        popUpMarcado(data.value, hora.value);
    };

    document.getElementById('input-data').value = "";
    hora.value = "";

    localStorage.agenda = JSON.stringify(lista);
};

function msgConfirmacao() {
    window.alert("marcado!");
}
