import { validaLogin } from "./login.js";
import { telaCadastro } from "./cadastro.js";

document.getElementById('btn-entrar').addEventListener("click", validaLogin);

document.getElementById('btn-cadastrar').addEventListener("click", telaCadastro);
