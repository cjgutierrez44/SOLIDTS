import { Mensaje } from './Mensaje';

export class Notificador {
  private mensaje: Mensaje;

  constructor(mensaje: Mensaje) {
    this.mensaje = mensaje;
  }

  notificar(): void {
    const texto = this.mensaje.obtenerTexto();
    console.log(`Notificando: ${texto}`);
  }
}