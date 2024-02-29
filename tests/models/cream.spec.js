/* eslint-disable no-undef */
import { Cream } from "../../src/models/cream.js";
import { Product } from "../../src/models/product.js";
import { Usage } from "../../src/models/usage.js";
import { Gender } from "../../src/models/gender.js";
import { Scent } from "../../src/models/scent.js";

describe('Cream class', () => {
  let cream;

  beforeAll(() => {
    cream = new Cream('Nice Cream', 'Example Brand', 10.99, Gender.Women, Scent.Vanilla);
  });

  describe('constructor', () => {
    it('should create an instance of Cream with valid parameters', () => {
      expect(cream).toBeDefined();
      expect(cream.name).toBe('Nice Cream');
      expect(cream.brand).toBe('Example Brand');
      expect(cream.price).toBe(10.99);
      expect(cream.gender).toBe(Gender.Women);
      expect(cream.scent).toBe(Scent.Vanilla);
    });

    it('should throw an error with invalid scent', () => {
      expect(() => new Cream('Nice Cream', 'Example Brand', 10.99, Gender.Women, 'Invalid Scent')).toThrowError('Invalid scent Invalid Scent!');
    });
  });

  describe('validateName', () => {
    it('should throw an error with empty name', () => {
      expect(() => cream.validateName('')).toThrowError('Invalid name!');
    });

    it('should throw an error with short name', () => {
      expect(() => cream.validateName('A')).toThrowError('Product name length must be between 3 and 15');
    });

    it('should throw an error with long name', () => {
      expect(() => cream.validateName('Very Long Name For A Cream')).toThrowError('Product name length must be between 3 and 15');
    });
  });

  describe('validateBrand', () => {
    it('should throw an error with empty brand', () => {
      expect(() => cream.validateBrand('')).toThrowError('Invalid brand!');
    });

    it('should throw an error with short brand', () => {
      expect(() => cream.validateBrand('AB')).toThrowError('Product brand length must be between 3 and 15');
    });

    it('should throw an error with long brand', () => {
      expect(() => cream.validateBrand('Very Long Brand Name')).toThrowError('Product brand length must be between 3 and 15');
    });
  });

  describe('additionalInfo', () => {
    it('should return string with scent information', () => {
      expect(cream.additionalInfo()).toBe(' #Scent: Vanilla');
    });
  });
});


// describe('Cream', () => {
//   let cream;

//   beforeEach(() => {
//     cream = new Cream('Test Cream', 'Test Brand', 10, 'Men', 'Lavender');
//   });

//   test('should create a new Cream object', () => {
//     expect(cream).toBeInstanceOf(Cream);
//   });

//   test('should set the name property', () => {
//     expect(cream.name).toBe('Test Cream');
//   });

//   test('should set the brand property', () => {
//     expect(cream.brand).toBe('Test Brand');
//   });

//   test('should set the price property', () => {
//     expect(cream.price).toBe(10);
//   });

//   test('should set the gender property', () => {
//     expect(cream.gender).toBe('Men');
//   });

//   test('should set the scent property', () => {
//     expect(cream.scent).toBe('Lavender');
//   });

//   test('should throw an error if scent is not valid', () => {
//     expect(() => {
//       new Cream('Test Cream', 'Test Brand', 10, 'Men', 'invalid_scent');
//     }).toThrowError('Invalid scent');
//   });
// });