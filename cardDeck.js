// card creation function
function Card(suit, rank){
	this.suit = suit
	this.rank = rank
}

// function that displays the card value.
Card.prototype.print = function(){
	var suits = ["Hearts", "Diamonds", "Clubs", "Spades"]
	var ranks = {
		1: "Ace",
		11: "Jack",
		12: "Queen",
		13: "King"
	}

//
	if(this.rank >= 2 && this.rank <= 10){
		return `${this.rank} of ${suits[this.suit]}`
	} else {
		return `${ranks[this.rank]} of ${suits[this.suit]}`
	}
}

// creates empty array.  Populates with nested for loop to cycle
// through each of the (4) suits and each of the (13) cards.
function Deck(){
	var deck = []

	for(var suit=0; suit<4;suit++){
		for(var rank=1; rank<=13; rank++){
			deck.push(new Card(suit, rank))
		}
	}


	this.shuffle = function(){
		for(var card = 0; card < deck.length; card++){
      // expression returns rounded random num * length of deck = 52
			var other = Math.floor(Math.random() * deck.length)
      // set temp var to be the card in the deck at 'i' which is 'card'
			var temp = deck[card]
      // swap the indexed card with the randomly selected card from math.floor result
			deck[card] = deck[other]
      // complete the swap inplace in the array
			deck[other] = temp
		}
	}

// function that grabs a card from the Deck array using pop method.
	this.deal = function(){
		return deck.pop()
	}
}

// instantiate new Deck
var my_deck = new Deck()

// run .shuffle method on newly created deck.
my_deck.shuffle()

// for loop that runs the console log process below 52 times.
for(card=0; card<52; card++){
	console.log(my_deck.deal().print())
}

var my_deck2 = new Deck();
for(card1=0; card1<7; card1++){
	console.log(my_deck.deal().print())
}
//
// for(cardB=0; cardB<7; cardB++){
//   console.log(my_deck.deal().print())
// }

// for(card1=0; card1<5; card1++){
//   console.log(my_deck.deal().print())
// }
