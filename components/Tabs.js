// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element
const entryPointTab = document.querySelector('.title')
axios
.get('https://lambda-times-api.herokuapp.com/topics')
.then(res => {
    const data = res.data;
    const response = res;
    function newTab(tabObj){
        const tab = document.createElement('div');
       tab.classList.add('tab')
       tab.innerText = 'Steve'
      entryPointTab.appendChild(tab) 
    }
    // const placeHolder = data.map((data) => {
    //     return newTab(data);
    // })

    // placeHolder.forEach((placeHolder) => {
    //     entryPointTab.appendChild(placeHolder)
    // })

    console.log("Git-Info", data)
    console.log('Response', response)
    console.log('Tab function' , newTab(data))
    // response.forEach((tabInfo) => {
    //   const tab = document.createElement('div');
    //    tab.classList.add('tab')
    //    tab.innerText = 'Steve'
    //   entryPointTab.appendChild(tab) 
    // })
})
.catch(beef => {
    console.log(beef)
  })