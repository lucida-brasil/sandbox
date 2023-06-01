// Função para exibir os produtos do carrinho de compras no checkout
function displayCartItems() {
  var cartItems = localStorage.getItem("cartItems");
  var cartItemsContainer = document.getElementById("cart-items");

  if (!cartItems) {
    // Caso o carrinho esteja vazio
    cartItemsContainer.innerHTML = "<p>Carrinho vazio</p>";
  } else {
    // Caso haja itens no carrinho
    cartItems = JSON.parse(cartItems);

    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = "<p>Carrinho vazio</p>";
    } else {
      cartItemsContainer.innerHTML = "";

      // Para cada item no carrinho, criar o elemento HTML correspondente
      cartItems.forEach(function(productId) {
        var cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        // Aqui você pode buscar os detalhes do produto do backend utilizando o ID do produto
        // E adicionar as informações relevantes ao elemento HTML, como imagem, título, preço, etc.

        // Exemplo de código para adicionar a imagem e título do produto
        var productImage = document.createElement("img");
        productImage.src = "imagem-produto.jpg";
        productImage.alt = "Produto";
        cartItem.appendChild(productImage);

        var productTitle = document.createElement("h3");
        productTitle.textContent = "Nome do Produto";
        cartItem.appendChild(productTitle);

        cartItemsContainer.appendChild(cartItem);
      });
    }
  }
}

// Chamada da função para exibir os produtos do carrinho no carregamento da página
displayCartItems();
