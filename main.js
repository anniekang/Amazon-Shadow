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
  { description: "Wilson Men's 2015 Ultra Complete Package Golf Set, Standard",
    brand: "Wilson",
    price: "$155.51",
    image: "https://images-na.ssl-images-amazon.com/images/I/517bv3TTfRL._SL1000_.jpg"},
  { description: "Skullcandy Hesh 2 Bluetooth Wireless Headphones with Mic, Black",
    brand: "Skullcandy",
    price: "$49.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/7197WSYscIL._SL1500_.jpg"},
  { description: "Samsung 3.5mm Stereo Headset for Galaxy S5, S4, S3, Note - Non-Retail Packaging - White",
    brand: "Samsung",
    price: "$4.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/31tZplZhyEL.jpg"},
  { description: "Beats Studio Wireless Over-Ear Headphone - Titanium",
    brand: "Beats",
    price: "$219.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/71Hgw5UEEXL._SL1500_.jpg"},
  { description: "Sony MDRXB950BT/B Extra Bass Bluetooth Headphones (Black)",
    brand: "Sony",
    price: "$88.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/61WaUPGzeKL._SL1200_.jpg"},
  { description: "Beats Solo2 Wireless On-Ear Headphone - Black",
    brand: "Bose",
    price: "$149.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/61b8ZEFmCJL._SL1500_.jpg"},
  { description: "Bose QuietComfort 35 Wireless Headphones, Noise Cancelling - Black",
    brand: "Bose",
    price: "$349.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/61QwytXOcxL._SL1500_.jpg"},
  { description: "Beats Solo3 Wireless On-Ear Headphone - Rose Gold",
    brand: "Beats",
    price: "$249.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/41YByxxpv0L.jpg"},
  { description: "Sennheiser RS120 On-Ear Wireless RF Headphones with Charging Dock",
    brand: "Sennheiser",
    price: "$58.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/81NzuWuye9L._SL1500_.jpg"},
  { description: "Bose SoundTrue around-ear headphones II - Apple devices, Charcoal",
    brand: "Bose",
    price: "$99.00",
    image: "https://images-na.ssl-images-amazon.com/images/I/61l0i5ugsfL._SL1500_.jpg"},
  { description: "Amazon Fire TV | Streaming Media Player",
    brand: "Amazon",
    price: "$74.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/61jPxT1VThL._SL1000_.jpg"},
  { description: "Amazon Echo - Black",
    brand: "Amazon",
    price: "$139.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/61kJf5cN0gL._SL1000_.jpg"},
  { description: "Roku Streaming Stick (3600R)",
    brand: "Roku",
    price: "$39.99",
    image: "https://images-na.ssl-images-amazon.com/images/I/61bqlBDRRML._SL1500_.jpg"},
];

var jsSearch = document.getElementById("search");
var jsText = document.getElementById("text");
var jsResults = document.getElementById("products");
var jsResult;
var jsString;
var jsResultString=document.getElementById("outcome");
var jsResultStringText;

function listener(event) {
  event.preventDefault();
  jsText = document.getElementById("text").value; //searched text

  //do nothing if search is empty
  if (!jsText.trim())
    return;

  empty(jsResultString);
  empty(jsResults);

  /*1. compare search text with each array item in jsProducts
    2. if results are true, create div block to add to #products in document
    3. add div to #products in document
    4. if there are any search results, add a div string that states results
    5. if no search results, We found 0 results for "gfsf aes"
  */
  for (var i = 0; i < jsProducts.length; i++) {
    if (search(jsProducts[i].description, jsText)) {
      jsResult = renderResult(i,jsProducts[i]);
      jsResults = document.getElementById("products");
      jsResults.appendChild(jsResult);
    }
  }

    if (jsResults.firstChild) {
      jsString = "Showing most relevant results. See all results for \"" + jsText + "\".";
      jsResultStringText = document.createTextNode(jsString);
      jsResultString.appendChild(jsResultStringText);
    }
    else {
      jsString = "Your search \"" + jsText + "\" did not match any products.";
      jsResultStringText = document.createTextNode(jsString);
      jsResultString.appendChild(jsResultStringText);
    }
  //page is refreshed with same results if search button is pressed again
}

jsSearch.addEventListener("submit", listener);

//empties out any elements within element with "product" ID
function empty(jsResults) {
  while (jsResults.firstChild) {
    jsResults.removeChild(jsResults.firstChild);
  }
}

//returns whether searched text matches with jsProducts[i]
//search function checks to see that each word of the search is contained in an item description
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

function renderResult(i, product) {
/*
<div class="product">
  <img class="image" src="link.com"/>
  <div class="info">
    <div class="description"></div>
    <div class="brand"></div>
    <div class="price"></div>
  </div>
</div>
*/

var jsProduct2 = document.createElement("div");
jsProduct2.classList.add("product", i);

var jsImage = document.createElement("img");
jsImage.classList.add("image", i);
jsImage.setAttribute("src", product.image);

var jsInfo = document.createElement("div");
jsInfo.classList.add("info", i);

var jsDescription = document.createElement("div");
jsDescription.classList.add("description", i);
jsDescription.textContent = product.description;

var jsBrand = document.createElement("div");
jsBrand.classList.add("brand", i);
jsBrand.textContent = "by " + product.brand;

var jsPrice = document.createElement("div");
jsPrice.classList.add("price", i);
jsPrice.textContent = product.price;

jsInfo.appendChild(jsDescription);
jsInfo.appendChild(jsBrand);
jsInfo.appendChild(jsPrice);

jsProduct2.appendChild(jsImage);
jsProduct2.appendChild(jsInfo);

return jsProduct2;
}

/*
eventListener on clicking products
event.target
*/
