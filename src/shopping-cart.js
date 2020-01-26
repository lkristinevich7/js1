var products = window.products

// Produkty w koszyku
window.cartItems = [
  {
    product: products[0],
    amount: 2,
    discount: 10
  },
  {
    product: products[1],
    amount: 1,
    discount: 0
  },
  {
    product: products[2],
    amount: 3,
    discount: 30
  }
]

/*
  Nazwa ProduktuA - 100.00 x 1 = 100.00
  Nazwa ProduktuB - 100.00 x 2 = 200.00
  ===
  Suma produktów = 300.00
*/
