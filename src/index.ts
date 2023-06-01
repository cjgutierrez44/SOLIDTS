console.log("============SRP============");
import Empleado from './SRP/SI/Empleado';
import EmpleadoRepository from './SRP/SI/EmpleadoRepository';
import EmailService from './SRP/SI/EmailService';


const empleado = new Empleado('Juan', 2000);
const empleadoRepository = new EmpleadoRepository();
const emailService = new EmailService();

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
import Animal from './LSP/Animal';
import Perro from './LSP/Perro';
import Gato from './LSP/Gato';

function hacerSonidos(animales: Animal[]): void {
	for (const animal of animales) {
		animal.hacerSonido();
	}
}

const perro = new Perro();
const gato = new Gato();
const animal = new Animal();

const animales: Animal[] = [perro, gato, animal];

hacerSonidos(animales);
console.log("===================================");


console.log("============ISP============");
import { Imprimir, Impresora, /*ImpresoraColor*/ } from './ISP/Imprimir';
import { Escanear, Escaner } from './ISP/Escanear';

function imprimirDocumento(imprimir: Imprimir): void {
	imprimir.imprimir();
}

function escanearDocumento(escanear: Escanear): void {
	escanear.escanear();
}

function imprimirDocumentoColor(imprimir: Imprimir):void{
	imprimir.imprimir();
}

const impresora = new Impresora();
const escaner = new Escaner();
//const impresoraColor = new ImpresoraColor();

imprimirDocumento(impresora);
escanearDocumento(escaner);
//imprimirDocumentoColor(impresoraColor);
console.log("===================================");


console.log("============DIP============");
import { MensajeDeTexto, MensajeDeCorreo } from './DIP/Mensaje';
import { Notificador } from './DIP/Notificador';

const mensajeDeTexto = new MensajeDeTexto();
const mensajeDeCorreo = new MensajeDeCorreo();

const notificador1 = new Notificador(mensajeDeTexto);
notificador1.notificar();

const notificador2 = new Notificador(mensajeDeCorreo);
notificador2.notificar();
console.log("===================================");