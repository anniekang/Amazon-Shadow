var products = [
  { id: 1,
    description: 'Bose QuietComfort 20 Acoustic Noise Cancelling Headphones, Apple Devices, Black',
    brand: 'Bose',
    price: '199.00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/6162wKNVC7L._SX425_.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 2,
    description: 'Panasonic ErgoFit In-Ear Earbud Headphones RP-HJE120-K (Black) Dynamic Crystal Clear Sound, Ergonomic Comfort-Fit',
    brand: 'Panasonic',
    price: '7.12',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31-nuw-iqAL.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 3,
    description: 'Bose SoundSport Wireless Headphones, Black',
    brand: 'Bose',
    price: '149.00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61p7oi3BR%2BL._SL1500_.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 4,
    description: 'Powerbeats3 Wireless In-Ear Headphone - White',
    brand: 'Beats',
    price: '199.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31CDuZiqLgL.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 5,
    description: 'Plantronics BackBeat Fit Bluetooth Headphones - Blue',
    brand: 'Plantronics',
    price: '84.95',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31C%2BG8wjpPL.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 6,
    description: 'Bose SoundSport Pulse Wireless Headphones, Power Red',
    brand: 'Bose',
    price: '199.00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61w6LHZGs9L._SL1500_.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 7,
    description: 'Beats By Dr. Dre In Ear Head Phones Stereo Headset for HTC, Black',
    brand: 'Beats',
    price: '39.71',
    image: 'https://images-na.ssl-images-amazon.com/images/I/614pCdg40KL._SL1500_.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 8,
    description: 'Sony MDRXB50AP Extra Bass Earbud Headset (Black)',
    brand: 'Sony',
    price: '27.27',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61p1oDWAPUL._SL1200_.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 9,
    description: 'Wilson Men\'s 2015 Ultra Complete Package Golf Set, Standard',
    brand: 'Wilson',
    price: '155.51',
    image: 'https://images-na.ssl-images-amazon.com/images/I/517bv3TTfRL._SL1000_.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 10,
    description: 'Skullcandy Hesh 2 Bluetooth Wireless Headphones with Mic, Black',
    brand: 'Skullcandy',
    price: '49.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/7197WSYscIL._SL1500_.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 11,
    description: 'Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White',
    brand: 'Samsung',
    price: '4.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/31tZplZhyEL.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 12,
    description: 'Beats Studio Wireless Over-Ear Headphone - Titanium',
    brand: 'Beats',
    price: '219.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/71Hgw5UEEXL._SL1500_.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 13,
    description: 'Sony MDRXB950BT/B Extra Bass Bluetooth Headphones (Black)',
    brand: 'Sony',
    price: '88.00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61WaUPGzeKL._SL1200_.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 14,
    description: 'Beats Solo2 Wireless On-Ear Headphone - Black',
    brand: 'Bose',
    price: '149.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61b8ZEFmCJL._SL1500_.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 15,
    description: 'Bose QuietComfort 35 Wireless Headphones, Noise Cancelling - Black',
    brand: 'Bose',
    price: '349.00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61QwytXOcxL._SL1500_.jpg',
    details: ['World-class noise cancellation makes quiet sound quieter and music sound better','Volume-optimized EQ for balanced audio performance at any volume','Wireless convenience, with easy Bluetooth and NFC pairing aided by voice prompts','20-hour battery life per charge; up to 40 hours in wired mode','Noise-rejecting dual-microphone system for clear calls even in windy environments'],
    cart: false,
    quantity: 0},
  { id: 16,
    description: 'Beats Solo3 Wireless On-Ear Headphone - Rose Gold',
    brand: 'Beats',
    price: '249.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41YByxxpv0L.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 17,
    description: 'Sennheiser RS120 On-Ear Wireless RF Headphones with Charging Dock',
    brand: 'Sennheiser',
    price: '58.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/81NzuWuye9L._SL1500_.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 18,
    description: 'Bose SoundTrue around-ear headphones II - Apple devices, Charcoal',
    brand: 'Bose',
    price: '99.00',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61l0i5ugsfL._SL1500_.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 19,
    description: 'Amazon Fire TV | Streaming Media Player',
    brand: 'Amazon',
    price: '74.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61jPxT1VThL._SL1000_.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 20,
    description: 'Amazon Echo - Black',
    brand: 'Amazon',
    price: '139.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61kJf5cN0gL._SL1000_.jpg',
    details: [],
    cart: false,
    quantity: 0},
  { id: 21,
    description: 'Roku Streaming Stick (3600R)',
    brand: 'Roku',
    price: '39.99',
    image: 'https://images-na.ssl-images-amazon.com/images/I/61bqlBDRRML._SL1500_.jpg',
    details: [],
    cart: false,
    quantity: 0},
];

