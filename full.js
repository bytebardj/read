
let cards = [];
let sum = 0;
let hastheblackjack = false;
let isAlive = false;
let message = '';
let words = document.getElementById('message-el');
let sumEl = document.getElementById('sum-el');
let cardsEL = document.getElementById('cards-el');
let player = {
  nameis:'Player',
  BetWorth:10
};
let cashdisplayhere = document.getElementById('cashdisplay');

let playerEL = document.getElementById('player-el');

playerEL.textContent = player.nameis + " $ " + ' - Each Game Worth $10';


function getr(){
  let randomthenumber =  Math.floor((Math.random())*13 +1 );
 if ( randomthenumber > 10) {
  return 10;
 }
  else if ( randomthenumber === 1) {
    return 11;

} else { 
return randomthenumber;
}
}

function startgame() {
  isAlive = true;
  let firstCard = getr();
  let secondCard = getr();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  rendergame()
}

function rendergame() {
  let cashplus = '';
  let cashsubtract = '';
  cardsEL.textContent = 'Cards:';
  for (let i = 0; i < cards.length; i++) {
    cardsEL.textContent += cards[i] + ' ';
  }
  sumEl.textContent = 'Sum:' + sum;
  if (sum <= 20) {
    message = 'Do you want to draw a new card?'

} else if ( sum === 21) {
    message = 'wow Blackjack'
    cashplus = 10;
    hastheblackjack = true;



  } else { 
  message = "You're out of the game!" 
  cashsubtract += -10;
  isAlive = false;


} words.textContent = message;
cashdisplayhere.textContent = cashplus + cashsubtract;

};

function newcard(){
  if (isAlive === true && hastheblackjack === false ) {
    let card = getr();
    sum += card;
    cards.push(card);
    rendergame();

} 
}

// function toshowthecash(){

//   if (condition) {
    
//   } else {
    
//   }
// }