const protocolo = 'http://'
const baseURL = '127.0.0.1:5501'
const contatosEndpoint = '/html/Contatenos.html'
async function obterContatos() {
    const URLCompleta = `${protocolo}${baseURL}${contatosEndpoint}`
    const contato = (await axios.get(URLCompleta)).data
    console.log(contato)
}

async function cadastrarContato(){
    //constrói a URL completa
    const URLCompleta = `${protocolo}${baseURL}${contatosEndpoint}`
    //pega os inputs que contém os valores que o usuário digitou
    let nomeInput = document.querySelector('#name')
    let emailInput = document.querySelector('#email')
    let mensagemInput = document.querySelector('#subject')
    //pega os valores digitados pelo usuário
    let nome = nomeInput.value
    let email = emailInput.value
    let mensagem = mensagemInputInput.value
    //limpa os campos que o usuário digitou
    nomeInput.value = ""
    emailInput.value = ""
    mensagemInput.value = ""
    //envia os dados ao servidor (back end)
    const contato = (await axios.post(URLCompleta, {nome,
    email, mensagem})).data
    //limpa a tabela para preenchê-la com a coleção nova, atualizada
}