var cart = [];
  /*
  { product: products[i],
    quantity: x}, */

var cartSummary = [0,0];
// cartSummary[0] = item count
// cartSummary[1] = subtotal

function summary(cart) {
  var quantity = 0;
  var subtotal = 0;
  for (var i = 0; i < cart.length; i++) {
    quantity = quantity + cart[i].quantity;
    subtotal = subtotal + (cart[i].product.price * cart[i].quantity);
  }
  cartSummary = [quantity,subtotal.toFixed(2)];
  return cartSummary;
}

var logo = document.getElementById('amazon');
var resultComments=document.getElementById('outcome');
var searchItem = document.getElementById('text');
var productResults = document.getElementById('products');
var cartResults = document.getElementById('cart');

///////////////////////////////////////////////////////////
//when page loads or amazon logo is clicked, random products are generated
function refresh(event) {
  event.preventDefault();
  document.getElementById('text').value = '';
  if (cartResults.hasChildNodes()) {
    cartResults.removeChild(cartResults.lastChild);
  }
  empty(resultComments);
  empty(productResults);
  var allImages = document.createElement('div');
  allImages.classList.add('allImages');
  for (var i = 0; i < 20; i++) {
    var randomProduct = Math.floor(Math.random() * products.length);
    var image = renderLoad(products[randomProduct]);
    allImages.appendChild(image);
  }
  productResults.appendChild(allImages);

  var consider=document.createElement('div');
  consider.classList.add('consider');

  var resultComment = 'Items to consider';
  resultComment = document.createTextNode(resultComment);

  consider.appendChild(resultComment);
  resultComments.appendChild(consider);
}

function renderLoad(product) {
  var imageBox = document.createElement('div');
  imageBox.classList.add('imageBox', product.id);

  var image = document.createElement('img');
  image.classList.add('image', product.id);
  image.setAttribute('src', product.image);

  imageBox.appendChild(image);
  return imageBox;
}

//when item is searched
function listener(event) {
  event.preventDefault();
  searchItem = document.getElementById('text').value; //searched text

  //do nothing if search is empty
  if (!searchItem.trim())
    return;

  empty(resultComments);
  empty(productResults);
  var allProducts = document.createElement('div');
  allProducts.classList.add('allProducts')

  /*1. compare search text with each array item in jsProducts
    2. if results are true, create div block to add to #products in document
    3. add div to #products in document
    4. if there are any search results, add a div string that states results
    5. if no search results, We found 0 results for 'gfsf aes'
  */
  for (var i = 0; i < products.length; i++) {
    if (search(products[i].description, searchItem)) {
      var searchResult = renderResult(products[i]);
      allProducts.appendChild(searchResult);
    }
  }

  var searchOutcome=document.createElement('div');
  searchOutcome.classList.add('searchOutcome');
  var resultComment;

  if (allProducts.firstChild) {
    productResults.appendChild(allProducts);
    resultComment = 'Showing most relevant results. See all results for \'' + searchItem + '\'.';
    resultComment = document.createTextNode(resultComment);
    searchOutcome.appendChild(resultComment);
  }
  else {
    resultComment = 'Your search \'' + searchItem + '\' did not match any products.';
    resultComment = document.createTextNode(resultComment);
    searchOutcome.appendChild(resultComment);
  }
  resultComments.appendChild (searchOutcome);
  //page is refreshed with same results if search button is pressed again
  document.getElementById('text').value = '';

}

