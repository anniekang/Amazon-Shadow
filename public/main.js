const products = [{
    id: 1,
    description: 'Bose QuietComfort 20 Acoustic Noise Cancelling Headphones, Apple Devices, Black',
    brand: 'Bose',
    price: '199.00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/6162wKNVC7L._SX425_.jpg',
    details: [],
  },{
    id: 2,
    description: 'Panasonic ErgoFit In-Ear Earbud Headphones RP-HJE120-K (Black) Dynamic Crystal Clear Sound, Ergonomic Comfort-Fit',
    brand: 'Panasonic',
    price: '7.12',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31-nuw-iqAL.jpg',
    details: [],
  },{
    id: 3,
    description: 'Bose SoundSport Wireless Headphones, Black',
    brand: 'Bose',
    price: '149.00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61p7oi3BR%2BL._SL1500_.jpg',
    details: [],
  },{
   id: 4,
    description: 'Powerbeats3 Wireless In-Ear Headphone - White',
    brand: 'Beats',
    price: '199.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31CDuZiqLgL.jpg',
    details: [],
  },{
    id: 5,
    description: 'Plantronics BackBeat Fit Bluetooth Headphones - Blue',
    brand: 'Plantronics',
    price: '84.95',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31C%2BG8wjpPL.jpg',
    details: [],
  },{
    id: 6,
    description: 'Bose SoundSport Pulse Wireless Headphones, Power Red',
    brand: 'Bose',
    price: '199.00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61w6LHZGs9L._SL1500_.jpg',
    details: [],
  },{
    id: 7,
    description: 'Beats By Dr. Dre In Ear Head Phones Stereo Headset for HTC, Black',
    brand: 'Beats',
    price: '39.71',
    image: 'https://images-na.ssl-images-amazon.com/images/I/614pCdg40KL._SL1500_.jpg',
    details: [],
  },{
    id: 8,
    description: 'Sony MDRXB50AP Extra Bass Earbud Headset (Black)',
    brand: 'Sony',
    price: '27.27',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61p1oDWAPUL._SL1200_.jpg',
    details: [],
  },{
    id: 9,
    description: 'Wilson Men\'s 2015 Ultra Complete Package Golf Set, Standard',
    brand: 'Wilson',
    price: '155.51',
    image: 'https://images-na.ssl-images-amazon.com/images/I/517bv3TTfRL._SL1000_.jpg',
    details: [],
  },{
    id: 10,
    description: 'Skullcandy Hesh 2 Bluetooth Wireless Headphones with Mic, Black',
    brand: 'Skullcandy',
    price: '49.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/7197WSYscIL._SL1500_.jpg',
    details: [],
  },{
    id: 11,
    description: 'Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White',
    brand: 'Samsung',
    price: '4.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31tZplZhyEL.jpg',
    details: [],
  },{
    id: 12,
    description: 'Beats Studio Wireless Over-Ear Headphone - Titanium',
    brand: 'Beats',
    price: '219.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71Hgw5UEEXL._SL1500_.jpg',
    details: [],
  },{
    id: 13,
    description: 'Sony MDRXB950BT/B Extra Bass Bluetooth Headphones (Black)',
    brand: 'Sony',
    price: '88.00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61WaUPGzeKL._SL1200_.jpg',
    details: [],
  },{
    id: 14,
    description: 'Beats Solo2 Wireless On-Ear Headphone - Black',
    brand: 'Bose',
    price: '149.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61b8ZEFmCJL._SL1500_.jpg',
    details: []
  },{
    id: 15,
    description: 'Bose QuietComfort 35 Wireless Headphones, Noise Cancelling - Black',
    brand: 'Bose',
    price: '349.00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61QwytXOcxL._SL1500_.jpg',
    details: ['World-class noise cancellation makes quiet sound quieter and music sound better','Volume-optimized EQ for balanced audio performance at any volume','Wireless convenience, with easy Bluetooth and NFC pairing aided by voice prompts','20-hour battery life per charge; up to 40 hours in wired mode','Noise-rejecting dual-microphone system for clear calls even in windy environments'],
  },{
    id: 16,
    description: 'Beats Solo3 Wireless On-Ear Headphone - Rose Gold',
    brand: 'Beats',
    price: '249.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41YByxxpv0L.jpg',
    details: [],
  },{
    id: 17,
    description: 'Sennheiser RS120 On-Ear Wireless RF Headphones with Charging Dock',
    brand: 'Sennheiser',
    price: '58.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81NzuWuye9L._SL1500_.jpg',
    details: [],
  },{
    id: 18,
    description: 'Bose SoundTrue around-ear headphones II - Apple devices, Charcoal',
    brand: 'Bose',
    price: '99.00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61l0i5ugsfL._SL1500_.jpg',
    details: [],
  },{
    id: 19,
    description: 'Amazon Fire TV | Streaming Media Player',
    brand: 'Amazon',
    price: '74.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61jPxT1VThL._SL1000_.jpg',
    details: [],
  },{
    id: 20,
    description: 'Amazon Echo - Black',
    brand: 'Amazon',
    price: '139.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61kJf5cN0gL._SL1000_.jpg',
    details: [],
  },{
    id: 21,
    description: 'Roku Streaming Stick (3600R)',
    brand: 'Roku',
    price: '39.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61bqlBDRRML._SL1500_.jpg',
    details: [],
  }
];

