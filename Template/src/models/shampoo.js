import { Product } from './product.js';
import { Usage } from './usage.js';
import { Gender } from './gender.js';

export class Shampoo extends Product {
  static #minMilliliters = 0;
  #milliliters;
  #usage;

  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  * @param {number} milliliters
  * @param {Usage} usage
  */
  constructor(name, brand, price, gender, milliliters, usage) {
    super(name, brand, price, gender);

    if (milliliters < Shampoo.#minMilliliters) {
      throw new Error(`Minimal milliliters value should be ${Shampoo.#minMilliliters}!`);
    }

    if (!Object.keys(Usage).some(key => Usage[key] === usage)) {
      throw new Error(`Invalid usage type value ${usage}!`);
    }

    this.#milliliters = milliliters;
    this.#usage = usage;
  }

  /**
  * @type {number}
  */
  get milliliters() {
    return this.#milliliters;
  }

  /**
  * @type {Usage}
  */
  get usage() {
    return this.#usage;
  }

  additionalInfo() {
    const info = [
      ` #Milliliters: ${this.#milliliters}`,
      ` #Usage: ${Usage[this.usage]}`
    ]

    return info.join("\n");
  }
}