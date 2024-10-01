const botaoDeConselhos = document.querySelector('.botao-do-conselho');
const conselho = document.querySelector('.id-do-conselho');
const descricaoDoConselho = document.querySelector();

async function conselhoAleatorioDaApi() {

      const url = "https://api.adviceslip.com/advice"
      const resposta = await fetch(url)
      const json = await resposta.json()
      console.log(json)
      
      
}


conselhoAleatorioDaApi()