const cart = [];
  /*
  { product: products[i],
    quantity: x}, */

function summary(cart) {
  const quantity = cart.reduce(function addItemQty(total, cartItem) {
    return total + cartItem.quantity
  }, 0);
  const subtotal = cart.reduce(function addItemQty(total, cartItem) {
    return total + (cartItem.product.price * cartItem.quantity)
  }, 0);

  const cartSummary = [quantity,subtotal.toFixed(2)];
  return cartSummary;
}

const TAX = .075;
const SHIPPING = 5.00;

const logo = document.getElementById('amazon');
const searchItems = document.getElementById('search');
const gotoCart = document.getElementById('goto-cart');
const container = document.getElementById('container');
const resultComments=document.getElementById('outcome');
const productResults = document.getElementById('products');
const cartResults = document.getElementById('cart');
const checkoutLogo = document.querySelector('.checkout-logo');
const checkoutItems = document.querySelector('.checkout-items');
const shippingInput = document.querySelectorAll('.shipping-input');
const cardInput = document.querySelector('.card-input');
const numberInput = document.querySelector('.number-input');
const expirationMonth = document.querySelector('.expiration-month');
const expirationYear = document.querySelector('.expiration-year');
const reviewPlace = document.getElementById('review');
const summaryPlace = document.getElementById('summary');
const addressName = document.getElementById('address-name');
const streetOne = document.getElementById('street-one');
const streetTwo = document.getElementById('street-two');
const cityState = document.getElementById('city-state');

function hidden(item, change) {
  const check = document.getElementById(item);
  if (change === 'add') {
    check.classList.add('hidden');
  }
  else {
    check.classList.remove('hidden');
  }
}

///////////////////////////////////////////////////////////
//when page loads or amazon logo is clicked, random products are generated
function refresh(event) {
  event.preventDefault();
  document.getElementById('text').value = '';
  /*if (cartResults.hasChildNodes()) {
    cartResults.removeChild(cartResults.lastChild);
  }*/
  empty(cartResults);
  if (document.querySelector('.cart-quantity-header') != null) {
    gotoCart.removeChild(document.querySelector('.cart-quantity-header'))
  }
  const cartQuantityHeader = createElement('div', {class: 'cart-quantity-header'}, [summary(cart)[0]]);
  gotoCart.appendChild(cartQuantityHeader);

  empty(resultComments);
  empty(productResults);
  hidden('heading','remove');
  hidden('container','remove');
  hidden('checkout', 'add');
  hidden('confirmation', 'add');

  const c = createElement;
  const allImages = c('div',{id: 'all-images'}, []);
  for (let i = 0; i < 20; i++) {
    const randomProduct = Math.floor(Math.random() * products.length);
    const image = renderLoad(products[randomProduct]);
    allImages.appendChild(image);
  }
  productResults.appendChild(allImages);

  const consider = c('div',{id: 'consider'},['Items to consider']);
  resultComments.appendChild(consider);
}

