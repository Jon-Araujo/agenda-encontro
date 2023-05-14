const data = document.getElementById('input-data');
const hora = document.getElementById('input-hora');
const btnEnviar = document.getElementById('btn-enviar');

async function marcaReuniao() {
    if(localStorage.agenda) {
        lista = JSON.parse(localStorage.getItem('agenda'));
    } else {
        var lista = [];
    }

    const dataHora = data.value + " " + hora.value;

    if (lista !== []) {
        const filtro = lista.filter(elemento => elemento == dataHora);
        if (filtro.length == 0) {
            lista.push(dataHora);
        } else {
            alert("Erro. Data e/ou horário não disponível")
            console.log(lista)
        }
    } else {
        lista.push(dataHora)
    };

    data.value = "";
    hora.vale = "";

    localStorage.agenda = JSON.stringify(lista);
}

btnEnviar.addEventListener("click", marcaReuniao);