import { Gender } from "./gender.js";

export class Product {

  static #minNameLength = 3;
  static #maxNameLength = 10;
  static #minBrandLength = 2;
  static #maxBrandLength = 10;
  static #minPrice = 0;
  #name;
  #brand;
  #price;
  #gender;

  /**
  * @param {string} name
  * @param {string} brand
  * @param {number} price
  * @param {Gender} gender
  */
  constructor(name, brand, price, gender) {
    this.validateName(name);
    this.validateBrand(brand);
    this.validatePrice(price);
    this.validateGender(gender);

    this.#name = name;
    this.#brand = brand;
    this.#price = price;
    this.#gender = gender;
  }

  /**
  * @type {string}
  */
  get name() {
    return this.#name;
  }

  /**
  * @param {string}
  */
  validateName(name) {
    if (!name) {
      throw new Error("Invalid name!");
    }

    if (name.length < Product.#minNameLength || name.length > Product.#maxNameLength) {
      throw new Error(`Product name length must be between ${Product.#minNameLength} and ${Product.#maxNameLength}`);
    }
  }

  /**
  * @type {string}
  */
  get brand() {
    return this.#brand;
  }

  /**
   * @param {string}
   */
  validateBrand(brand) {
    if (!brand) {
      throw new Error("Invalid brand!");
    }

    if (brand.length < Product.#minBrandLength || brand.length > Product.#maxBrandLength) {
      throw new Error(`Product brand length must be between ${Product.#minBrandLength} and ${Product.#maxBrandLength}`);
    }
  }

  /**
  * @type {number}
  */
  get price() {
    return this.#price;
  }

  /**
  * @param {number}
  */
  validatePrice(price) {
    if (price < Product.#minPrice) {
      throw new Error(`Product price must be greater than ${Product.#minPrice}`);
    }
  }

  /**
  * @type {Gender}
  */
  get gender() {
    return this.#gender;
  }

  /**
  * @param {Gender}
  */
  validateGender(gender) {
    if (!Object.keys(Gender).some(key => Gender[key] === gender)) { // if (!Gender.hasOwnProperty(value)) {
      throw new Error(`Invalid gender type value ${gender}!`);
    }
  }

  /**
  * @returns {string}
  */
  print() {
    const productInfo = [
      `#${this.#name} ${this.#brand}`,
      ` #Price: $${this.#price}`,
      ` #Gender: ${Gender[this.#gender]}`,
      `${this.additionalInfo()}`,
      " ==="
    ];

    return productInfo.join("\n");
  }

  /**
  * @abstract
  *
  * @returns {string}
  */
  additionalInfo() {
    throw new Error("Not implemented! Implementation must be provided by the classes extending Product!");
  }
}