var Pessoa = require('../models/pessoa')

// Pessoa list
module.exports.list = () => {
    return Pessoa
        .find()
        .sort({data:-1})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.getPessoa = id => {
    return Pessoa.findOne({_id: id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.addPessoa = p => {
    return Pessoa.create(p)
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}

module.exports.updatePessoa = p => {
    return Pessoa.updateOne({_id: p._id}, p)
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}


module.exports.deletePessoa = id => {
    return Pessoa.deleteOne({_id: id})
        .then(dados => {
            return dados
        })
        .catch(erro => {
            return erro
        })
}