"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Animal_1 = require("./Animal");
class Perro extends Animal_1.default {
    hacerSonido() {
        console.log('Guau guau!');
    }
}
exports.default = Perro;
