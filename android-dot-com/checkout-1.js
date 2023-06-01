// Função para exibir os detalhes da compra na página de purchase
function displayPurchaseSummary() {
  var cartItems = localStorage.getItem("cartItems");
  var purchaseSummaryContainer = document.getElementById("purchase-summary");

  if (!cartItems) {
    purchaseSummaryContainer.innerHTML = "<p>Nenhum produto encontrado.</p>";
  } else {
    cartItems = JSON.parse(cartItems);

    if (cartItems.length === 0) {
      purchaseSummaryContainer.innerHTML = "<p>Nenhum produto encontrado.</p>";
    } else {
      purchaseSummaryContainer.innerHTML = "";

      // Para cada item no carrinho, criar o elemento HTML correspondente
      cartItems.forEach(function(productId) {
        var purchaseItem = document.createElement("div");
        purchaseItem.className = "purchase-item";

        // Aqui você pode buscar os detalhes do produto do backend utilizando o ID do produto
        // E adicionar as informações relevantes ao elemento HTML, como imagem,
