var jsProducts = [
  { description: "Bose QuietComfort 20 Acoustic Noise Cancelling Headphones, Apple Devices, Black",
    brand: "Bose",
    price: "$199.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/6162wKNVC7L._SX425_.jpg"},
  { description: "Panasonic ErgoFit In-Ear Earbud Headphones RP-HJE120-K (Black) Dynamic Crystal Clear Sound, Ergonomic Comfort-Fit",
    brand: "Panasonic",
    price: "$7.12",
    image: "https://images-na.ssl-images-amazon.com/images/I/31-nuw-iqAL.jpg"},
  { description: "Bose SoundSport Wireless Headphones, Black",
    brand: "Bose",
    price: "$149.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/61p7oi3BR%2BL._SL1500_.jpg"},
  { description: "Powerbeats3 Wireless In-Ear Headphone - White",
    brand: "Beats",
    price: "$199.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/31CDuZiqLgL.jpg"},
  { description: "Plantronics BackBeat Fit Bluetooth Headphones - Blue",
    brand: "Plantronics",
    price: "$84.95",
    image: "https://images-na.ssl-images-amazon.com/images/I/31C%2BG8wjpPL.jpg"},
  { description: "Bose SoundSport Pulse Wireless Headphones, Power Red",
    brand: "Bose",
    price: "$199.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/61w6LHZGs9L._SL1500_.jpg"},
  { description: "Beats By Dr. Dre In Ear Head Phones Stereo Headset for HTC, Black",
    brand: "Beats",
    price: "$39.71",
    image: "https://images-na.ssl-images-amazon.com/images/I/614pCdg40KL._SL1500_.jpg"},
  { description: "Sony MDRXB50AP Extra Bass Earbud Headset (Black)",
    brand: "Sony",
    price: "$27.27",
    image: "https://images-na.ssl-images-amazon.com/images/I/61p1oDWAPUL._SL1200_.jpg"},
];

var jsSearch = document.getElementById("search");
var jsText;
var jsResults;
var jsResult;

function listener(event) {
  event.preventDefault();
  jsText = document.getElementById("text").value; //searched text

  //do nothing if search is empty
  if (!jsText.trim()) return;

  jsResults = document.getElementById("products");
  empty(jsResults);

  /*1. compare search text with each array item in jsProducts
    2. if results are true, create div block to add to #products in document
    3. add div to #products in document
    4. if there are any search results, add a div string that states results
    5. if no search results, We found 0 results for "gfsf aes"
  */
  for (var i = 0; i < jsProducts.length; i++) {
    if (search(jsProducts[i].description, jsText)) {
      jsResult = renderResult(jsProducts[i]);
      jsResults = document.getElementById("products");
      jsResults.appendChild(jsResult);
    }
  }
    if (jsResults.firstChild) {
      var jsString = "Showing most relevant results. See all results for \"" + jsText + "\".";
      var jsResultString = document.getElementById("outcome");
      var jsResultStringText = document.createTextNode(jsString);
      jsResultString.appendChild(jsResultStringText);
    }
    else {
      var jsString2 = "Your search \"" + jsText + "\" did not match any products.";
      var jsResultString2 = document.getElementById("outcome");
      var jsResultStringText2 = document.createTextNode(jsString2);
      jsResultString2.appendChild(jsResultStringText2);
    }
  //page is refreshed with same results if search button is pressed again
}

jsSearch.addEventListener("submit", listener);
//add EventListener on keying return after typing in a search

//empties out any elements within element with "product" ID
function empty(jsResults) {
  while (jsResults.firstChild) {
    jsResults.removeChild(jsResults.firstChild);
  }
}

//returns whether searched text matches with jsProducts[i]
function search(description, jsText) {
  jsText = jsText.toLowerCase();
  jsText = jsText.trim();
  var space = " ";
  var tempStringArray = splitString(jsText, space);
  var tempProducts = description.toLowerCase();
  for (var k = 0; k < tempStringArray.length; k++) {
    if (tempProducts.indexOf(tempStringArray[k]) < 0) {
      return false;
    }
  }
  return true;
}

//splits string into an array of strings using specified separator
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);
  return arrayOfStrings;
}

function renderResult(product) {
/*
<div class="product">
  <div class="ImageDiv"><img class="png" src="link.com"/></div>
  <div class="info">
    <div class="description"></div>
    <div class="brand"></div>
    <div class="price"></div>
  </div>
</div>
*/

var jsProduct2 = document.createElement("div");
jsProduct2.classList.add("product");

var jsImageDiv = document.createElement("div");
jsImageDiv.classList.add("image");

var jsImage = document.createElement("img");
jsImage.classList.add("png");
jsImage.setAttribute("src", product.image);

jsImageDiv.appendChild(jsImage);

var jsInfo = document.createElement("div");
jsInfo.classList.add("info");

var jsDescription = document.createElement("div");
jsDescription.classList.add("description");
jsDescription.textContent = product.description;

var jsBrand = document.createElement("div");
jsBrand.classList.add("brand");
jsBrand.textContent = product.brand;

var jsPrice = document.createElement("div");
jsPrice.classList.add("price");
jsPrice.textContent = product.price;

jsInfo.appendChild(jsDescription);
jsInfo.appendChild(jsBrand);
jsInfo.appendChild(jsPrice);

jsProduct2.appendChild(jsImageDiv);
jsProduct2.appendChild(jsInfo);

return jsProduct2;
}
