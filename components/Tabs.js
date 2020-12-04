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
// let tabData = [];
axios
.get('https://lambda-times-api.herokuapp.com/topics')
.then(res => {
    let tabData = res.data.topics;
   //const newTab = newTabMaker(tabData)
   function newTabMaker(tabData){
    const tab = document.createElement('div');
   tab.classList.add('tab')
   tab.innerText = tabData
//    tab.innerHTML = (`<div class =tab>${tabData}</div>`)
     entryPointTab.appendChild(tab)
}

    tabData.map(tabData => {
    console.log("SNUNEUEUEP")
     return newTabMaker(tabData)
 });

   
//   tabData.forEach(element => {
//         console.log("SNUNEUEUEP")

//          return newTabMaker(tabData)
//      });
//     const newTab = tabData.forEach(((tabData) => {
//         console.log("STEUMP")
//         return newTabMaker(tabData);
//     }))

//     newTab.array.forEach(tabData => {
//         entryPointTab.appendChild(tabData)
//     });
//     placeHolder.forEach((element) => {
//         entryPointTab.appendChild(element)
//     })

    // console.log("Git-Info", tabData)
    // console.log('entry', entryPointTab)
    // console.log('test', tabData[0])
   // console.log('Tab function' , newTab(data))
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

 

//   axios
// .get('https://lambda-times-api.herokuapp.com/topics')
// .then(res => {
//     let tabData = res.data.topics;
//     let tabData0 = res.data.topics[0]
//    //const newTab = newTabMaker(tabData)
//    function newTabMaker(tabData0){
//     const tab = document.createElement('div');
//    tab.classList.add('tab')
//    tab.innerText = tabData0
// //    tab.innerHTML = (`<div class =tab>${tabData}</div>`)
//      entryPointTab.appendChild(tab)
// }

//     tabData.map(tabData0 => {
//     console.log("SNUNEUEUEP")
//      return newTabMaker(tabData0)
//  });
//  console.log("Git-Info", tabData0)
//  console.log('entry', entryPointTab)
//  console.log('test', tabData[0,1])
// // console.log('Tab function' , newTab(data))
//  // response.forEach((tabInfo) => {
//  //   const tab = document.createElement('div');
//  //    tab.classList.add('tab')
//  //    tab.innerText = 'Steve'
//  //   entryPointTab.appendChild(tab) 
//  // })
// })
// .catch(beef => {
//  console.log(beef)
// })
