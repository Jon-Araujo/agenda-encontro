export function recuperaSenha() {
    const conteudo = document.querySelector('.conteudo');

    conteudo.innerHTML =
    `
    <section class="recupera">
            <label for="input-data">Escolha a data para realizar o despacho:</label>
            <input type="date" id="input-data">
            <label for="input-hora"></label>
            <input type="time" id="input-hora">
            <button id="btn-enviar">Enviar</button>
    </section>
    <button class="btn-voltar">
        <span class="material-symbols-outlined">arrow_back</span>
    </button>
    `
}