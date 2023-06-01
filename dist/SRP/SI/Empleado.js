"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    calcularSalario() {
        return this.salario;
    }
}
exports.default = Empleado;
