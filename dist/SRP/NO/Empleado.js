"use strict";
class EmpleadoNO {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    calcularSalario() {
        return this.salario;
    }
    guardarEmpleado() {
        console.log("Guardando empleado en BD");
    }
    enviarCorreo() {
        console.log("Correo enviado");
    }
}
