export function popUpMarcado(dia, hora) {
    const body = document.querySelector('.conteudo');
    body.innerHTML += 
    `
    <div class="popUp-marcado">
        <h3 style="font-weight: bold; font-size: 1.5rem; margin-bottom: 1.5rem">Despacho agendado com sucesso!</h3>
        <p style="margin-bottom: 1rem">Seu despacho com o comandante está agendado para o dia ${dia} às ${hora}.</p>
        <img src="./img/verificar.png"style="max-width: 120px;">
    </div>
    `
}