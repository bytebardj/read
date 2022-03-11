// let numberhere = document.querySelectorAll('#numbershowing');

let numberhere = document.getElementById('numbershowing');

let savednumberhere = document.getElementById('rollednumber');

let numbercounting = 0;

function letisroll() {
  numbercounting = Math.floor((Math.random() * 37) + 0) || 'OO';
  numberhere.textContent = numbercounting;

  let tosaveit = numbercounting + ' - ';
  savednumberhere.textContent += tosaveit;
}