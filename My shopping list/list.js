let listArray = [];
const inputthetext = document.getElementById('inputthetext');
const addbutton = document.getElementById('addbutton');
const listshere = document.getElementById('listshere');
const deletebutton = document.getElementById('deleteallbutton');

let savethedatetolocal = JSON.parse(localStorage.getItem('listArray'));
if(savethedatetolocal){
  listArray = savethedatetolocal
  renderitems()
};

deletebutton.addEventListener('click', function(){
  localStorage.clear();
  listArray = [];
  renderitems()
})

addbutton.addEventListener('click', function(){
  if(invalidinput()){
  listArray.push(inputthetext.value);
  inputthetext.value = '';
  localStorage.setItem('listArray', JSON.stringify(listArray));
  renderitems();
}

})


inputthetext.addEventListener('keyup', (e) => {
  if(e.key === 'Enter' && invalidinput()){
  listArray.push(inputthetext.value);
  inputthetext.value = '';
  localStorage.setItem('listArray', JSON.stringify(listArray));
  renderitems();
}
})

function renderitems(){
  let listitems = '';
  for (let i = 0; i < listArray.length; i++) {
    listitems += `<li>${listArray[i]}: 
  <a target='_blank' href=https://shop.countdown.co.nz/shop/searchproducts?search=${listArray[i]}>
  Countdown</a>   <a target='_blank' href=https://www.paknsave.co.nz/shop/Search?q=${listArray[i]}>Pak n Save</a>   <a target='_blank' href=https://www.newworld.co.nz/shop/Search?q=${listArray[i]}>New World</a> 
  </li><br>`;
} listshere.innerHTML = listitems;
}


function invalidinput(){
  return inputthetext.value !== '';
}

{/* <button id="deleteitem">X</button> */}