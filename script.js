let contentGridElement = document.getElementById('contentGrid');
let contentGridElement2 = document.getElementById('contentGrid2');
let contentGridElement3 = document.getElementById('contentGrid3');


let chesterCheeto = {
	"title" : "Chester Cheetah",
	"size" : "400px",
	"font-size" : "15px",
	"border" : "5px solid #000",
	"padding" : "0px 1em 0px 1em",
	"bio": "The Cheetos brand is commonly recognized by association with its second and current mascot, an anthropomorphic sly, smooth-voiced cartoon cheetah named Chester Cheetah.",
	"quotes" : ["It's not easy being cheesy.", "The cheese that goes crunch!", "Dangerously cheesy!", "It's Cheetos or nothing."],
	"picture_url" : "https://upload.wikimedia.org/wikipedia/en/e/ea/Chester_Cheetah.png",
	"font" : "Papyrus",
	"color" : "#FFA500"
}

let charlesCheese = {
	"title" : "Chuck E. Cheese",
	"size" : "400px",
	"font-size" : "15px",
	"border" : "5px solid #000",
	"padding" : "0px 1em 0px 1em",
	"bio" : "Charles Entertainment Cheese, or Chuck E. Cheese for short, is the mascot of the Chuck E. Cheese chain of family entertainment centers. From 1977 to 1992 he was an anthropomorphic rat, changing to a mouse in 1993. In 2012, he was rebranded into a slimmer, Rockstar-themed version as a response to a decrease in sales during 2011.",
	"quotes" : ["Where a kid can be a kid!", "Help me.", "The Great All-American Pizza Show!", "Smile America.", "When you're hungry for fun!"],
	"picture_url" : "https://static.wikia.nocookie.net/chucke/images/d/d9/Rockstar2012.png/revision/latest?cb=20221204180243",
	"font" : "Helvetica",
	"color" : "#FFFF00"
}

let tonyTiger = {
	"title" : "Tony the Tiger",
	"size" : "400px",
	"font-size" : "15px",
	"border" : "5px solid #000",
	"padding" : "0px 1em 0px 1em",
	"bio" : "Tony the Tiger is the advertising cartoon anthropomorphic tiger mascot for Frosted Flakes (also known as Frosties) breakfast cereal, appearing on its packaging and advertising.",
	"quotes" : ["They're gr-r-reat!", "Put a Tiger on Your Team!", "There is a Tony the Tiger inside of all of us just waiting to be unleashed."],
	"picture_url" : "https://www.missiontiger.com/content/NorthAmerica/mission-tiger/en_US/pages/whysportsmatter/jcr:content/gridSystem/par/tony-tile/par/responsiveimage.img.png/1603863248442.png",
	"font" : "Times New Roman",
	"color" : "#ADD8E6"
}

// var randomIndex = Math.floor(Math.random() * chesterCheeto["quotes"].length);
// var randomIndex2 = Math.floor(Math.random() * charlesCheese["quotes"].length);
var randomIndex3 = Math.floor(Math.random() * tonyTiger["quotes"].length);

createElementChester()
createElementCharles()
createElementTony()

function createElementChester() {

  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = chesterCheeto['color'];
  newContentElement.style.fontFamily = chesterCheeto['font'];
  newContentElement.style.height = chesterCheeto['size']
  newContentElement.style.width = chesterCheeto['size']
  newContentElement.style.fontSize = chesterCheeto['font-size']
  newContentElement.style.border = chesterCheeto['border']
  newContentElement.style.padding = chesterCheeto['padding']
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = chesterCheeto['title'];
  newContentElement.appendChild(newContentHeading);

  let newContentSubhead = document.createElement("H4");
  var randomIndex = Math.floor(Math.random() * chesterCheeto["quotes"].length);
  newContentSubhead.innerText = chesterCheeto["bio"] + " One of his catchphrases is '" + chesterCheeto["quotes"][randomIndex] + "'";
  newContentElement.appendChild(newContentSubhead);

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = chesterCheeto['picture_url'];
  newContentElement.appendChild(newImage);

  contentGridElement.appendChild(newContentElement);

}

function createElementCharles() {

  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = charlesCheese['color'];
  newContentElement.style.fontFamily = charlesCheese['font'];
   newContentElement.style.height = charlesCheese['size']
  newContentElement.style.width = charlesCheese['size']
  newContentElement.style.fontSize = charlesCheese['font-size']
  newContentElement.style.border = charlesCheese['border']
  newContentElement.style.padding = charlesCheese['padding']
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = charlesCheese['title'];
  newContentElement.appendChild(newContentHeading);

  let newContentSubhead = document.createElement("H4");
  var randomIndex2 = Math.floor(Math.random() * charlesCheese["quotes"].length);
  newContentSubhead.innerText = charlesCheese["bio"] + " One of his catchphrases is '" + charlesCheese["quotes"][randomIndex2] + "'";
  newContentElement.appendChild(newContentSubhead);

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = charlesCheese['picture_url'];
  newContentElement.appendChild(newImage);

  contentGridElement2.appendChild(newContentElement);

}

function createElementTony() {

  let newContentElement = document.createElement("DIV");
  newContentElement.style.backgroundColor = tonyTiger['color'];
  newContentElement.style.fontFamily = tonyTiger['font'];
  newContentElement.style.height = tonyTiger['size']
  newContentElement.style.width = tonyTiger['size']
  newContentElement.style.fontSize = tonyTiger['font-size']
  newContentElement.style.border = tonyTiger['border']
   newContentElement.style.padding = tonyTiger['padding']
  newContentElement.classList.add('contentItem');

  let newContentHeading = document.createElement("H3");
  newContentHeading.classList.add('contentTitle');
  newContentHeading.innerText = tonyTiger['title'];
  newContentElement.appendChild(newContentHeading);

  let newContentSubhead = document.createElement("H4");
  var randomIndex3 = Math.floor(Math.random() * tonyTiger["quotes"].length);
  newContentSubhead.innerText = tonyTiger["bio"] + " One of his catchphrases is '" + tonyTiger["quotes"][randomIndex3] + "'";
  newContentElement.appendChild(newContentSubhead);

  let newImage = document.createElement("IMG");
  newImage.classList.add("footerImage");
  newImage.src = tonyTiger['picture_url'];
  newContentElement.appendChild(newImage);

  contentGridElement3.appendChild(newContentElement);

}