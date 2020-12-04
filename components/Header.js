// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const entryPointHeader = document.querySelector('.header-container');

function Header() {
//creating header elements
    const headerDiv = document.createElement('div');
    const headDate = document.createElement('span');
    const headH1 = document.createElement('h1');
    const headTemp = document.createElement('span');
//applying classes
    headerDiv.classList.add('header');
    headDate.classList.add('date');
    headTemp.classList.add('temp');
//adding content;
    headDate.innerText = 'MARCH 28, 2020';
    headH1.innerText = 'Lambda Times';
    headTemp.innerText = '98°';
 //stitching it all together
    entryPointHeader.appendChild(headerDiv);
    headerDiv.appendChild(headDate);
    headerDiv.appendChild(headH1);
    headerDiv.appendChild(headTemp);
//DONT FORGET TO RETURN THIS TIME!

    return headerDiv;

}
console.log(Header())
