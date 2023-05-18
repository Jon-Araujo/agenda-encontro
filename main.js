import { validaLogin } from "./login.js";
import { telaCadastro } from "./cadastro.js";
import { recuperaSenha } from "./recuperaSenha.js";

// import { popUpMarcado } from './popUp.js';
// document.onload = popUpMarcado();

document.getElementById('btn-entrar').addEventListener("click", validaLogin);

document.getElementById('btn-cadastrar').addEventListener("click", telaCadastro);

document.querySelector('.btn-recupera-senha').addEventListener("click", recuperaSenha);

