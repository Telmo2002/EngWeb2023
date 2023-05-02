var express = require('express');
var router = express.Router();
var Exame = require('../Controllers/emd')

/* GET home page. */
router.get('/', function(req, res) {
  Exame.list()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(520).json({erro: erro, mensagem: "Não foi possivel obter a lista de exames!!"}))
});

router.get('/emds/modalidades', (req, res) => {
  Exame.getModalidades()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(525).json({erro: erro, mensagem: "Não foi possível obter a lista de modalidades!!"}))
})

router.get('/emds/aptos', (req, res) => {
  Exame.getNumeroAptos()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(526).json({erro: erro, mensagem: "Não foi possível obter o número de atletas aptos!!"}))
})

router.get('/emds/atletas', (req, res) => {
  Exame.getAtletas()
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(528).json({erro: erro, mensagem: "Não foi possível obter a lista de atletas!!"}))
})

router.get('/emds/:id', (req, res) => {
  Exame.getExame(req.params.id)
    .then(dados => res.status(200).json(dados))
    .catch(erro => res.status(521).json({erro: erro, mensagem: "Não foi possível obter o exame solicitado!!"}))
})


module.exports = router;
