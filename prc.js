

// let fruit = ['apple','orange','apple','apple','orange'];
// let appleonit = document.getElementById('apple-shelf');
// let orangeonit = document.getElementById('orange-shelf');

// function fruitselection(){
//   for (let i = 0; i < fruit.length; i++) {
//     if (fruit[i] === 'apple'){
//       appleonit.textContent += ' apple';
//     } else if (fruit[i] === 'orange') {
//       orangeonit.textContent += ' orange'
//     }
// };
// }

// fruitselection()

// // appleonit.textContent = fruit[0] + ' ' + fruit[2] + ' ' + fruit[3];
// // orangeonit.textContent = fruit[1] + ' ' + fruit[4];
const mybuybutton = document.getElementById('container');
const thankyouhere = document.getElementById('thankyouhere');
let myLeads = [];
const ulEl = document.getElementById('ul-el');

const showsaved = document.getElementById('showsavedarea');
const inputbutton = document.getElementById('input-btn');
const inputtext = document.getElementById('input-el');


inputbutton.addEventListener('click', function(){
  if(invalidinput()){
  myLeads.push(inputtext.value)
  inputtext.value = '';
  renderLeads();
}
})


inputtext.addEventListener('keyup', (e) => {
  if(e.key === 'Enter' && invalidinput() ){
    myLeads.push(inputtext.value)
    inputtext.value = '';
  renderLeads();
  }
});


function renderLeads(){
  let listItems = '';

for (let i = 0; i < myLeads.length; i++) {
  // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>"
  listItems += `
  <li>
  <a target='_blank' href=https://shop.countdown.co.nz/shop/searchproducts?search='${myLeads[i]}'>
  Search [ ${myLeads[i]} ] at Countdown supermarket
  </a>
  </li>`
}
ulEl.innerHTML = listItems;
}

function invalidinput(){
  return inputtext.value !== '';
}