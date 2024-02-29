import { Gender } from "./gender.js";
import { Product } from "./product.js";
import { Scent } from "./scent.js";

export class Cream extends Product {
  static #minNameLength = 3;
  static #maxNameLength = 15;
  static #minBrandLength = 3;
  static #maxBrandLength = 15;

  #scent;

  /**
   * @param {string} name
   * @param {string} brand
   * @param {number} price
   * @param {Gender} gender
   * @param {Scent} scent
   */
  constructor(name, brand, price, gender, scent) {
    super(name, brand, price, gender);

    this.validateScent(scent);
    this.#scent = scent;
  }

  /**
  * @param {string}
  */
  validateName(name) {
    if (!name) {
      throw new Error("Invalid name!");
    }

    if (name.length < Cream.#minNameLength || name.length > Cream.#maxNameLength) {
      throw new Error(`Product name length must be between ${Cream.#minNameLength} and ${Cream.#maxNameLength}`);
    }
  }

  /**
   * @param {string}
   */
  validateBrand(brand) {
    if (!brand) {
      throw new Error("Invalid brand!");
    }

    if (brand.length < Cream.#minBrandLength || brand.length > Cream.#maxBrandLength) {
      throw new Error(`Product brand length must be between ${Cream.#minBrandLength} and ${Cream.#maxBrandLength}`);
    }
  }

  /**
   * @type {Scent}
   */
  get scent() {
    return this.#scent;
  }

  /**
   * @param {Scent}
   */
  validateScent(scent) {
    if (!Object.keys(Scent).some(key => Scent[key] === scent)) {
      throw new Error(`Invalid scent ${scent}!`);
    }
  }

  additionalInfo() {
    const info = [
      ` #Scent: ${Scent[this.#scent]}`
    ]

    return info.join("\n");
  }
}

