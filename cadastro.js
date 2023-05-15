export function telaCadastro() {
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerHTML =
            `
            <section class="cadastro">
                    <label for="input-usuario">Usuário:</label>
                    <input type="text" id="input-usuario">

                    <label for="input-senha">Senha:</label>
                    <input type="password" id="input-senha">

                    <label for="input-email">Email:</label>
                    <input type="email" id="input-email">

                    <button id="btn-cad">Cadastrar</button>
            </section>
            <button class="btn-voltar">
                <span class="material-symbols-outlined">arrow_back</span>
            </button>
            `
    document.getElementById('btn-cad').addEventListener("click", cadastraUsuario);

    document.querySelector('.btn-voltar').addEventListener("click", () => {
        document.querySelector('.conteudo').innerHTML =
        `
        <section class="inicio">
                        <label for="login">Login:</label>
                        <input type="text" id="login">
                        <label for="senha">Senha:</label>
                        <input type="password" id="senha">
                        <div>
                                <button id="btn-entrar">Entrar</button>
                                <button id="btn-cadastrar">Cadastre-se</button>
                        </div>
                        <a href="#">Esqueci minha senha</a>
        </section>
        `
    })
};

function cadastraUsuario() {
    const usuario = document.getElementById('input-usuario');
    const senha = document.getElementById('input-senha');
    const email = document.getElementById('input-email');

    if (localStorage.usuarios) {
        lista = JSON.parse(localStorage.getItem('usuarios'));
    } else {
        var lista = [];
    }

    lista.push([usuario.value, senha.value, email.value]);

    localStorage.usuarios = JSON.stringify(lista);

    //Volta a página:
    const conteudo = document.querySelector('.conteudo');
    conteudo.innerHTML =
    `
    <section class="inicio">
        <label for="login">Login:</label>
        <input type="text" id="login">
        <label for="senha">Senha:</label>
        <input type="password" id="senha">
        <div>
            <button id="btn-entrar">Entrar</button>
            <button id="btn-cadastrar">Cadastre-se</button>
        </div>
        <a href="#">Esqueci minha senha</a>
    </section>
    `
};
