const protocolo = 'http://'
const baseURL = 'localhost:3000'
const contatosEndpoint = '/contatos'
async function obterContatos() {
    const URLCompleta = `${protocolo}${baseURL}${contatosEndpoint}`
    const contato = (await axios.get(URLCompleta)).data
    console.log(contato)
}
