var mongoose = require('mongoose')

var moradaSchema = new mongoose.Schema({
    _id: String,
    cidade: String,
    distrito: String
})

var partidoPoliticoSchema = new mongoose.Schema({
    party_abbr: String,
    party_name: String,
    _id: String,
  });

var atributoSchema = new mongoose.Schema({
    fumador: Boolean,
    gosta_cinema: Boolean,
    gosta_viajar: Boolean,
    acorda_cedo: Boolean,
    gosta_ler: Boolean,
    gosta_musica: Boolean,
    gosta_comer: Boolean,
    gosta_animais_estimacao: Boolean,
    gosta_dancar: Boolean,
    comida_favorita: String,
    _id: String,
  });

  var PessoaSchema = new mongoose.Schema({
    _id: String,
    nome: String,
    idade: Number,
    sexo: String,
    morada: moradaSchema,
    BI: String,
    CC: String,
    profissao: String,
    partido_politico: partidoPoliticoSchema,
    religiao: String,
    desportos: [String],
    animais: [String],
    figura_publica_pt: [String],
    marca_carro: String,
    destinos_favoritos: [String],
    atributos: atributoSchema,
  });

module.exports = mongoose.model('Pessoa', PessoaSchema)