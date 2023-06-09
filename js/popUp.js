import { recuperaSenha } from "./recuperaSenha.js";

function btnConfirma() {
    location.reload();
}

export function popUpMarcado(dia, hora) {
    const body = document.querySelector('.conteudo');
    
    if (hora.slice(3) === "00") {
        body.innerHTML +=
        `
    <div class="popUp-marcado">
        <h3 style="font-weight: bold; font-size: 1.5rem; margin-bottom: 1.5rem">Despacho agendado com sucesso!</h3>
        <p style="margin-bottom: 1rem">Seu despacho com o comandante está agendado para o dia ${dia.slice(8)} 
        do ${dia.slice(5, 7)} de ${dia.slice(0, 4)} às ${hora.slice(0, 2)} horas.</p>
        <img src="./img/verificar.png"style="max-width: 120px;">
        <button class="btn-confirma">Finalizar Seção</button>
    </div>
    `
    } else {
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
    }
    document.querySelector('.btn-confirma').addEventListener("click", btnConfirma);
};

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
        <p style="margin-bottom: 1rem">Algum dado fornecido está incorreto, tente novamente. 
        </br> Caso os dados inseridos estejam corretos, procure a seção de informática.</p>
        <img src="./img/Erro.png"style="max-width: 120px;">
        <button class="btn-tentar-novamente" id="btn">Tentar novamente</button>
    </div>
    `
    document.querySelector('.btn-tentar-novamente').addEventListener("click", recuperaSenha)
};



export function popSenhaAlterada(conteudo, senha) {
    conteudo.innerHTML +=
        `
    <div class="popUp-senha-alterada">
        <h3 style="font-weight: bold; font-size: 1.5rem; margin-bottom: 1.5rem">Senha recuperada com sucesso!</h3>
        <p style="margin-bottom: 1rem">Sua senha é: <span style="background-color: green; color: white; padding: 0.5rem; border-radius: 8px;">
        ${senha}</span></p>
        <img src="./img/verificar.png"style="max-width: 120px;">
        <button class="btn-prosseguir">Prosseguir</button>
    </div>
    `
    document.querySelector('.btn-prosseguir').addEventListener("click", btnConfirma);
};

export function popupChaveErrada(conteudo, resposta) {
    conteudo.innerHTML += 
    `
    <div class="popUp-chave-errada">
        <h3 style="font-weight: bold; font-size: 1.5rem; margin-bottom: 1.5rem">Não foi possível prosseguir!</h3>
        <p style="margin-bottom: 1rem">A palavra-chave: ${resposta} não corresponde à correta, tente novamente. 
        </br> Caso ${resposta} seja, de fato, sua palavra-chave, procure a seção de informática.</p>
        <img src="./img/Erro.png"style="max-width: 120px;">
        <button class="btn-tentar-novamente" id="btn">Tentar novamente</button>
    </div>
    `
    document.querySelector('.btn-tentar-novamente').addEventListener("click", recuperaSenha)
}