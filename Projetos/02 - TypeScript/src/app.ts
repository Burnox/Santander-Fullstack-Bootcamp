//Minhas Respostas aos desafios propostos

//DESAFIO 1
let employee: { code: number, name: string } = {
    code: 10,
    name: "John"
}

//DESAFIO 2
interface Pessoaa {
    nome: string,
    idade: number,
    profissao: string
};

let pessoa1: Pessoaa = {
    nome: 'Maria',
    idade: 29,
    profissao: 'Atriz'
}

let pessoa2: Pessoaa = {
    nome: "Roberto",
    idade: 19,
    profissao: "Padeiro"
}

let pessoa3: Pessoaa = {
    nome: "Laura",
    idade: 32,
    profissao: "Atriz"
};

let pessoa4: Pessoaa = {
    nome: "Carlos",
    idade: 19,
    profissao: "Padeiro"
}

//DESAFIO 3
/**
    <h4>Valor a ser adicionado: <input id="soma"> </h4>
    <button id="atualizar-saldo">Atualizar saldo</button>
    <button id="limpar-saldo">Limpar seu saldo</button>
    <h1>"Seu saldo é: " <span id="campo-saldo"></span></h1>
 */

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo');

let saldo = 0

function somarAoSaldo(soma: number) {
    if (campoSaldo) {
        saldo += soma
        campoSaldo.innerHTML = saldo.toString()
    }
}

function limparSaldo() {
    if (campoSaldo) {
        campoSaldo.innerHTML = '0';
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}

if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}

//DESAFIO 4
var apiKey = '3f301be7381a03ad8d352314dcc3ec1d';
let apiKey;
let requestToken: string;
let username: string;
let password;
let sessionId: string;
let listId = '7101979';

let loginButton = document.getElementById('login-button')!;
let searchButton = document.getElementById('search-button')!;
let searchContainer = document.getElementById('search-container')!;

loginButton.addEventListener('click', async () => {
    await criarRequestToken();
    await logar();
    await criarSessao();
})

searchButton.addEventListener('click', async () => {
    let lista = document.getElementById("lista");
    if (lista) {
        lista.outerHTML = "";
    }
    let query = document.getElementById('search') as HTMLInputElement;
    let listaDeFilmes = await procurarFilme(query);
    let ul = document.createElement('ul');
    ul.id = "lista"
    for (const item of listaDeFilmes.results) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(item.original_title))
        ul.appendChild(li)
    }
    console.log(listaDeFilmes);
    searchContainer.appendChild(ul);
})

function preencherSenha() {
    password = document.getElementById('senha') as HTMLInputElement;
    validateLoginButton();
}

function preencherLogin() {
    username = document.getElementById('login').value;
    validateLoginButton();
}

function preencherApi() {
    apiKey = document.getElementById('api-key').value;
    validateLoginButton();
}

function validateLoginButton() {
    if (password && username && apiKey) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}

class HttpClient {
    static async get({ url, method, body = null }) {
        return new Promise((resolve, reject) => {
            let request = new XMLHttpRequest();
            request.open(method, url, true);

            request.onload = () => {
                if (request.status >= 200 && request.status < 300) {
                    resolve(JSON.parse(request.responseText));
                } else {
                    reject({
                        status: request.status,
                        statusText: request.statusText
                    })
                }
            }
            request.onerror = () => {
                reject({
                    status: request.status,
                    statusText: request.statusText
                })
            }

            if (body) {
                request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
                body = JSON.stringify(body);
            }
            request.send(body);
        })
    }
}

async function procurarFilme(query) {
    query = encodeURI(query)
    console.log(query)
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`,
        method: "GET"
    })
    return result
}

async function adicionarFilme(filmeId) {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/movie/${filmeId}?api_key=${apiKey}&language=en-US`,
        method: "GET"
    })
    console.log(result);
}

async function criarRequestToken() {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/authentication/token/new?api_key=${apiKey}`,
        method: "GET"
    })
    requestToken = result.request_token
}

async function logar() {
    await HttpClient.get({
        url: `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${apiKey}`,
        method: "POST",
        body: {
            username: `${username}`,
            password: `${password}`,
            request_token: `${requestToken}`
        }
    })
}

async function criarSessao() {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/authentication/session/new?api_key=${apiKey}&request_token=${requestToken}`,
        method: "GET"
    })
    sessionId = result.session_id;
}

async function criarLista(nomeDaLista, descricao) {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/list?api_key=${apiKey}&session_id=${sessionId}`,
        method: "POST",
        body: {
            name: nomeDaLista,
            description: descricao,
            language: "pt-br"
        }
    })
    console.log(result);
}

async function adicionarFilmeNaLista(filmeId, listaId) {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/list/${listaId}/add_item?api_key=${apiKey}&session_id=${sessionId}`,
        method: "POST",
        body: {
            media_id: filmeId
        }
    })
    console.log(result);
}

async function pegarLista() {
    let result = await HttpClient.get({
        url: `https://api.themoviedb.org/3/list/${listId}?api_key=${apiKey}`,
        method: "GET"
    })
    console.log(result);
}