function renderLoad(product) {
  const c = createElement;
  const imageBox =
    c('div',{class: 'image-box ' + product.id}, [
      c('img', {src: product.image, class: 'image ' + product.id},[])
    ]);
  return imageBox;
}

function createElement(tagName,attributes,children) {
  const element = document.createElement(tagName);
  for (let key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child instanceof Element) {
      element.appendChild(child)
    }
    else {
      element.appendChild(document.createTextNode(child))
    }
  }
  return element;
}

function search(event) {
  event.preventDefault();
  const searchItemValue = document.getElementById('text').value;
  if (!searchItemValue.trim())
    return;
  empty(resultComments);
  empty(productResults);
  hidden('confirmation', 'add');
  const c = createElement;
  const allProducts = c('div',{id: 'all-products'},[]);

  /*1. compare search text with each array item in jsProducts
    2. if results are true, create div block to add to #products in document
    3. add div to #products in document
    4. if there are any search results, add a div string that states results
    5. if no search results, We found 0 results for 'gfsf aes'
  */
  for (let i = 0; i < products.length; i++) {
    if (isMatch(products[i].description, searchItemValue)) {
      const searchResult = renderResult(products[i]);
      allProducts.appendChild(searchResult);
    }
  }
  let resultComment = '';
  if (allProducts.firstChild) {
    productResults.appendChild(allProducts);
    resultComment = 'Showing most relevant results. See all results for \'' + searchItemValue + '\'.';
  }
  else {
    resultComment = 'Your search \'' + searchItemValue + '\' did not match any products.';
  }
  const searchOutcome = c('div', {id: 'search-outcome'}, [resultComment]);
  resultComments.appendChild (searchOutcome);
  //page is refreshed with same results if search button is pressed again
  document.getElementById('text').value = '';
}

//empties out any elements within element with 'product' ID
function empty(clean) {
  while (clean.firstChild) {
    clean.removeChild(clean.firstChild);
  }
}

///////////////////////////////////////////////////////////
//search function checks to see that each word of the search is contained in an item description
function isMatch(description, searchItem) {
  /*if (cartResults.hasChildNodes()) {
    cartResults.removeChild(cartResults.lastChild);
  }*/
  empty(cartResults);
  searchItem = searchItem.toLowerCase();
  searchItem = searchItem.trim();
  const space = ' ';
  const searchItemWords = searchItem.split(space);
  const productDescription = description.toLowerCase();
  for (let k = 0; k < searchItemWords.length; k++) {
    if (productDescription.indexOf(searchItemWords[k]) < 0) {
      return false;
    }
  }
  return true;
}

function renderResult(product) {
  const c = createElement;
  const products =
    c('div', {class: 'product ' + product.id}, [
      c('div', {class: 'image-box ' + product.id}, [
        c('img', {class: 'image ' + product.id, src: product.image}, [])
      ]),
      c('div', {class: 'info ' + product.id}, [
        c('div', {class: 'description ' + product.id}, [product.description]),
        c('div', {class: 'brand ' + product.id}, ['by ' + product.brand]),
        c('div', {class: 'price ' + product.id}, ['$' + product.price])
      ])
    ]);
  return products;
}