//empties out any elements within element with 'product' ID
function empty(productResults) {
  while (productResults.firstChild) {
    productResults.removeChild(productResults.firstChild);
  }
}

///////////////////////////////////////////////////////////
//search function checks to see that each word of the search is contained in an item description
function search(description, searchItem) {
  if (cartResults.hasChildNodes()) {
    cartResults.removeChild(cartResults.lastChild);
  }
  searchItem = searchItem.toLowerCase();
  searchItem = searchItem.trim();
  var space = ' ';
  var searchItemWords = searchItem.split(space);
  var productDescription = description.toLowerCase();
  for (var k = 0; k < searchItemWords.length; k++) {
    if (productDescription.indexOf(searchItemWords[k]) < 0) {
      return false;
    }
  }
  return true;
}

function renderResult(product) {
/*
<div class='product'>
  <div id=imageBox>
    <img class='image' src='link.com'/>
  </div>
  <div class='info'>
    <div class='description'></div>
    <div class='brand'></div>
    <div class='price'></div>
  </div>
</div>
*/

  var products = document.createElement('div');
  products.classList.add('product', product.id);

  var imageBox = document.createElement('div');
  imageBox.classList.add('imageBox', product.id);

  var image = document.createElement('img');
  image.classList.add('image', product.id);
  image.setAttribute('src', product.image);

  imageBox.appendChild(image);

  var info = document.createElement('div');
  info.classList.add('info', product.id);

  var description = document.createElement('div');
  description.classList.add('description', product.id);
  description.textContent = product.description;

  var brand = document.createElement('div');
  brand.classList.add('brand', product.id);
  brand.textContent = 'by ' + product.brand;

  var price = document.createElement('div');
  price.classList.add('price', product.id);
  price.textContent = '$' + product.price;

  info.appendChild(description);
  info.appendChild(brand);
  info.appendChild(price);

  products.appendChild(imageBox);
  products.appendChild(info);

  return products;
}

///////////////////////////////////////////////////////////
//generate product productPage
function productPage(event) {
  event.preventDefault();

  if (event.target.classList.contains('image') || event.target.classList.contains('description') || event.target.classList.contains('price') || event.target.classList.contains('imageCart') || event.target.classList.contains('descriptionCart')) {
    if (cartResults.hasChildNodes()) {
      cartResults.removeChild(cartResults.lastChild);
    }
    if (productResults.hasChildNodes()) {
      if (document.querySelector('.allProducts') != null) {
        // <div class='back'> Back </div>

        var hideOutcome = document.querySelector('.searchOutcome');
        hideOutcome.classList.add('hidden');

        var hideSearch = document.querySelector('.allProducts');
        hideSearch.classList.add('hidden');

        var backResults = document.createElement('div');
        backResults.classList.add('backResults');

        backResults.appendChild(document.createTextNode('Back to search results'));
        resultComments.appendChild(backResults);
      }
      else {
        // <div class='backResults'> Back to search results </div>

        var hideConsider = document.querySelector('.consider');
        hideConsider.classList.add('hidden');

        var hideImages = document.querySelector('.allImages');
        hideImages.classList.add('hidden');

        var backImages = document.createElement('div');
        backImages.classList.add('backImages');

        backImages.appendChild(document.createTextNode('Back'));
        resultComments.appendChild(backImages);
      }
    }
    var id = event.target.classList[1];
    id -= 1;
    var storeProduct = renderProduct(products[id]);
    var viewProduct = document.getElementById('products');
    viewProduct.appendChild(storeProduct);
  }
  else return;
}

