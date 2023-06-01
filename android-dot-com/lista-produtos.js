// Seleciona todos os botões "Adicionar ao Carrinho"
var addToCartButtons = document.querySelectorAll(".add-to-cart");

// Adiciona um evento de clique a cada botão
addToCartButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    // Obtém o ID do produto a partir do atributo "data-id"
    var productId = button.getAttribute("data-id");

    // Adiciona o produto ao carrinho de compras
    addToCart(productId);
  });
});

// Função para adicionar um produto ao carrinho de compras
function addToCart(productId) {
  // TODO: implementar a lógica para adicionar o produto ao carrinho de compras
  // Você pode usar localStorage, sessionStorage ou enviar uma requisição para o backend
  
  // Exemplo usando localStorage:
  // Verifica se o carrinho de compras já existe no localStorage
  var cartItems = localStorage.getItem("cartItems");
  if (!cartItems) {
    // Se o carrinho de compras não existe, cria um array vazio
    cartItems = [];
  } else {
    // Se o carrinho de compras existe, converte a string em array
    cartItems = JSON.parse(cartItems);
  }
  
  // Adiciona o ID do produto ao carrinho de compras
  cartItems.push(productId);
  
  // Salva o carrinho de compras de volta no localStorage
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  
  // Exibe uma mensagem de sucesso
  alert("Produto adicionado ao carrinho de compras!");
}
