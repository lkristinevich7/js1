var productsList = document.getElementById('productsList')
var cartItemsList = document.getElementById('cartItemsList')
console.log(productsList)
console.log(cartItemsList)

var products = window.products
productsList.innerHTML = ''

for (var i in products) {
  var product = products[i]

  var datetxt = product.dataAdded.toLocaleDateString('pl')
  var grossPrice = (product.price * (1 + product.tax / 100)).toFixed(2)

  // "Ksiazka JavaScript" - PROMOCJA - 97.99PLN (20.01.2020)
  var text = product.name + ' - ' + (product.promo ? 'PROMOCJA - ' : '') + grossPrice + ' PLN ' + '(' + datetxt + ') '

  var listItemDiv = document.createElement('div')
  listItemDiv.classList.add('list-group-item')
  listItemDiv.innerText = text

  productsList.append(listItemDiv)

  // console.log(text)
}

// Koszyk

var cartItems = window.cartItems
cartItemsList.innerHTML = ''
var totalPrice = 0;

for (var i in cartItems) {
  // debugger
  // var totalPrice = 0
  var carItem = cartItems[i]
  var product = carItem.product
  var grossPrice = (product.price * (1 + product.tax / 100)).toFixed(2)
  totalPrice += grossPrice * carItem.amount

  var newCartDiv = document.createElement('div')
  newCartDiv.classList.add('list-group-item')

  newCartDiv.innerHTML = `<strong class="product-name">` + product.name + `</strong>
  <div class="product-price">`+ grossPrice + 'x' + carItem.amount + '=' + (grossPrice * carItem.amount).toFixed(2) + `</div>`
  cartItemsList.append(newCartDiv)

  // console.log(
  //   // Nazwa
  //   'Produkt' + product.name + ' ' +
  //   // cena*ilosc
  //   (grossPrice + 'x' + carItem.amount + '=' +
  //   // Cena
  //   (grossPrice * carItem.amount).toFixed(2))
  // //
  // )
}

document.getElementsByClassName('cart-total-amount')[0].innerText = totalPrice



// console.log('Suma' + ' = ' + totalPrice)
