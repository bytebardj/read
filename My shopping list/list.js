let listLeads = [];
const inputthetext = document.getElementById('inputthetext');
const addbutton = document.getElementById('addbutton');
const listshere = document.getElementById('listshere');
const deletebutton = document.getElementById('deleteallbutton');
const savetab = document.getElementById('save-tab');


savetab.addEventListener('click',function(){
  if(invalidinput()){
    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
      listLeads.push(tabs[0].url);
      inputthetext.value = '';
      localStorage.setItem('listLeads', JSON.stringify(listLeads));
      render(listLeads);
    })

  }
})

let savethedatetolocal = JSON.parse(localStorage.getItem('listLeads'));
if(savethedatetolocal){
  listLeads = savethedatetolocal
  render(listLeads)
};

function render(something){
  let listitems = '';
  for (let i = 0; i < something.length; i++) {
    listitems += `<li>${something[i]}: 
  <a target='_blank' href=https://shop.countdown.co.nz/shop/searchproducts?search=${something[i]}>
  Countdown</a>   <a target='_blank' href=https://www.paknsave.co.nz/shop/Search?q=${something[i]}>Pak n Save</a>   <a target='_blank' href=https://www.newworld.co.nz/shop/Search?q=${something[i]}>New World</a> 
  </li><br>`;
} listshere.innerHTML = listitems;
}

deletebutton.addEventListener('click', function(){
  localStorage.clear();
  listLeads = [];
  render(listLeads)
})

addbutton.addEventListener('click', function(){
  if(invalidinput()){
  listLeads.push(inputthetext.value);
  inputthetext.value = '';
  localStorage.setItem('listLeads', JSON.stringify(listLeads));
  render(listLeads);
}

})


inputthetext.addEventListener('keyup', (e) => {
  if(e.key === 'Enter' && invalidinput()){
  listLeads.push(inputthetext.value);
  inputthetext.value = '';
  localStorage.setItem('listLeads', JSON.stringify(listLeads));
  render(listLeads);
}
})


function invalidinput(){
  return inputthetext.value !== '';
}

{/* <button id="deleteitem">X</button> */}