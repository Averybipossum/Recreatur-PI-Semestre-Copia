const express = require ('express')
const app = express()
const cors = require ('cors')
const mongoose = require ('mongoose')
app.use(express.json())
app.use(cors())

const Contatos = mongoose.model ("Contatos", mongoose.Schema({
    nome: {type: String},
    email: {type: String},
    mensagem: {type: String}
}))

async function conectarAoMongoDB() {
    await
    mongoose.connect(`mongodb+srv://23007567aluno:23007567aluno@cluster0.rb95lrt.mongodb.net/?retryWrites=true&w=majority`)
}

app.get("/oi", (req, res) => res.send("oi"))

app.post("/html/Contatenos.html", async (req, res) => {
    //obtém os dados enviados pelo cliente
    const nome = req.body.nome
    const email = req.body.email
    const mensagem = req.body.mensagem
    //monta um objeto agrupando os dados. Ele representa um novo contato
    //a seguir, construímos um objeto COntato a partir do modelo do mongoose
    const contato = new Contatos({nome: nome, email: email, mensagem: mensagem})
    //save salva o novo contato na base gerenciada pelo MongoDB
    await contato.save()
    res.end()
})

app.listen(3000, () => {
    try{
    conectarAoMongoDB()
    console.log("up and running")
    }
    catch (e){
    console.log('Erro', e)
    }
})