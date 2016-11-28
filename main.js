var products = [
  { id: 1,
    description: "Bose QuietComfort 20 Acoustic Noise Cancelling Headphones, Apple Devices, Black",
    brand: "Bose",
    price: "$199.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/6162wKNVC7L._SX425_.jpg"},
  { id: 2,
    description: "Panasonic ErgoFit In-Ear Earbud Headphones RP-HJE120-K (Black) Dynamic Crystal Clear Sound, Ergonomic Comfort-Fit",
    brand: "Panasonic",
    price: "$7.12",
    image: "https://images-na.ssl-images-amazon.com/images/I/31-nuw-iqAL.jpg"},
  { id: 3,
    description: "Bose SoundSport Wireless Headphones, Black",
    brand: "Bose",
    price: "$149.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/61p7oi3BR%2BL._SL1500_.jpg"},
  { id: 4,
    description: "Powerbeats3 Wireless In-Ear Headphone - White",
    brand: "Beats",
    price: "$199.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/31CDuZiqLgL.jpg"},
  { id: 5,
    description: "Plantronics BackBeat Fit Bluetooth Headphones - Blue",
    brand: "Plantronics",
    price: "$84.95",
    image: "https://images-na.ssl-images-amazon.com/images/I/31C%2BG8wjpPL.jpg"},
  { id: 6,
    description: "Bose SoundSport Pulse Wireless Headphones, Power Red",
    brand: "Bose",
    price: "$199.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/61w6LHZGs9L._SL1500_.jpg"},
  { id: 7,
    description: "Beats By Dr. Dre In Ear Head Phones Stereo Headset for HTC, Black",
    brand: "Beats",
    price: "$39.71",
    image: "https://images-na.ssl-images-amazon.com/images/I/614pCdg40KL._SL1500_.jpg"},
  { id: 8,
    description: "Sony MDRXB50AP Extra Bass Earbud Headset (Black)",
    brand: "Sony",
    price: "$27.27",
    image: "https://images-na.ssl-images-amazon.com/images/I/61p1oDWAPUL._SL1200_.jpg"},
  { id: 9,
    description: "Wilson Men's 2015 Ultra Complete Package Golf Set, Standard",
    brand: "Wilson",
    price: "$155.51",
    image: "https://images-na.ssl-images-amazon.com/images/I/517bv3TTfRL._SL1000_.jpg"},
  { id: 10,
    description: "Skullcandy Hesh 2 Bluetooth Wireless Headphones with Mic, Black",
    brand: "Skullcandy",
    price: "$49.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/7197WSYscIL._SL1500_.jpg"},
  { id: 11,
    description: "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
    brand: "Samsung",
    price: "$4.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/31tZplZhyEL.jpg"},
  { id: 12,
    description: "Beats Studio Wireless Over-Ear Headphone - Titanium",
    brand: "Beats",
    price: "$219.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/71Hgw5UEEXL._SL1500_.jpg"},
  { id: 13,
    description: "Sony MDRXB950BT/B Extra Bass Bluetooth Headphones (Black)",
    brand: "Sony",
    price: "$88.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/61WaUPGzeKL._SL1200_.jpg"},
  { id: 14,
    description: "Beats Solo2 Wireless On-Ear Headphone - Black",
    brand: "Bose",
    price: "$149.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/61b8ZEFmCJL._SL1500_.jpg"},
  { id: 15,
    description: "Bose QuietComfort 35 Wireless Headphones, Noise Cancelling - Black",
    brand: "Bose",
    price: "$349.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/61QwytXOcxL._SL1500_.jpg"},
  { id: 16,
    description: "Beats Solo3 Wireless On-Ear Headphone - Rose Gold",
    brand: "Beats",
    price: "$249.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/41YByxxpv0L.jpg"},
  { id: 17,
    description: "Sennheiser RS120 On-Ear Wireless RF Headphones with Charging Dock",
    brand: "Sennheiser",
    price: "$58.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/81NzuWuye9L._SL1500_.jpg"},
  { id: 18,
    description: "Bose SoundTrue around-ear headphones II - Apple devices, Charcoal",
    brand: "Bose",
    price: "$99.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/61l0i5ugsfL._SL1500_.jpg"},
  { id: 19,
    description: "Amazon Fire TV | Streaming Media Player",
    brand: "Amazon",
    price: "$74.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/61jPxT1VThL._SL1000_.jpg"},
  { id: 20,
    description: "Amazon Echo - Black",
    brand: "Amazon",
    price: "$139.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/61kJf5cN0gL._SL1000_.jpg"},
  { id: 21,
    description: "Roku Streaming Stick (3600R)",
    brand: "Roku",
    price: "$39.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/61bqlBDRRML._SL1500_.jpg"},
];

