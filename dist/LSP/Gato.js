"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
class Gato extends Animal_1.default {
    hacerSonido() {
        console.log('Miau miau!');
    }
}
exports.default = Gato;
