import { ApplicationData } from "../core/applicationData.js";
import { try_parse_float, try_parse_int, validateParamsCount } from "./validationHelpers.js";

export class CreateToothpasteCommand {
    #params;
    #appData;

    /**
    * @param {Array} params
    * @param {ApplicationData} appData
    */
    constructor(params, appData) {
        validateParamsCount(params, 5);

        this.#params = params;
        this.#appData = appData;
    }

    execute() {
        const name = this.#params[0];
        const brand = this.#params[1];
        const price = try_parse_float(this.#params[2]);
        const gender = this.#params[3];
        const ingredients = this.#params[4].split(",");

        this.#appData.createToothpaste(name, brand, price, gender, ingredients);

        return `Toothpaste with name ${name} was created!`;
    }
}