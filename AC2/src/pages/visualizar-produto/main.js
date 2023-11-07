const urlParams = new URLSearchParams(window.location.search);
const produto = urlParams.get('produto');
const imagem = urlParams.get('imagem');
const descricao = urlParams.get('descricao');
const preco = urlParams.get('preco');

document.querySelector('title').innerText = produto;
document.querySelector('h5').innerText = produto;
document.querySelector('#imagemProduto').src = imagem;
document.querySelector('#descricaoProduto').innerText = descricao;
document.querySelector('#precoProduto').innerText = preco;
document.querySelector('#produtoModal').innerText = produto;
document.querySelector('#precoModal').innerText = preco;

document.querySelector('#btnConfirmarCompra').addEventListener('click', () => confirmarCompra());

function confirmarCompra() {
    window.location.href = '../../index.html';
}