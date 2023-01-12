export interface CardData {
  imageId: string;
  state: 'default' | 'flipped' | 'matched'; // default = card back cover. flipped = card front cover. matched = card is matched and removed from the game.
}
//  Same as defining a model in backend if you're used to nodeJs for example.
