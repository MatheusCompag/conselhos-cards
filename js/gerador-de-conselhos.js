const botaoDeConselhos = document.getElementById('btn-conselhos')
const conselho = document.getElementsByTagName('p')
const descricaoDoConselho = conselho[0]

async function conselhoAleatorioDaApi(){
   const url = "https://api.adviceslip.com/advice"
   const resposta = await fetch(url)
   console.log(url)
}
