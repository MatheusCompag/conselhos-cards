const botaoDeConselhos = document.querySelector('.botao-do-conselho');
const conselhoId = document.querySelector('.id-do-conselho');
const descricaoDoConselho = document.querySelector('.descricao-do-conselho');

async function conselhoAleatorioDaApi() {

      const url = "https://api.adviceslip.com/advice"
      const resposta = await fetch(url)
      const jsonDoConselho = await resposta.json()
      const idDoConselho = jsonDoConselho.slip.id
      const descricaoDoConselho = jsonDoConselho.slip.advice
      

}


conselhoAleatorioDaApi()
