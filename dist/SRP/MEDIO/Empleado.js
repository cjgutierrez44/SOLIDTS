"use strict";
class Empleado {
    constructor(nombre, salario) {
        this.nombre = nombre;
        this.salario = salario;
    }
    calcularSalario() {
        return this.salario;
    }
}
class EmpleadoRepository {
    guardarEmpleado(empleado) {
        console.log("Guardando empleado en BD");
    }
}
class EmailService {
    enviarCorreo(destinatario, contenido) {
        console.log("To: " + destinatario);
        console.log("Body: " + contenido);
    }
}
