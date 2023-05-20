import { recuperaSenha } from "./recuperaSenha.js";

function btnConfirma() {
    location.reload();
}

export function popUpMarcado(dia, hora) {
    const body = document.querySelector('.conteudo');
    body.innerHTML +=
        `
    <div class="popUp-marcado">
        <h3 style="font-weight: bold; font-size: 1.5rem; margin-bottom: 1.5rem">Despacho agendado com sucesso!</h3>
        <p style="margin-bottom: 1rem">Seu despacho com o comandante está agendado para o dia ${dia.slice(8)} 
        do ${dia.slice(5, 7)} de ${dia.slice(0, 4)} às ${hora.slice(0, 2)} horas e ${hora.slice(3)} minutos.</p>
        <img src="./img/verificar.png"style="max-width: 120px;">
        <button class="btn-confirma">Finalizar Seção</button>
    </div>
    `
    document.querySelector('.btn-confirma').addEventListener("click", btnConfirma);
}

export function popUpCadastrado() {
    const body = document.querySelector('.conteudo');
    body.innerHTML +=
        `
    <div class="popUp-marcado">
        <h3 style="font-weight: bold; font-size: 1.5rem; margin-bottom: 1.5rem">Usuário cadastrado com sucesso!</h3>
        <p style="margin-bottom: 1rem">O(A) senhor(a) já pode realizar o login para agendar seu horário.</p>
        <img src="./img/verificar.png"style="max-width: 120px;">
        <button class="btn-confirma">Realizar login</button>
    </div>
    `
    document.querySelector('.btn-confirma').addEventListener("click", btnConfirma);
}

export function popupEmailErrado(conteudo) {
    conteudo.innerHTML +=
        `
    <div class="popUp-email-erro">
        <h3 style="font-weight: bold; font-size: 1.5rem; margin-bottom: 1.5rem">Não foi possível prosseguir!</h3>
        <p style="margin-bottom: 1rem">Algum dado fornecido está incorreto, tente novamente.</p>
        <img src="./img/Erro.png"style="max-width: 120px;">
        <button class="btn-tentar-novamente">Tentar novamente</button>
    </div>
    `
    document.querySelector('.btn-tentar-novamente').addEventListener("click", recuperaSenha)
}