function renderProduct(product) {
/*
<div class='product'>
  <div class='imageBox'>
    <img class='image' src='link.com'/>
  </div>
  <div class='info'>
    <div class='description'></div>
    <div class='brand'></div>
    <div class='price'></div>
  </div>
  <div class='cartBox'>
  <div class='addCart'
    <input type='number' name='quantity' min='1' max='10'>
    <button class='addButton' type='submit'><i class='cartImage' class='fa fa-shopping-cart'>Add to cart</button>
  </div>
  </div>
</div>
*/

  var products = document.createElement('div');
  products.classList.add('productPage', product.id);

  var imageBox = document.createElement('div');
  imageBox.classList.add('imageBoxProduct', product.id);

  var image = document.createElement('img');
  image.classList.add('imageProduct', product.id);
  image.setAttribute('src', product.image);

  imageBox.appendChild(image);

  var info = document.createElement('div');
  info.classList.add('infoProduct', product.id);

  var description = document.createElement('div');
  description.classList.add('descriptionProduct', product.id);
  description.textContent = product.description;

  var brand = document.createElement('div');
  brand.classList.add('brandIntro', product.id);
  brand.textContent = 'by ';

  var brandOnly = document.createElement('div');
  brandOnly.classList.add('brandOnly', product.id);
  brandOnly.textContent = product.brand;

  brand.appendChild(brandOnly);

  var price = document.createElement('div');
  price.classList.add('priceProduct', product.id);
  price.textContent = '$' + product.price;

  info.appendChild(description);
  info.appendChild(brand);
  info.appendChild(price);

  if (product.details.length > 0) {
    var details = document.createElement('ul');
    details.classList.add('details', product.id);
    for (var i = 0; i < product.details.length; i++) {
      var detailLine = document.createElement('li');
      var lineNumber = 'line' + i;
      detailLine.classList.add('detailLine', product.id, lineNumber);
      detailLine.textContent = product.details[i];
      details.appendChild(detailLine);
    }
    info.appendChild(details);
  }

  var cartBox = document.createElement('div');
  cartBox.classList.add('cartBox', product.id);

  var addCart = renderCart(product);
  cartBox.appendChild(addCart);

  products.appendChild(imageBox);
  products.appendChild(info);
  products.appendChild(cartBox);

  return products;
}

function renderCart(product){
//quantity plus add to cart
/*
<div class='addCart'
  <input type='number' name='quantity' min='1' max='10'>
  <button class='addButton' type='submit'><i class='cartImage' class='fa fa-shopping-cart'>Add to cart</button>
</div>
*/
  var addCart = document.createElement('div');
  addCart.classList.add('addCart', product.id);

  var quantity = document.createElement('div');
  quantity.classList.add('quantity', product.id);
  quantity.textContent = 'Qty: ';

  var quantityValue = document.createElement('input');
  quantityValue.classList.add('quantityValue', product.id);
  quantityValue.setAttribute('type', 'number');
  quantityValue.setAttribute('name', 'quantity');
  quantityValue.setAttribute('min', '1');
  quantityValue.setAttribute('max', '10');
  quantityValue.defaultValue = 1;

  quantity.appendChild(quantityValue);

  var addButton = document.createElement('button');
  addButton.classList.add('addButton', product.id);
  addButton.setAttribute('type', 'submit');

  var cartImage = document.createElement('i');
  cartImage.classList.add('cartImage', product.id, 'fa', 'fa-shopping-cart', 'fa-2x');

  addButton.appendChild(cartImage);
  addButton.appendChild(document.createTextNode('Add to Cart'));

  addCart.appendChild(quantity);
  addCart.appendChild(addButton);

  return addCart;
}

