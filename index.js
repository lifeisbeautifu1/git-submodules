import data from "./submodule/data.json" with { type: "json" };
import { sum, minus } from "./submodule/utils/index.js";

console.log("Hello world!");

console.log(`Here's data from the submodule`, data);

console.log(`5 + 3 = ${sum(5, 3)}`);

console.log(`5 - 3 = ${minus(5, 3)}`);
