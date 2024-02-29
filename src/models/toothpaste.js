import { Product } from './product.js';
import { Gender } from './gender.js';

export class Toothpaste extends Product {

  #ingredients;

  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {string} ingredients
  */
  constructor(name, brand, price, gender, ingredients) {
    super(name, brand, price, gender);

    if (!ingredients) {
      throw new Error('Ingredients cannot be null, undefined or an empty string!');
    }

    this.#ingredients = ingredients;
  }

  /**
  * @type {string}
  */  
  get ingredients() {
    return this.#ingredients;
  }

  additionalInfo() {
    return ` #Ingredients: ${this.#ingredients}`;
  }
}