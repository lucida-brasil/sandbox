<script>
  // Seleciona todos os botões "Comprar"
  const botoesComprar = document.querySelectorAll('a[href="#comprar"]');

  // Adiciona um evento de clique a cada botão "Comprar"
  botoesComprar.forEach(botao => {
    botao.addEventListener('click', (event) => {
      // Previne o comportamento padrão do link
      event.preventDefault();

      // Pergunta se o usuário realmente deseja comprar o produto
      const confirmaCompra = confirm('Tem certeza de que deseja comprar este produto?');

      // Se o usuário confirmar a compra, exibe uma mensagem de sucesso
      if (confirmaCompra) {
        alert('Compra realizada com sucesso!');
      }
    });
  });
</script>
