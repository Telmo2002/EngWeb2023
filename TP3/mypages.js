// mypages.js
// 2023-03-03 by jcr

const { distribuicao } = require("./distribuicoes")
const { filter } = require("./distribuicoes")

// HTML templates generating functions
exports.genMenuPage = function(d){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Menu inicial</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-deep-orange">
                    <h1>Lista de Opções</h1>
                </header>
        
                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th>
                        <a href = "http://localhost:7777/pessoas">Lista de Pessoas</a>
                        </th>
                        <th>
                        <a href = "http://localhost:7777/pessoasOrdenadas">Lista de Pessoas Ordenadas</a>
                        </th>
                        <th>
                        <a href = "http://localhost:7777/distribuicao/sexo">Distribuição por sexo</a>
                        </th>
                        <th>
                        <a href = "http://localhost:7777/distribuicao/desportos">Distribuição por desporto</a>
                        </th>
                        <th>
                        <a href = "">Lista de Pessoas</a>
                        </th>
                    </tr>
                    </table>
                </div>
                <footer class="w3-container w3-purple">
                    <h5>Generated in EngWeb2023 ${d}</h5>
                </footer>
            </div>
        </body>
    </html>        
    `
    return pagHTML
}

exports.genMainPage = function(lista, data){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>About People...</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-deep-orange">
                    <h1>Lista de Pessoas na Base de dados</h1>
                </header>
        
                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Sexo</th>
                        <th>Cidade</th>
                    </tr>
                `
    for(let i=0; i < lista.length; i++){
        pagHTML += `
        <tr>
            <td>${lista[i].id}</td>
            <td>
                <a href="/pessoas/${lista[i].id}">${lista[i].nome}</a>
            </td>
            <td>${lista[i].idade}</td>
            <td>${lista[i].sexo}</td>
            <td>${lista[i].morada.cidade}</td>
        </tr>
        `
    }

    pagHTML += `
                    </table>
                </div>
                <footer class="w3-container w3-deep-orange">
                    <h5>Generated in EngWeb2023 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}

exports.genPersonPage = function(p, d){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>Person Page</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-purple">
                    <h1>${p.nome}</h1>
                </header>

                <div class="container">
                    <p>Preencher com os outros campos...</p>
                </div>
                
                <footer class="w3-container w3-purple">
                    <h5>Generated in EngWeb2023 ${d}</h5>
                </footer>
            </div>
        </body>
    </html>
                `
    return pagHTML
}

exports.genDistribPage = function(pessoas, data, tipo){
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>About People...</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-deep-orange">
                    <h1>Lista de Pessoas na Base de dados</h1>
                </header>
        
                <div class="w3-container">
                    <table class="w3-table-all">
    `
    console.log("distrib")
    lista = distribuicao(pessoas, tipo)
    console.log("obKeys")
    keys = Object.keys(lista)
    console.log("obkeysDone")
    for(let i=0; i < keys.length; i++){
        console.log("1stFor")
        pagHTML += `
        <tr>
            <td>${keys[i]}</td>
            <td>
                <a href="/distribuicao/${tipo}/${keys[i]}">${lista[keys[i]]}</a>
            </td>
        </tr>
            
        `
    }

    pagHTML += `
                    </table>
                </div>
                <footer class="w3-container w3-deep-orange">
                    <h5>Generated in EngWeb2023 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}


exports.genTypePage = function(pessoas, data, tipoGeral, tipo){
    lista = filter(pessoas, tipoGeral, tipo)
    var pagHTML = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8"/>
            <title>About People...</title>
            <link rel="stylesheet" type="text/css" href="w3.css"/>
        </head>
        <body>
            <div class="w3-card-4">
                <header class="w3-container w3-deep-orange">
                    <h1>Lista de Pessoas na Base de dados</h1>
                </header>
        
                <div class="w3-container">
                    <table class="w3-table-all">
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Sexo</th>
                        <th>Cidade</th>
                    </tr>
                `
    for(let i=0; i < lista.length; i++){
        pagHTML += `
        <tr>
            <td>${lista[i].id}</td>
            <td>
                <a href="/pessoas/${lista[i].id}">${lista[i].nome}</a>
            </td>
            <td>${lista[i].idade}</td>
            <td>${lista[i].sexo}</td>
            <td>${lista[i].morada.cidade}</td>
        </tr>
        `
    }

    pagHTML += `
                    </table>
                </div>
                <footer class="w3-container w3-deep-orange">
                    <h5>Generated in EngWeb2023 ${data}</h5>
                </footer>
            </div>
        </body>
    </html>
    `
    return pagHTML
}