export interface Mensaje {
  obtenerTexto(): string;
}

export class MensajeDeTexto implements Mensaje {
  obtenerTexto(): string {
    return 'Hola, soy un mensaje de texto.';
  }
}

export class MensajeDeCorreo implements Mensaje {
  obtenerTexto(): string {
    return 'Hola, soy un mensaje de correo electrónico.';
  }
}