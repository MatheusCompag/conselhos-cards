const botaoDeConselhos = document.querySelector('.botao-do-conselho');
const conselhoId = document.querySelector('.id-do-conselho');
const conselhoDescricao = document.querySelector('.descricao-do-conselho');

async function conselhoAleatorioDaApi() {

      const url = "https://api.adviceslip.com/advice";
      const resposta = await fetch(url);
      const jsonDoConselho = await resposta.json();
      const idDoConselho = `Advice #${jsonDoConselho.slip.id}`;
      const descricaoDoConselho = `"${jsonDoConselho.slip.advice}"`;

      conselhoId.innerText = idDoConselho;
      conselhoDescricao.innerText = descricaoDoConselho
   
}

conselhoAleatorioDaApi()

botaoDeConselhos.addEventListener("click", function(){
   conselhoAleatorioDaApi()
})



