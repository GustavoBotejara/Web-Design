let produtos = document.querySelectorAll('#produto');

for (let produto of produtos) {
    produto.querySelector("#botao").addEventListener('click', () => onClickProduto(produto));
}

function onClickProduto(produto) {
    let nomeProduto = produto.querySelector('h5').firstChild.textContent;
    let imagem = document.querySelector('img').src;
    let descricao = produto.querySelector('.card-text').textContent;
    let preco = produto.querySelector('#preco').textContent;
    window.location.href = `./pages/visualizar-produto/index.html?produto=${nomeProduto}&descricao=${descricao}&imagem=${imagem}&preco=${preco}`;
}