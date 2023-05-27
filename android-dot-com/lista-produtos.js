<!-- Lista de produtos -->
<div id="product-list">
  <!-- Produtos carregados do banco de dados -->
</div>

<!-- Carrinho de compras -->
<div id="cart">
  <h2>Carrinho de compras</h2>
  <ul id="cart-items">
    <!-- Itens do carrinho de compras -->
  </ul>
  <p>Total: R$<span id="cart-total">0.00</span></p>
</div>

<script>
  // Array para armazenar os itens do carrinho de compras
  let cartItems = [];

  // Função para adicionar um item ao carrinho de compras
  function addToCart(name, price) {
    // Verifica se o item já existe no carrinho de compras
    const existingItem = cartItems.find(item => item.name === name);

    // Se o item já existe, aumenta a quantidade
    if (existingItem) {
      existingItem.quantity++;
    } else { // Caso contrário, adiciona um novo item ao carrinho de compras
      cartItems.push({name: name, price: price, quantity: 1});
    }

    // Atualiza o total do carrinho de compras
    updateCartTotal();
    // Atualiza a lista de itens do carrinho de compras
    renderCartItems();
  }

  // Função para atualizar o total do carrinho de compras
  function updateCartTotal() {
    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    document.querySelector('#cart-total').textContent = total.toFixed(2);
  }

  // Função para renderizar a lista de itens do carrinho de compras
  function renderCartItems() {
    const cartItemsList = document.querySelector('#cart-items');
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - R$${item.price} x ${item.quantity}`;
      cartItemsList.appendChild(li);
    });
  }

  // Função para carregar os produtos do banco de dados e adicioná-los à lista de produtos
  function loadProducts() {
    // Código para carregar produtos do banco de dados
    // ...
    // Exemplo de produtos carregados do banco de dados:
    const products = [
      {name: 'Vestido floral', price: 49.99},
      {name: 'Saia jeans', price: 39.99},
      {name: 'Blusa de seda', price: 59.99}
    ];

    const productList = document.querySelector('#product-list');

    products.forEach(product => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h3>${product.name}</h3>
        <p>R$${product.price}</p>
        <button onclick="addToCart('${product.name}', ${product.price})">Adicionar ao carrinho</button>
      `;
      productList.appendChild(div);
    });
  }

  // Chama a função para carregar os produtos ao carregar a página
  window.addEventListener('load', loadProducts);
</script>
