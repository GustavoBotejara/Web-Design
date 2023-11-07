const urlParams = new URLSearchParams(window.location.search);
const produto = urlParams.get('produto');
const imagem = urlParams.get('imagem');
const descricao = urlParams.get('descricao');
const preco = urlParams.get('preco');

document.querySelector('title').innerText = produto;
document.querySelector('h5').innerText = produto;
document.querySelector('#imagemProduto').src = imagem;
document.querySelector('#descricaoProduto').innerText = descricao;
document.querySelector('#precoProduto').innerText = "Preco: " + preco;