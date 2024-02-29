import { ApplicationData } from "../core/applicationData.js";
import { try_parse_float, try_parse_int, validateParamsCount } from "./validationHelpers.js";

export class CreateShampooCommand {
    #params;
    #appData;

    /**
    * @param {Array} params
    * @param {ApplicationData} appData
    */
    constructor(params, appData) {
        validateParamsCount(params, 6);

        this.#params = params;
        this.#appData = appData;
    }

    execute() {
        const name = this.#params[0];
        const brand = this.#params[1];
        const price = try_parse_float(this.#params[2]);
        const gender = this.#params[3];
        const milliliters = try_parse_int(this.#params[4]);
        const usage = this.#params[5];

        this.#appData.createShampoo(name, brand, price, gender, milliliters, usage);

        return `Shampoo with name ${name} was created!`;
    }
}