const cards = ["queen", "queen", "king", "king"];

const cardsInPlay = [];

const cardOne = cardsInPlay[0];
const cardTwo = cardsInPlay[1];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
 	console.log("You found a match!");
 } else {
 	console.log("Sorry try again.");
 }	
}

function flipCard(cardId) {
cardsInPlay.push(cards[cardId]);
console.log("User flipped " + cards[cardId]);
}

if (cardsInPlay.length === 2){
	checkForMatch();
}

flipCard(0);
flipCard(2);
checkForMatch ();