///////////////////////////////////////////////////////////
//generate product
function productPage(event) {
  event.preventDefault();
  if (event.target.classList.contains('image') || event.target.classList.contains('description')
      || event.target.classList.contains('price') || event.target.classList.contains('image-cart')
      || event.target.classList.contains('description-cart')) {
    empty(cartResults);
    if (productResults.hasChildNodes()) {
      if (document.getElementById('all-products') != null) {
        hidden('search-outcome', 'add');
        hidden('all-products', 'add');
        const backResults = createElement('div', {id: 'back-results'}, ['Back to search results']);
        resultComments.appendChild(backResults);
      }
      else {
        hidden('consider', 'add');
        hidden('all-images', 'add');
        const backImages = createElement('div', {id: 'back-images'},['Back']);
        resultComments.appendChild(backImages);
      }
    }
    const id = event.target.classList[1];
    const storeProduct = renderProduct(products[id-1]);
    const viewProduct = document.getElementById('products');
    viewProduct.appendChild(storeProduct);
    const tempLength = products[id-1].details.length;
    for (let i = 0; i < tempLength; i++) {
      const details = createElement('li', {class: 'detail-line ' + id + ' line' + i}, [products[id-1].details[i]]);
      const detail = document.querySelector('.detail');
      detail.appendChild(details);
    }
  }
  else return;
}

function renderProduct(product) {
  const c = createElement;
  const products =
    c('div', {id: 'product-page', class: product.id}, [
      c('div', {class: 'image-box-product ' + product.id}, [
        c('img', {class: 'image-product ' + product.id, src: product.image},[])
      ]),
      c('div', {class: 'info-product ' + product.id}, [
        c('div',{class: 'description-product ' + product.id}, [product.description]),
        c('div', {class: 'brand-intro ' + product.id},['by ',
          c('div', {class: 'brand-only ' + product.id}, [product.brand])
        ]),
        c('div', {class: 'price-product ' + product.id}, ['$' + product.price]),
        c('ul', {class: 'detail ' + product.id}, [])
      ]),
      c('div', {class: 'cart-box ' + product.id}, [
        c('div', {class: 'add-cart ' + product.id}, [
          c('div', {class: 'quantity ' + product.id}, ['Qty: ',
            c('select', {class: 'quantity-value ' + product.id, name: 'quantity'}, [
              c('option', {class: 'qty', value: 1}, ['1']),
              c('option', {class: 'qty', value: 2}, ['2']),
              c('option', {class: 'qty', value: 3}, ['3']),
              c('option', {class: 'qty', value: 4}, ['4']),
              c('option', {class: 'qty', value: 5}, ['5']),
              c('option', {class: 'qty', value: 6}, ['6']),
              c('option', {class: 'qty', value: 7}, ['7']),
              c('option', {class: 'qty', value: 8}, ['8']),
              c('option', {class: 'qty', value: 9}, ['9']),
              c('option', {class: 'qty', value: 10}, ['10'])
            ])
            //c('input', {class: 'quantity-value ' + product.id, type: 'number', name: 'quantity', min: 1, max: 10}, [])
          ]),
          c('button', {class: 'add-button ' + product.id, type: 'submit'}, [
            c('i', {class: 'cart-image ' + product.id + ' fa fa-shopping-cart fa-2x'}, []),
            'Add to cart'
          ])
      ])
      ])
    ]);
  return products;
}