///////////////////////////////////////////////////////////
//add to shopping cart
function addToCart(event) {
  event.preventDefault();

  if (event.target.classList.contains('addButton') || event.target.classList.contains('cartImage')) {
    event.stopPropagation();
    if (cartResults.hasChildNodes()) {
      cartResults.removeChild(cartResults.lastChild);
    }
    var id = event.target.classList[1];
    id = products[id-1].id;
    var i = cart.length;
    var quantity = Number(document.querySelector('.quantityValue').value);
    var cartCheck = inCart(id);
    if (i > 0 && cartCheck !== false) {
          cart[cartCheck].quantity += quantity;
          summary(cart);
    }
    else {
      cart.push({product: products[id-1], quantity: quantity});
      summary(cart);
    }
    var product = products[id-1];
    var added = renderAdded(product);
    var addedItem = document.getElementById('products');
    addedItem.appendChild(added);
  }
  else return;
}

function inCart(productID) {
  for (var k = 0; k < cart.length; k++) {
    if (cart[k].product.id === productID) {
      return k;
    }
  }
  return false;
}

function renderAdded(product) {
/*
<div class='addProduct'>
  <div class='itemQuantity'>
    <div class='checkNumberAdded'>
      <i class='check' class='fa fa-check'></>
      <div class='numberAdded'></div>
    </div>
    <div class='imageDescriptionAdded'>
      <img class='imageAdded' src='link.com'/>
      <div class='descriptionPriceAdded'>
        <div class='descriptionAdded'></div>
        <div class='priceAdded'></div>
      </div>
    </div>
  </div>
  <div class='miniSummary'>
      <div class='miniItemTotal'></div>
      <div class='miniSubtotal'></div>
      <button class='viewCartButton' type='submit'><i class='viewCart' class='fa fa-shopping-cart'></button>
  </div>

  </div>
</div>
*/

  var hideProduct = document.querySelector('.productPage');
  hideProduct.classList.add('hidden');

  if (document.querySelector('.backResults') != null) {
    var backResults = document.querySelector('.backResults');
    resultComments.removeChild(backResults);
  }
  else if (document.querySelector('.backImages') != null) {
    var backImages = document.querySelector('.backImages');
    resultComments.removeChild(backImages);
  }

  var products = document.createElement('div');
  products.classList.add('addProduct', product.id);

  var box = document.createElement('div');
  box.classList.add('itemQuantity', product.id);

  var checkNumberAdded = document.createElement('div');
  checkNumberAdded.classList.add('checkNumberAdded');

  var check = document.createElement('i');
  check.classList.add('check', product.id, 'fa', 'fa-check', 'fa-2x');

  var numberAdded = document.createElement('div');
  numberAdded.classList.add('numberAdded', product.id);
  var tempText = document.querySelector('.quantityValue').value;
  if (document.querySelector('.quantityValue').value === '1') {
    tempText = tempText + ' item added to Cart';
  }
  else {
    tempText = tempText + ' items added to Cart';
  }
  numberAdded.textContent = tempText;

  checkNumberAdded.appendChild(check);
  checkNumberAdded.appendChild(numberAdded);

  box.appendChild(checkNumberAdded);

  var imageDescriptionAdded = document.createElement('div');
  imageDescriptionAdded.classList.add('imageDescriptionAdded');

  var image = document.createElement('img');
  image.classList.add('imageAdded', product.id);
  image.setAttribute('src', product.image);

  var descriptionPrice = document.createElement('div');
  descriptionPrice.classList.add('descriptionPriceAdded', product.id);

  var description = document.createElement('div');
  description.classList.add('descriptionAdded', product.id);
  description.textContent = product.description;

  var price = document.createElement('div');
  price.classList.add('priceAdded', product.id);
  price.textContent = '$' + product.price;

  descriptionPrice.appendChild(description);
  descriptionPrice.appendChild(price);

  imageDescriptionAdded.appendChild(image);
  imageDescriptionAdded.appendChild(descriptionPrice);

  box.appendChild(imageDescriptionAdded);

  var miniSummary = document.createElement('div');
  miniSummary.classList.add('miniSummary');

  var tempSubtotal;
  if (cartSummary[0] > 1) {
    tempSubtotal = 'Subtotal (' + String(cartSummary[0]) + ' items):';
  }
  else {
    tempSubtotal = 'Subtotal (' + String(cartSummary[0]) + ' item):';
  }

  var miniItemTotal = document.createElement('div');
  miniItemTotal.classList.add('miniItemTotal');
  miniItemTotal.textContent = tempSubtotal;

  var miniSubtotal = document.createElement('div');
  miniSubtotal.classList.add('miniSubtotal');
  miniSubtotal.textContent = '$' + cartSummary[1];

  miniSummary.appendChild(miniItemTotal);
  miniSummary.appendChild(miniSubtotal);

  var addButton = document.createElement('button');
  addButton.classList.add('viewCartButton', product.id);
  addButton.setAttribute('type', 'submit');

  var cartImage = document.createElement('i');
  cartImage.classList.add('viewCart', product.id, 'fa', 'fa-shopping-cart', 'fa-3x');

  addButton.appendChild(cartImage);
  miniSummary.appendChild(addButton);

  products.appendChild(box);
  products.appendChild(miniSummary);

  return products;
  }

