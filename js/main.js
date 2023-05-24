import { validaLogin } from "./login.js";
import { telaCadastro } from "./cadastro.js";
import { recuperaSenha } from "./recuperaSenha.js";

document.getElementById('btn-entrar').addEventListener("click", validaLogin);
document.getElementById('senha').addEventListener('keydown', (evento) => {
    if (evento.key === "Enter") {
        validaLogin();
    };
});

document.getElementById('btn-cadastrar').addEventListener("click", telaCadastro);

document.querySelector('.btn-recupera-senha').addEventListener("click", recuperaSenha);