///////////////////////////////////////////////////////////
//add to shopping cart
function addToCart(event) {
  event.preventDefault();

  if (event.target.classList.contains('add-button') || event.target.classList.contains('cart-image')) {
    event.stopPropagation();
    hidden('confirmation', 'add');
    let id = event.target.classList[1];
    id = products[id-1].id;
    const i = cart.length;
    const quantity = Number(document.querySelector('.quantity-value').value);
    const cartCheck = inCart(id);
    if (i > 0 && cartCheck !== false) {
          cart[cartCheck].quantity += quantity;
    }
    else {
      cart.push({product: products[id-1], quantity: quantity});
    }
    summary(cart);
    const cartQuantityHeader = document.querySelector('.cart-quantity-header');
    cartQuantityHeader.textContent = summary(cart)[0];
    const product = products[id-1];
    empty(resultComments);
    empty(cartResults);
    hidden('product-page', 'add');
    const added = renderAdded(product);
    productResults.appendChild(added);

    let tempText = document.querySelector('.quantity-value').value;
    if (document.querySelector('.quantity-value').value === '1') {
      tempText = tempText + ' item added to Cart';
    }
    else {
      tempText = tempText + ' items added to Cart';
    }
    const numberAdded = document.querySelector('.number-added');
    numberAdded.textContent = tempText;

    let tempSubtotal;
    if (summary(cart)[0] > 1) {
      tempSubtotal = 'Subtotal (' + String(summary(cart)[0]) + ' items):';
    }
    else {
      tempSubtotal = 'Subtotal (' + String(summary(cart)[0]) + ' item):';
    }
    const miniItemTotal = document.querySelector('.mini-item-total');
    miniItemTotal.textContent = tempSubtotal;
  }
  else return;
}

function inCart(productID) {
  for (let k = 0; k < cart.length; k++) {
    if (cart[k].product.id === productID) {
      return k;
    }
  }
  return false;
}

function renderAdded(product) {
  const c = createElement;

  const products =
    c('div', {class: 'add-product ' + product.id}, [
      c('div', {class: 'item-quantity ' + product.id}, [
        c('div', {class: 'check-number-added'}, [
          c('i', {class: 'check ' + product.id + ' fa fa-check fa-2x'}, []),
          c('div', {class: 'number-added ' + product.id}, [])
        ]),
        c('div', {class: 'image-description-added'}, [
          c('img', {class: 'image-added ' + product.id, src: product.image}, []),
          c('div', {class: 'description-price-added ' + product.id}, [
            c('div', {class: 'description-added ' + product.id}, [product.description]),
            c('div', {class: 'price-added ' + product.id}, ['$' + product.price])
          ])
        ]),
      ]),
      c('div',{class: 'mini-summary ' + product.id}, [
        c('div', {class: 'item-subtotal'}, [
          c('div', {class: 'mini-item-total'}, []),
          c('div', {class: 'mini-subtotal'}, ['$' + summary(cart)[1]]),
        ]),
        c('button', {class: 'view-cart-button ' + product.id, type: 'submit'}, [
          c('i', {class: 'view-cart ' + product.id + ' fa fa-shopping-cart fa-3x'}, [])
        ]),
        c('button', {class: 'add-proceed ' + product.id, type: 'submit'}, ['Proceed to checkout'])
      ])
    ]);
  return products;
}

///////////////////////////////////////////////////////////
//back to search results or images page
function back(event) {
  event.preventDefault();
  if (event.target.id === 'back-images') {
    hidden('consider', 'remove');
    hidden('all-images', 'remove');
    hidden('back-images', 'add');
    hidden('product-page', 'add');
    productResults.removeChild(productResults.lastChild);
    resultComments.removeChild(resultComments.lastChild);
  }
  else if (event.target.id === 'back-results') {
    hidden('search-outcome', 'remove');
    hidden('all-products','remove');
    hidden('back-results', 'add');
    hidden('product-page', 'add');

    productResults.removeChild(productResults.lastChild);
    resultComments.removeChild(resultComments.lastChild);
  }
  return;
}

///////////////////////////////////////////////////////////
//back to product view from add to cart
function backToProduct(event) {
  event.preventDefault();
  if (event.target.classList.contains('description-added')) {
    const hideAdded = document.querySelector('.add-product');
    hideAdded.classList.add('hidden');
    hidden('product-page', 'remove');
    productResults.removeChild(productResults.lastChild);
  }
  return;
}

