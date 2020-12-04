// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
const entryPointCards = document.querySelector('.cards-container');

axios
.get('https://lambda-times-api.herokuapp.com/articles')
.then((res => {
const cardAxiosInfo = res.data.articles;
let bootStrap = (cardAxiosInfo.bootstrap)
//let newCard = newCardMaker(bootStrap);
let javaScript = cardAxiosInfo.javascript
let tech = cardAxiosInfo.technology
let jq = cardAxiosInfo.jquery
let Node = cardAxiosInfo.node

const javaScriptElements = javaScript.map((javascript) => {
    return newCardMaker(javascript)
})

const bootStrapElements = bootStrap.map((bootstrap) => {
    return newCardMaker(bootstrap)
})

const technologyElements = tech.map((technology) => {
    return newCardMaker(technology)
})

const jqElements = jq.map((jquery) => {
    return newCardMaker(jquery)
})

const NodeElements = Node.map((node) => {
    return newCardMaker(node)
})
// newCard.forEach(bootStrap => {
//     return newCardMaker(bootStrap)
// });
console.log("res.data",cardAxiosInfo)
console.log("res.data.articles",cardAxiosInfo)
console.log("res.data.articles.bootstrap",cardAxiosInfo.bootstrap[0].headline)
console.log("res.data.articlesARRAY",cardAxiosInfo)
}))
.catch(beef => {
    console.log('ERROR', beef)
  })

  function newCardMaker(cardObj){
    //creating Elenments
const card = document.createElement('div');
const headLine = document.createElement('div');
const author = document.createElement('div');
const imgContainer = document.createElement('div');
const img = document.createElement('img');
const authorSpan = document.createElement('span');
    // adding Classes
card.classList.add('card');
headLine.classList.add('headline');
author.classList.add('author');
imgContainer.classList.add('img-container');
    //Adding Content
    // TRY WRITING A MAP/FOREACH FOR BOOTSTRAP/JAVASCRIPT/ETC INDIVIDUAL-LIKE
headLine.innerText =  cardObj.headline  //cardAxiosInfo.bootstrap[0].headline
author.innerText =  cardObj.authorName  //cardAxiosInfo.bootstrap[0].authorName
img.src = cardObj.authorPhoto   //cardAxiosInfo.bootstrap[0].authorPhoto
authorSpan.innerText = cardObj.authorName  // cardAxiosInfo.bootstrap[0].authorName
    //stitch it together
entryPointCards.appendChild(card);
card.appendChild(headLine);
card.appendChild(author);
author.appendChild(imgContainer);
imgContainer.appendChild(img);
author.appendChild(authorSpan);
//eventListener
card.addEventListener('click', function(){
    console.log(cardobj.headline)//cardAxiosInfo.headline)
})
return card
}

// function newCardMaker(cardAxiosInfo){
//     //creating Elenments
// const card = document.createElement('div');
// const headLine = document.createElement('div');
// const author = document.createElement('div');
// const imgContainer = document.createElement('div');
// const img = document.createElement('img');
// const authorSpan = document.createElement('span');
//     // adding Classes
// card.classList.add('card');
// headLine.classList.add('headline');
// author.classList.add('author');
// imgContainer.classList.add('img-container');
//     //Adding Content
//     // ARTICLE = PLACEHOLDER
// headLine.innerText = 'articles.headline'
// author.innerText = 'articles.authorName'
// img.innerHtml = 'articles.authorPhoto'
// authorSpan.innerText = 'articles.authorName'
//     //stitch it together
// entryPointCards.appendChild(card);
// card.appendChild(headLine);
// card.appendChild(author);
// author.appendChild(imgContainer);
// imgContainer.appendChild(img);
// author.appendChild(authorSpan);
// //eventListener
// card.addEventListener('click', function(){
//     console.log('article.headline')
// })
// return card
// }
// console.log('steve', newCardMaker())