///////////////////////////////////////////////////////////
//back to search results or images page
function back(event) {
  event.preventDefault();
  if (event.target.classList.contains('backImages')) {
    var hideProduct = document.querySelector('.productPage');
    hideProduct.classList.add('hidden');
    var showImages = document.querySelector('.allImages');
    showImages.classList.remove('hidden');
    var hideBack = document.querySelector('.backImages');
    hideBack.classList.add('hidden');
    var showConsider = document.querySelector('.consider');
    showConsider.classList.remove('hidden');
    productResults.removeChild(productResults.lastChild);
    resultComments.removeChild(resultComments.lastChild);
  }
  else if (event.target.classList.contains('backResults')) {
    var hideProductPage = document.querySelector('.productPage');
    hideProductPage.classList.add('hidden');
    var showProducts = document.querySelector('.allProducts');
    showProducts.classList.remove('hidden');
    var hideBackResults = document.querySelector('.backResults');
    hideBackResults.classList.add('hidden');
    var showOutcome = document.querySelector('.searchOutcome');
    showOutcome.classList.remove('hidden');
    productResults.removeChild(productResults.lastChild);
    resultComments.removeChild(resultComments.lastChild);
  }
  return;
}

///////////////////////////////////////////////////////////
//back to product view from add to cart
function backToProduct(event) {
  event.preventDefault();
  if (event.target.classList.contains('descriptionAdded')) {
    var hideAdded = document.querySelector('.addProduct');
    hideAdded.classList.add('hidden');
    var showProduct = document.querySelector('.productPage');
    showProduct.classList.remove('hidden');
    productResults.removeChild(productResults.lastChild);
    var quantityValue = document.querySelector('.quantityValue');
    quantityValue.value = 1;
  }
  return;
}

///////////////////////////////////////////////////////////
//generate shopping cart
function shoppingCart(event) {
  event.preventDefault();
  if (event.target.classList.contains('viewCartButton') || event.target.classList.contains('viewCart')) {
    event.stopPropagation();
    empty(resultComments);
    empty(productResults);
    //unhide if shopping cart already exists
    var cartSummaryView = renderSummary(cart);
    cartResults.appendChild(cartSummaryView);
  }
  return;
}