///////////////////////////////////////////////////////////
//generate shopping cart
function shoppingCart(event) {
  event.preventDefault();
  if (event.target.classList.contains('view-cart-button') || event.target.classList.contains('view-cart')
      || event.target.classList.contains('goto-cart') || event.target.classList.contains('goto-icon')
      || event.target.classList.contains('cart-quantity-header') || event.target.classList.contains('checkout-items')
      || event.target.classList.contains('delete-product') || event.target.classList.contains('changed')) {
    event.stopPropagation();
    if (event.target.classList.contains('delete-product')) {
      deleteProduct(event);
    }
    event.target.classList.remove('changed');
    empty(resultComments);
    empty(productResults);
    hidden('heading', 'remove');
    hidden('container', 'remove');
    hidden('checkout', 'add');
    empty(cartResults);
    const cartSummaryView = renderSummary(cart);
    cartResults.appendChild(cartSummaryView);

    if (summary(cart)[0] === 0) {
      const emptyCart = createElement('div', {class: 'empty-cart'}, ['Your shopping Cart is empty']);
      const cartAll = document.querySelector('.cart-all');
      cartAll.removeChild(cartAll.lastChild);

      const cartMain = document.querySelector('.cart-main');
      cartMain.removeChild(cartMain.lastChild);
      cartMain.removeChild(cartMain.lastChild);

      const cartHeader = document.querySelector ('.cart-header');
      cartHeader.removeChild(cartHeader.lastChild);
      cartHeader.removeChild(cartHeader.lastChild);
      cartHeader.appendChild(emptyCart);
      return;
    }

    const productCart = document.querySelector('.product-cart');
    const renderedProducts = cart.map(renderCartProducts);
    renderedProducts.forEach(function(cartItems){
      productCart.appendChild(cartItems)
    });

    const productQuantity = document.querySelectorAll('.quantity-cart');
    for (let k = 0; k < cart.length; k++) {
      productQuantity[k].value = cart[k].quantity;
    }

    let tempSubtotal;
    if (summary(cart)[0] > 1) {
      tempSubtotal = 'Subtotal (' + String(summary(cart)[0]) + ' items):';
    }
    else {
      tempSubtotal = 'Subtotal (' + String(summary(cart)[0]) + ' item):';
    }
    const subtotalItemCart = document.querySelector('.subtotal-item-cart');
    subtotalItemCart.textContent = tempSubtotal;
    const subtotalItemSummary = document.querySelector('.subtotal-item-summary');
    subtotalItemSummary.textContent = tempSubtotal;
    return;
  }
}

function renderSummary(cart) {
  const c = createElement;

  const cartAll =
    c('div', {class: 'cart-all'}, [
      c('div', {class: 'cart-main'}, [
        c('div', {class: 'cart-header'}, [
          c('div', {class: 'cart-header-label'}, ['Shopping Cart']),
          c('div', {class: 'cart-price'}, ['Price']),
          c('div', {class: 'cart-quantity'}, ['Quantity'])
        ]),
        c('div', {class: 'product-cart'}, []),
        c('div', {class: 'subtotal-cart'}, [
          c('div', {class: 'subtotal-price-cart'}, ['$' + summary(cart)[1]]),
          c('div', {class: 'subtotal-item-cart'}, [])
        ])
      ]),
      c('div', {class: 'subtotal-box'}, [
        c('div', {class: 'subtotal-box-summary'}, [
          c('div', {class: 'subtotal-item-summary'}, []),
          c('div', {class: 'subtotal-price-summary'}, ['$' + summary(cart)[1]])
        ]),
        c('button', {class: 'cart-proceed', type: 'submit'}, ['Proceed to checkout'])
      ])
    ]);
  return cartAll;
}

