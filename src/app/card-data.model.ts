export interface CardData {
  imageId: string; // imageId is the name of the image file without the extension (e.g : 'card-1' or 'card-2') if you stored your images in assets, or it could be the id of the Unsplash image you wanna use.
  state: 'default' | 'flipped' | 'matched'; // default = card back cover. flipped = card front cover. matched = card is matched and removed from the game. Will be same for angular animation states.
}
//  Same as defining a model in backend if you're used to nodeJs for example.