function renderSummary(cart) {
/*
<div class='allCart'>
  <div class='cartMain'>
    <div class='cartHeader'>
      <div class='cartHeaderLabel'><div>
      <div class='cartPrice'></div>
      <div class='cartQuantity'></div>
    </div>

    <div class='productCart'>
      <div class='productCartBox'>
        <div class='imageInfoCart'>
          <div class='imageCartBox'>
            <img class='imageCart' src='link.com'/>
          </div>
          <div class='infoCart'>
            <div class='descriptionCart'></div>
            <div class='brandCart'></div>
            <div class='delete'></div>
          </div>
        </div>
        <div class='priceCart'></div>
        <div class='quantityCart'></div>
      </div>
    </div>
    <div class='subtotalCart'>
      <div class='subtotalPriceCart'></div>
      <div class='subtotalItemCart'></div>
    </div>
  </div>
  <div class='subtotalBox'>
    <div class='subtotalBoxSummary'>
      <div class='subtotalItemSummary'></div>
      <div class='subtotalPriceSummary'></div>
    </div>
    <button class='proceedButton' type='submit'>Proceed to checkout</button>
  </div>
</div>

*/

empty(cartResults);

var allCart = document.createElement('div');
allCart.classList.add('allCart');

var cartMain = document.createElement('div');
cartMain.classList.add('cartMain');

var cartHeader = document.createElement('div');
cartHeader.classList.add('cartHeader');

var cartHeaderLabel = document.createElement('div');
cartHeaderLabel.classList.add('cartHeaderLabel');
cartHeaderLabel.textContent = 'Shopping Cart';

if (cartSummary[0] === 0) {
  var emptyCart = document.createElement('div');
  emptyCart.classList.add('emptyCart');
  emptyCart.textContent = 'Your Shopping Cart is empty';
  cartHeader.appendChild(cartHeaderLabel);
  cartHeader.appendChild(emptyCart);
  cartMain.appendChild(cartHeader);
  return cartMain;
}

var cartPrice = document.createElement('div');
cartPrice.classList.add('cartPrice');
cartPrice.textContent = 'Price';

var cartQuantity = document.createElement('div');
cartQuantity.classList.add('cartQuantity');
cartQuantity.textContent = 'Quantity';

cartHeader.appendChild(cartHeaderLabel);
cartHeader.appendChild(cartPrice);
cartHeader.appendChild(cartQuantity);

cartMain.appendChild(cartHeader);

var productCart = document.createElement('div');
productCart.classList.add('productCart');

for (var i = 0; i < cart.length; i++) {
  var productCartBox = document.createElement('div');
  productCartBox.classList.add('productCartBox', cart[i].product.id)

  var imageInfoCart = document.createElement ('div');
  imageInfoCart.classList.add('imageInfoCart', cart[i].product.id);

  var imageCartBox = document.createElement('div');
  imageCartBox.classList.add('imageCartBox', cart[i].product.id);

  var imageCart = document.createElement('img');
  imageCart.classList.add('imageCart', cart[i].product.id);
  imageCart.setAttribute('src', cart[i].product.image);

  imageCartBox.appendChild(imageCart);
  imageInfoCart.appendChild(imageCartBox);

  var infoCart = document.createElement('div');
  infoCart.classList.add('infoCart', cart[i].product.id);

  var descriptionCart = document.createElement('div');
  descriptionCart.classList.add('descriptionCart', cart[i].product.id);
  descriptionCart.textContent = cart[i].product.description;

  var brandCart = document.createElement('div');
  brandCart.classList.add('brandCart', cart[i].product.id);
  brandCart.textContent = 'by ' + cart[i].product.brand;

  var deleteProduct = document.createElement('div');
  deleteProduct.classList.add('deleteProduct', cart[i].product.id);
  deleteProduct.textContent = 'Delete';

  infoCart.appendChild(descriptionCart);
  infoCart.appendChild(brandCart);
  infoCart.appendChild(deleteProduct);

  imageInfoCart.appendChild(infoCart);
  productCartBox.appendChild(imageInfoCart);

  var priceCart = document.createElement('div');
  priceCart.classList.add('priceCart', cart[i].product.id);
  priceCart.textContent = '$' + cart[i].product.price;

  var quantityCart = document.createElement('input');
  quantityCart.classList.add('quantityCart', cart[i].product.id);
  quantityCart.setAttribute('type', 'number');
  quantityCart.setAttribute('name', 'quantity');
  quantityCart.setAttribute('min', '1');
  quantityCart.setAttribute('max', '10');
  quantityCart.value = cart[i].quantity;

  productCartBox.appendChild(priceCart);
  productCartBox.appendChild(quantityCart);

  productCart.appendChild(productCartBox);
}

cartMain.appendChild(productCart);

var subtotalCart = document.createElement('div');
subtotalCart.classList.add('subtotalCart');
var tempSubtotal;

if (cartSummary[0] > 1) {
  tempSubtotal = 'Subtotal (' + String(cartSummary[0]) + ' items):';
}
else {
  tempSubtotal = 'Subtotal (' + String(cartSummary[0]) + ' item):';
}

var subtotalItemCart = document.createElement('div');
subtotalItemCart.classList.add('subtotalItemCart');
subtotalItemCart.textContent = tempSubtotal;

var subtotalPriceCart = document.createElement('div');
subtotalPriceCart.classList.add('subtotalPriceCart');
subtotalPriceCart.textContent = '$' + cartSummary[1];

subtotalCart.appendChild(subtotalPriceCart);
subtotalCart.appendChild(subtotalItemCart);

cartMain.appendChild(subtotalCart);

var subtotalBox = document.createElement('div');
subtotalBox.classList.add('subtotalBox');

var subtotalBoxSummary = document.createElement('div');
subtotalBoxSummary.classList.add('subtotalBoxSummary');

var subtotalItemSummary = document.createElement('div');
subtotalItemSummary.classList.add('subtotalItemSummary');
subtotalItemSummary.textContent = tempSubtotal

var subtotalPriceSummary = document.createElement('div');
subtotalPriceSummary.classList.add('subtotalPriceSummary');
subtotalPriceSummary.textContent = '$' + cartSummary[1];

subtotalBoxSummary.appendChild(subtotalItemSummary);
subtotalBoxSummary.appendChild(subtotalPriceSummary);

/* var proceedButton = document.createElement('button');
proceedButton.classList.add('proceedButton');
proceedButton.setAttribute('type', 'submit');
proceedButton.appendChild(document.createTextNode('Proceed to checkout')); */

subtotalBox.appendChild(subtotalBoxSummary);

allCart.appendChild(cartMain);
allCart.appendChild(subtotalBox);


return allCart;

}

