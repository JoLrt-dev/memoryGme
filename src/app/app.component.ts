import { Component, OnInit } from '@angular/core';
import { CardData } from './card-data.model'; // import the CardData interface

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'memoryGme';

  // array of image IDs from Unsplash
  cardImages = [
    'pDGNBK9A0sk',
    'fYDrhbVlV1E',
    'qoXgaF27zBc',
    'b9drVB7xIOI',
    'TQ-q5WAVHj0',
  ];

  // cards is an array of CardData objects
  cards: CardData[] = [];

  // flippedCards is an array of CardData objects
  flippedCards: CardData[] = [];

  matchedCount = 0;

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

  constructor() {}

  ngOnInit(): void {
    this.setupCards();
  }

  // setupCards() is a function that fill in the cards array with CardData objects
  setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default',
      };

      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });
    });
    this.cards = this.shuffleArray(this.cards);
  }
}
