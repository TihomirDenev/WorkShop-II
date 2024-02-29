import { ApplicationData } from "./core/applicationData.js";
import { CommandFactory } from "./core/commandFactory.js";
import { Engine } from "./core/engine.js";

const main = () => {
  // The following demonstrates the Composition pattern.
  const data = new ApplicationData();
  const commandFactory = new CommandFactory(data);
  const engine = new Engine(commandFactory);

  const commands = [
    "CreateShampoo MyMan Trashy 10.99 Men 1000 EveryDay",
    "CreateToothpaste White Expensive 10.99 Men calcium,fluorid",
    "CreateCream Nivea Body 39.99 Unisex Lavender",
    "CreateCategory Shampoos",
    "CreateCategory Toothpastes",
    "CreateCategory Cream",
    "AddToCategory Shampoos MyMan",
    "AddToCategory Toothpastes White",
    "AddToCategory Cream Nivea",
    "AddToShoppingCart MyMan",
    "AddToShoppingCart White",
    "AddToShoppingCart Nivea",
    "ShowCategory Shampoos",
    "ShowCategory Toothpastes",
    "ShowCategory Cream",
    "TotalPrice",
    "RemoveFromCategory Shampoos MyMan",
    "ShowCategory Shampoos",
    "RemoveFromShoppingCart MyMan",
    "TotalPrice"
  ];

  const result = engine.run(commands);
  console.log(result);
};

main();