const protocolo = 'http://'
const baseURL = '127.0.0.1:3000'
const contatosEndpoint = '/html/Contatenos.html'

async function cadastrarContato(){
    //constrói a URL completa
    const URLCompleta = `${protocolo}${baseURL}${contatosEndpoint}`
    //pega os inputs que contém os valores que o usuário digitou
    let nomeInput = document.querySelector('#nomeInput')
    let emailInput = document.querySelector('#emailInput')
    let mensagemInput = document.querySelector('#mensagemInput')
    //pega os valores digitados pelo usuário
    let nome = nomeInput.value
    let email = emailInput.value
    let mensagem = mensagemInput.value
    //limpa os campos que o usuário digitou
    nomeInput.value = ""
    emailInput.value = ""
    mensagemInput.value = ""
    //envia os dados ao servidor (back end)
    await axios.post(URLCompleta, {nome, email, mensagem})
}

function enviarMensagem() {
    alert("Sua mensagem foi enviada com sucesso!");
}