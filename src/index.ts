import Empleado from './SRP/SI/Empleado';
import EmpleadoRepository from './SRP/SI/EmpleadoRepository';
import EmailService from './SRP/SI/EmailService';

const empleado = new Empleado('Juan', 2000);
const empleadoRepository = new EmpleadoRepository();
const emailService = new EmailService();


console.log("============CON SOLID SRP============");

const salario = empleado.calcularSalario();
console.log('Salario:', salario);

empleadoRepository.guardarEmpleado(empleado);
console.log('Empleado guardado en la base de datos.');

emailService.enviarCorreo('destinatario@example.com', 'Hola, este es un ejemplo de correo.');
console.log('Correo enviado.');


console.log("===================================");