///////////////////////////////////////////////////////////
//delete product from shopping cart
function deleteProduct(event) {
  event.preventDefault();
  if (event.target.classList.contains('deleteProduct')) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === Number(event.target.classList[1]))
        cart.splice(i,1);
        summary(cart);
        var cartSummaryView = renderSummary(cart);
        cartResults.appendChild(cartSummaryView);
    }
  }
}

///////////////////////////////////////////////////////////
//update quantity from shopping cart
function updateQuantity(event) {
  event.preventDefault();
  //if passed in value is same as what it was, do nothing, otherwise, update quantity
  if (event.target.classList.contains('quantityCart')) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === Number(event.target.classList[1])) {
        if (cart[i].quantity === event.target.value) {
          //do nothing if same value
          return;
        }
        else {
          cart[i].quantity = Number(event.target.value);
          summary(cart);
          var cartSummaryView = renderSummary(cart);
          cartResults.appendChild(cartSummaryView);
          return;
        }
      }
    }
  }
}

///////////////////////////////////////////////////////////
//event listeners
logo.addEventListener('click', refresh);
window.addEventListener('load', refresh);
var searchItems = document.getElementById('search');
searchItems.addEventListener('submit', listener);

var container = document.getElementById('container');
container.addEventListener('click', productPage);
container.addEventListener('click', addToCart);
container.addEventListener('click', back);
container.addEventListener('click', backToProduct);
container.addEventListener('click', shoppingCart);

cartResults.addEventListener('click', productPage);
cartResults.addEventListener('click', deleteProduct);
cartResults.addEventListener('input', updateQuantity);
