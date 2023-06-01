"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("============SRP============");
const Empleado_1 = require("./SRP/SI/Empleado");
const EmpleadoRepository_1 = require("./SRP/SI/EmpleadoRepository");
const EmailService_1 = require("./SRP/SI/EmailService");
const empleado = new Empleado_1.default('Juan', 2000);
const empleadoRepository = new EmpleadoRepository_1.default();
const emailService = new EmailService_1.default();
const salario = empleado.calcularSalario();
console.log('Salario:', salario);
empleadoRepository.guardarEmpleado(empleado);
console.log('Empleado guardado en la base de datos.');
emailService.enviarCorreo('destinatario@example.com', 'Hola, este es un ejemplo de correo.');
console.log('Correo enviado.');
console.log("===================================");
console.log("============OCP============");
console.log("===================================");
console.log("============LSP============");
const Animal_1 = require("./LSP/Animal");
const Perro_1 = require("./LSP/Perro");
const Gato_1 = require("./LSP/Gato");
function hacerSonidos(animales) {
    for (const animal of animales) {
        animal.hacerSonido();
    }
}
const perro = new Perro_1.default();
const gato = new Gato_1.default();
const animal = new Animal_1.default();
const animales = [perro, gato, animal];
hacerSonidos(animales);
console.log("===================================");
console.log("============ISP============");
const Imprimir_1 = require("./ISP/Imprimir");
const Escanear_1 = require("./ISP/Escanear");
function imprimirDocumento(imprimir) {
    imprimir.imprimir();
}
function escanearDocumento(escanear) {
    escanear.escanear();
}
function imprimirDocumentoColor(imprimir) {
    imprimir.imprimir();
}
const impresora = new Imprimir_1.Impresora();
const escaner = new Escanear_1.Escaner();
//const impresoraColor = new ImpresoraColor();
imprimirDocumento(impresora);
escanearDocumento(escaner);
//imprimirDocumentoColor(impresoraColor);
console.log("===================================");
console.log("============DIP============");
const Mensaje_1 = require("./DIP/Mensaje");
const Notificador_1 = require("./DIP/Notificador");
const mensajeDeTexto = new Mensaje_1.MensajeDeTexto();
const mensajeDeCorreo = new Mensaje_1.MensajeDeCorreo();
const notificador1 = new Notificador_1.Notificador(mensajeDeTexto);
notificador1.notificar();
const notificador2 = new Notificador_1.Notificador(mensajeDeCorreo);
notificador2.notificar();
console.log("===================================");
