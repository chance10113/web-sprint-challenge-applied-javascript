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

const tabEntryPoint = document.querySelector('.topics')

axios
    .get('https://lambda-times-api.herokuapp.com/topics')
    .then((res) => {
        // console.log('res', res)
        // console.log('res.data', res.data)
        // console.log('res.data.topics', res.data.topics)

        let tabData = res.data.topics
// Tab Making Function
        function tabMaker(tabData) {
        // Create Elements
            const tab = document.createElement('div')
        // Adding Classes
            tab.classList.add('tab')
        // Assigning Content
            tab.innerText = tabData
            tabEntryPoint.appendChild(tab)
        }
// Mapping Through Data
        const tabMap = tabData.map(tabData => {
            return tabMaker(tabData)
        })
        
    })
    .catch((error) => {
        console.log('Tab Axios Broke', error)
    })
    //Gonna need to create a var for res.data, 
    //then feed it through a forEach(?), then append all to entry