var searchItem = document.getElementById("text");
var searchResults = document.getElementById("products");
var searchResult;
var resultComment;
var resultComments=document.getElementById("outcome");
var logo = document.getElementById("amazon"); //issue2

//when page loads or amazon logo is clicked
function refresh(event) {
  event.preventDefault();
  document.getElementById("text").value = "";
  empty(resultComments);
  empty(searchResults);
  for (var i = 0; i < 20; i++) {
    var randomProduct = Math.floor(Math.random() * products.length);
    var image = renderLoad(products[randomProduct]);
    searchResults.appendChild(image);
  }
  resultComment = "Items to consider";
  resultComment = document.createTextNode(resultComment);
  resultComments.appendChild(resultComment);
}

function renderLoad(product) {
  var imageBox = document.createElement("div");
  imageBox.classList.add("imageBox", product.id);

  var image = document.createElement("img");
  image.classList.add("image", product.id);
  image.setAttribute("src", product.image);

  imageBox.appendChild(image);
  return imageBox;
}

//when item is searched
function listener(event) {
  event.preventDefault();
  searchItem = document.getElementById("text").value; //searched text

  //do nothing if search is empty
  if (!searchItem.trim())
    return;

  empty(resultComments);
  empty(searchResults);

  /*1. compare search text with each array item in jsProducts
    2. if results are true, create div block to add to #products in document
    3. add div to #products in document
    4. if there are any search results, add a div string that states results
    5. if no search results, We found 0 results for "gfsf aes"
  */
  for (var i = 0; i < products.length; i++) {
    if (search(products[i].description, searchItem)) {
      searchResult = renderResult(products[i]);
      searchResults = document.getElementById("products");
      searchResults.appendChild(searchResult);
    }
  }

  if (searchResults.firstChild) {
    resultComment = "Showing most relevant results. See all results for \"" + searchItem + "\".";
    resultComment = document.createTextNode(resultComment);
    resultComments.appendChild(resultComment);
  }
  else {
    resultComment = "Your search \"" + searchItem + "\" did not match any products.";
    resultComment = document.createTextNode(resultComment);
    resultComments.appendChild(resultComment);
  }
  //page is refreshed with same results if search button is pressed again
}

//empties out any elements within element with "product" ID
function empty(searchResults) {
  while (searchResults.firstChild) {
    searchResults.removeChild(searchResults.firstChild);
  }
}

//search function checks to see that each word of the search is contained in an item description
function search(description, searchItem) {
  searchItem = searchItem.toLowerCase();
  searchItem = searchItem.trim();
  var space = " ";
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
<div class="product">
  <div id=imageBox>
    <img class="image" src="link.com"/>
  </div>
  <div class="info">
    <div class="description"></div>
    <div class="brand"></div>
    <div class="price"></div>
  </div>
</div>
*/
  var products = document.createElement("div");
  products.classList.add("product", product.id);

  var imageBox = document.createElement("div");
  imageBox.classList.add("imageBox", product.id);

  var image = document.createElement("img");
  image.classList.add("image", product.id);
  image.setAttribute("src", product.image);

  imageBox.appendChild(image);

  var info = document.createElement("div");
  info.classList.add("info", product.id);

  var description = document.createElement("div");
  description.classList.add("description", product.id);
  description.textContent = product.description;

  var brand = document.createElement("div");
  brand.classList.add("brand", product.id);
  brand.textContent = "by " + product.brand;

  var price = document.createElement("div");
  price.classList.add("price", product.id);
  price.textContent = product.price;

  info.appendChild(description);
  info.appendChild(brand);
  info.appendChild(price);

  products.appendChild(imageBox);
  products.appendChild(info);

  return products;
}

var searchItems = document.getElementById("search");

logo.addEventListener("click", refresh);
window.addEventListener("load", refresh);
searchItems.addEventListener("submit", listener);
