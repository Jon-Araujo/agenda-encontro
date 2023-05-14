export function agendar() {
    const data = document.getElementById('input-data');
    const hora = document.getElementById('input-hora');
    
    if (localStorage.agenda) {
        lista = JSON.parse(localStorage.getItem('agenda'));
    } else {
        var lista = [];
    }
    
    const dataHora = data.value + " " + hora.value;
    
    if (lista !== []) {
        const filtro = lista.filter(elemento => elemento == dataHora);
        if (filtro.length == 0) {
            lista.push(dataHora);
            msgConfirmacao()
        } else {
            alert("Erro. Data e/ou horário não disponível")
            console.log(lista)
        }
    } else {
        lista.push(dataHora);
        msgConfirmacao();
    };
    
    data.value = "";
    hora.value = "";
    
    localStorage.agenda = JSON.stringify(lista);
};

function msgConfirmacao() {
    window.alert("marcado!");
}
