/* <input type="text" id="inputthetext" placeholder="fill the item here">
<button id="addbutton">+</button>
<div id="listshere"></div> */

const inputthetext = document.getElementById('inputthetext');
const addbutton = document.getElementById('addbutton');
const listshere = document.getElementById('listshere');
const deleteitem = document.getElementById('deleteitem')


let listArray = [];

addbutton.addEventListener('click', function(){
  if(invalidinput()){
  listArray.push(inputthetext.value);
  inputthetext.value = '';
  renderitems();
}

})


inputthetext.addEventListener('keyup', (e) => {
  if(e.key === 'Enter' && invalidinput()){
  listArray.push(inputthetext.value);
  inputthetext.value = '';
  renderitems();
}
})

function renderitems(){
  let listitems = '';
  for (let i = 0; i < listArray.length; i++) {
    listitems += `<li>${listArray[i]}--- 
  <a target='_blank' href=https://shop.countdown.co.nz/shop/searchproducts?search='${listArray[i]}'>
  Countdown</a> / <a target='_blank' href=https://www.paknsave.co.nz/shop/Search?q='${listArray[i]}'>Pak n Save</a> / <a target='_blank' href=https://www.newworld.co.nz/shop/Search?q='${listArray[i]}'>New World</a> 
  </li>`;
    listshere.innerHTML = listitems;}
}


function invalidinput(){
  return inputthetext.value !== '';
}

{/* <button id="deleteitem">X</button> */}