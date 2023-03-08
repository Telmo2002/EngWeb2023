var http = require('http')
var axios = require('axios')
var mypages = require('./mypages')
var fs = require('fs')

http.createServer(function (req, res) {
    var d = new Date().toISOString().substring(0, 16)
    console.log(req.method + " " + req.url + " " + d)

    if(req.url == '/'){
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(mypages.genMenuPage(d))
                res.end()
    }
    else if(req.url == '/pessoas'){
        axios.get('http://localhost:3000/pessoas')
            .then(function(resp){
                var pessoas = resp.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(mypages.genMainPage(pessoas, d))
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtrenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url == '/pessoasOrdenadas'){
        axios.get('http://localhost:3000/pessoas?_sort=nome')
            .then(function(resp){
                var pessoas = resp.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(mypages.genMainPage(pessoas, d))
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtrenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url.match(/\/pessoas\/p\d+/)){
        console.log('Pedindo ' + req.url.substring(9))
        axios.get('http://localhost:3000/pessoas/' + req.url.substring(9))
            .then(function(resp){
                var pessoa = resp.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(mypages.genPersonPage(pessoa, d))
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtrenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url.match(/w3\.css$/)){
        fs.readFile("w3.css", function(erro, dados){
            if(erro){
                res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na leitura do ficheiro: ' + erro + '</p>')
            }
            else{
                res.writeHead(200, {'Content-Type': 'text/css'})
                res.end(dados)
            }
        })
    }
    else if(req.url == '/pessoasOrdenadas'){
        axios.get('http://localhost:3000/pessoas?_sort=nome')
            .then(function(resp){
                var pessoas = resp.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.write(mypages.genMainPage(pessoas, d))
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtrenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url.match(/\/distribuicao\/\w+\/\w+/)){
        typeString = req.url.substring(14).split('/')
        desporto = ""
        if(typeString[0] == "desportos" || typeString[0] == "profissao") {
            typeDecoded = decodeURIComponent(typeString[1])
        } else {
            typeDecoded = typeString[1]
        }
        axios.get('http://localhost:3000/pessoas')
            .then(function(resp){
                var pessoas = resp.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                if(typeString[0] == "profissao") {
                    res.write(mypages.genProfPage(pessoas, d, typeString[0], typeString[1]))
                }
                else {
                res.write(mypages.genTypePage(pessoas, d, typeString[0], typeDecoded))
                }
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtrenção de dados: ' + erro + '</p>')
            })
    }
    else if(req.url.match(/\/distribuicao\/\w+/)){
        axios.get('http://localhost:3000/pessoas')
            .then(function(resp){
                var pessoas = resp.data
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                if(req.url.substring(14) == "profissao") {
                    res.write(mypages.genTop10Page(pessoas, d, req.url.substring(14)))//, typeDecoded)
                }
                else {
                //res.write(mypages.genTypePage(pessoas, d, typeString[0], typeDecoded))
                res.write(mypages.genDistribPage(pessoas, d,req.url.substring(14)))
                }
                
                res.end()
            })
            .catch(erro => {
                console.log("Erro: " + erro)
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                res.end('<p>Erro na obtrenção de dados: ' + erro + '</p>')
            })
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'})
        res.end('<p>Operação não suportada: ' + req.url + '</p>')
    }
}).listen(7777)

console.log('Servidor à escuta na porta 7777...')

