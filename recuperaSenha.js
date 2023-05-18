export function recuperaSenha() {
    const conteudo = document.querySelector('.conteudo');

    conteudo.innerHTML =
        `
    <section class="recupera">
            <label for="email-recupera">Informe seu email de cadastro:</label>
            <input type="email" id="email-recupera">

            <button id="btn-recuperar">Recuperar senha</button>
    </section>
    <button class="btn-voltar">
        <span class="material-symbols-outlined">arrow_back</span>
    </button>
    `
    document.querySelector('.btn-voltar').addEventListener("click", () => {
        location.reload();
    });

}