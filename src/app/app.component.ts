import { Component, OnInit } from '@angular/core';
import { CardData } from './card-data.model'; // import the CardData interface
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'memoryGame';

  /**** Cards Constants ****/
  cardImages = [
    'card-1.jpg',
    'card-2.jpg',
    'card-3.jpg',
    'card-4.jpg',
    'card-5.jpg',
    'card-6.jpg',
  ];
  cards: CardData[] = [];
  flippedCards: CardData[] = [];
  matchedCount = 0;

  /**** Logic
   *
   *  1. Setup the cards & shuffle them :shuffleArray() & setupCards()
   *  2. When a card is clicked, flip it  and check if match: cardClicked() & checkMatch()
   *  3. If match, keep them flipped, else flip them back: checkMatch()
   *
   * ****/

  // shuffleArray does :
  // 1. map the array to an array of arrays with a random number and the original value
  // 2. sort the array by the random number
  // 3. converts back to an array of the second member, which is our CardData object
  shuffleArray(anArray: any[]): any[] {
    return anArray
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    this.setupCards();
  }

  setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default',
      };

      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData }); // 2 arrays of the same 6 cards
    });
    this.cards = this.shuffleArray(this.cards);
  }

  checkMatch(): void {}

  cardClicked(index: number): void {
    const cardInfo = this.cards[index]; // get the card info from the cards array
    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo); // if the card is in the default state and there are less than 2 cards flipped, flip the card and add it to the flippedCards array

      if (this.flippedCards.length === 2) {
        this.checkMatch(); // if there are 2 cards flipped, check if they match
      }
    } else if (cardInfo.state === 'flipped') {
      //flip them back if no match
      cardInfo.state = 'default';
      this.flippedCards.pop();
    }
  }
}
