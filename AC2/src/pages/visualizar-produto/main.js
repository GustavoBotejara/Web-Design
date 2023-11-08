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

document.querySelector('#btnConfirmarCompra').addEventListener('click', async () => {
    showToast();
    setTimeout(() => confirmarCompra(), 800);
});

function confirmarCompra() {
    window.location.href = '../../index.html';
}

function showToast() {
    var showToast = document.getElementById("toast");
    showToast.className = "show";
    setTimeout(function() { 
        showToast.className = showToast.className.replace("show", ""); 
    }, 3000);
}
