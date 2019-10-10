const alunas = require('../model/alunas.json');

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(alunas)
};

exports.getById = (req,res) => {
    const id = req.params.id
    if(id > alunas.length || id <= 0){
        res.redirect(301, "https://en.wikipedia.org/wiki/Man-in-the-middle_attack")
    }
    res.status(200).send(alunas.find(aluna => aluna.id == id))
}

exports.getBooks = (req, res) => {
    const id = req.params.id
    const aluna = alunas.find(aluna => aluna.id == id)
    if(!aluna){
        res.send("Aluna não encontrada")
    }
    const livrosAluna = aluna.livros
    const titulosLivros = livrosAluna.map(livro => livro.titulo)
    res.status(200).send(titulosLivros)
} 

exports.getSp = (req, res) => {
   const nascidasSp = alunas.filter(aluna => aluna.nasceuEmSp == "true")
   const nomesPaulistas = nascidasSp.map(paulista => paulista.nome)
   res.status(200).send(nomesPaulistas)
}