function renderCartProducts(cartItem) {
  const c = createElement;
  const productCartItem =
    c('div', {class: 'product-cart-box ' + cartItem.product.id}, [
      c('div', {class: 'image-info-cart ' + cartItem.product.id}, [
        c('div', {class: 'image-cart-box ' + cartItem.product.id}, [
          c('img', {class: 'image-cart ' + cartItem.product.id, src: cartItem.product.image}, [])
        ]),
        c('div', {class: 'info-cart ' + cartItem.product.id}, [
          c('div', {class: 'description-cart ' + cartItem.product.id}, [cartItem.product.description]),
          c('div', {class: 'brand-cart ' + cartItem.product.id}, ['by ' + cartItem.product.brand]),
          c('div', {class: 'delete-product ' + cartItem.product.id}, ['Delete'])
        ])
      ]),
      c('div', {class: 'price-cart ' + cartItem.product.id}, ['$' + cartItem.product.price]),
      c('select', {class: 'quantity-cart ' + cartItem.product.id, name: 'quantity'}, [
        c('option', {class: 'qtyOne', value: 1}, ['1']),
        c('option', {class: 'qtyTwo', value: 2}, ['2']),
        c('option', {class: 'qtyThree', value: 3}, ['3']),
        c('option', {class: 'qtyFour', value: 4}, ['4']),
        c('option', {class: 'qtyFive', value: 5}, ['5']),
        c('option', {class: 'qtySix', value: 6}, ['6']),
        c('option', {class: 'qtySeven', value: 7}, ['7']),
        c('option', {class: 'qtyEight', value: 8}, ['8']),
        c('option', {class: 'qtyNine', value: 9}, ['9']),
        c('option', {class: 'qtyTen', value: 10}, ['10'])
      ])
    ])
    return productCartItem;
}

///////////////////////////////////////////////////////////
//update quantity from shopping cart
function updateQuantity(event) {
  event.preventDefault();
  event.target.classList.add('changed');
  const id = Number(event.target.classList[1]);
  const newQuantity = Number(event.target.value);
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.id === id) {
      cart[i].quantity = newQuantity;
      summary(cart);
      const cartQuantityHeader = document.querySelector('.cart-quantity-header');
      cartQuantityHeader.textContent = summary(cart)[0];
      shoppingCart(event);
      return;
    }
  }
}

///////////////////////////////////////////////////////////
//delete product from shopping cart
function deleteProduct(event) {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].product.id === Number(event.target.classList[1])) {
      cart.splice(i,1);
      summary(cart);
      const cartQuantityHeader = document.querySelector('.cart-quantity-header');
      cartQuantityHeader.textContent = summary(cart)[0];
    }
  }
}

///////////////////////////////////////////////////////////
//Payment and Checkout
function checkout(event) {
  event.preventDefault();
  if (event.target.classList.contains('add-proceed') || event.target.classList.contains('cart-proceed')) {
    empty(resultComments);
    empty(productResults);
    empty(cartResults);
    hidden('heading', 'add');
    hidden('container', 'add');
    hidden('checkout', 'remove');

    const checkoutItems = document.querySelector('.checkout-items')
    let tempItems;
    if (summary(cart)[0] === 1) {
      tempItems = '1 item';
    }
    else {
      tempItems = String(summary(cart)[0]) + ' items';
    }
    checkoutItems.textContent = tempItems;

    const itemsCost = document.querySelector('.items-cost');
    itemsCost.textContent = '$' + summary(cart)[1];

    const shippingCost = document.querySelector('.shipping-cost');
    shippingCost.textContent = '$' + SHIPPING.toFixed(2);

    const subtotalCost = document.querySelector('.subtotal-cost');
    let tempSubtotal = Number(summary(cart)[1]) + SHIPPING;
    tempSubtotal = tempSubtotal.toFixed(2);
    subtotalCost.textContent = '$' + String(tempSubtotal);

    const taxCost = document.querySelector('.tax-cost');
    let tempTax = Number(summary(cart)[1]) * TAX;
    tempTax = tempTax.toFixed(2);
    taxCost.textContent = '$' + String(tempTax);

    const totalCost = document.querySelector('.total-cost');
    const tempTotal = Number(tempTax) + Number(tempSubtotal);
    totalCost.textContent = '$' + String(tempTotal.toFixed(2));

    const totalCosts = document.querySelector('.total-costs');
    totalCosts.textContent = '$' + String(tempTotal.toFixed(2));

  }
}

