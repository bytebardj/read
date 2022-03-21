let myLeads = [];
const inputtext = document.getElementById('input-el');
const inputbutton = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');
const showsaved = document.getElementById('showsavedarea');
const deletebutton = document.getElementById('delete-btn');
/*
let abc = `["www.1.com"]`;
abc = JSON.parse(abc)  // array to string
abc.push("www.2.com") //push
abc = JSON.stringify(abc); // array to string
console.log(typeof abc) // verify it's a string
*/

let saveddata = JSON.parse(localStorage.getItem('myLeads'));
if(saveddata) {
  myLeads = saveddata
  renderLeads()
}

deletebutton.addEventListener('click', function(){
  localStorage.clear();
  myLeads = [];
  renderLeads();
})


inputbutton.addEventListener('click', function(){
  if(invalidinput()){
  myLeads.push(inputtext.value)
  inputtext.value = '';
  localStorage.setItem('myLeads', JSON.stringify(myLeads));
  renderLeads();
 }
})


inputtext.addEventListener('keyup', (e) => {
  if(e.key === 'Enter' && invalidinput() ){
    myLeads.push(inputtext.value)
    inputtext.value = '';
    localStorage.setItem('myLeads', JSON.stringify(myLeads));
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