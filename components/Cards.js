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


axios
.get('https://lambda-times-api.herokuapp.com/articles')
.then((res => {
const cardAxiosInfo = res.data;
function newCardMaker(cardAxiosInfo){
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
    // ARTICLE = PLACEHOLDER
headLine.innerText = cardAxiosInfo.articles.bootstrap.headline
author.innerText = cardAxiosInfo.authorName
img.innerHtml = cardAxiosInfo.authorPhoto
authorSpan.innerText = cardAxiosInfo.authorName
    //stitch it together
entryPointCards.appendChild(card);
card.appendChild(headLine);
card.appendChild(author);
author.appendChild(imgContainer);
imgContainer.appendChild(img);
author.appendChild(authorSpan);
//eventListener
card.addEventListener('click', function(){
    console.log('article.headline')
})
return card
}
newCard = newCardMaker(cardAxiosInfo);
console.log("res.data",cardAxiosInfo)
console.log("res.data.articles",cardAxiosInfo.articles)
console.log("res.data.articles.bootstrap",cardAxiosInfo.articles.bootstrap)
}))
.catch(beef => {
    console.log('ERROR', beef)
  })

const entryPointCards = document.querySelector('.cards-container');

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