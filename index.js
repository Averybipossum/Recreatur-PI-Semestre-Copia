const express = require ('express')
const app = express()
const cors = require ('cors')
app.use(express.json())
app.use(cors())


app.get("/contato", (req, res) => {
    res.json(contato)
})

let contato = [
    {
    name: "puta",
    email: "fodase@email.com",
    mensagem: ""
    }
]
    

app.post("/contato", (req, res) => {
    //obtém os dados enviados pelo cliente
    const name = req.body.name
    const email = req.body.email
    const mensagem = req.body.mensagem
    //monta um objeto agrupando os dados. Ele representa um novo contato
    const contato = {name: name, email: email, mensagem: mensagem}
    //adiciona o novo contati à base
    contato.push(contato)
    //responde ao cliente. Aqui, optamos por devolver a base inteira ao cliente,
    //embora não seja obrigatório.
    res.json(contato)
})

app.listen(3000, () => console.log("up and running"))