function placeOrder(event) {
  event.preventDefault();

  const shippingAddress = {
    name: document.getElementById('name-input'),
    address: document.getElementById('one-input'),
    addressTwo: document.getElementById('two-input'),
    city: document.getElementById('city-input'),
    state: document.getElementById('state-input'),
    zip: document.getElementById('zip-input'),
    country: document.getElementById('country-input'),
    phone: document.getElementById('phone-input')
  };

  for (let key in shippingAddress) {
    shippingAddress[key].classList.remove('missing');
  }

  const paymentMethod = {
    name: document.querySelector('.card-input'),
    number: document.querySelector('.number-input'),
    expirationMonth: document.querySelector('.expiration-month'),
    expirationYear: document.querySelector('.expiration-year')
  };

  for (let temp in paymentMethod) {
    paymentMethod[temp].classList.remove('missing');
  }

  const missingAddress = missingField(shippingAddress);
  const missingPayment = missingField(paymentMethod);

  if (missingAddress || missingPayment) {
    return;
  }

  while (cart.length > 0) {
    cart.pop();
  }
  summary(cart);
  const cartQuantityHeader = document.querySelector('.cart-quantity-header');
  cartQuantityHeader.textContent = summary(cart)[0];
  hidden('heading', 'remove');
  hidden('container', 'remove');
  hidden('confirmation', 'remove');
  hidden('checkout', 'add');

  addressName.textContent = shippingAddress.name.value;
  streetOne.textContent = shippingAddress.address.value;
  streetTwo.textContent = shippingAddress.addressTwo.value;
  cityState.textContent = shippingAddress.city.value + ', ' + shippingAddress.state.value + ' ' + shippingAddress.zip.value;

  for (let del in shippingAddress) {
    shippingAddress[del].value = '';
  }
  for (let omit in paymentMethod) {
    paymentMethod[omit].value = '';
  }

}

function missingField(info) {
  let check = 0;
  for (let key in info) {
    if (info[key].value.trim() === '' && info[key] != document.getElementById('two-input')){
      info[key].classList.add('missing');
      check = check + 1;
    }
  }
  return check > 0;
}

function checkMissing(event) {
  if (event.target.classList.contains('missing')) {
    if (!event.target.value.trim()) {
      return;
    }
    event.target.classList.remove('missing');
  }
}

//event listeners
///////////////////////////////////////////////////////////
logo.addEventListener('click', refresh);
window.addEventListener('load', refresh);
searchItems.addEventListener('submit', search);

container.addEventListener('click', productPage);
container.addEventListener('click', addToCart);
container.addEventListener('click', back);
container.addEventListener('click', backToProduct);
container.addEventListener('click', shoppingCart);
container.addEventListener('click', checkout);

cartResults.addEventListener('click', productPage);
cartResults.addEventListener('click', shoppingCart);
cartResults.addEventListener('click', checkout);
cartResults.addEventListener('change', updateQuantity);

gotoCart.addEventListener('click', shoppingCart);
checkoutLogo.addEventListener('click', refresh);
checkoutItems.addEventListener('click', shoppingCart);

reviewPlace.addEventListener('click', placeOrder);
summaryPlace.addEventListener('click', placeOrder);

for (let i = 0; i < shippingInput.length; i++) {
  shippingInput[i].addEventListener('input', checkMissing);
}
cardInput.addEventListener('input', checkMissing);
numberInput.addEventListener('input', checkMissing);
expirationMonth.addEventListener('input', checkMissing);
expirationYear.addEventListener('input', checkMissing);
