"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Notificador = void 0;
class Notificador {
    constructor(mensaje) {
        this.mensaje = mensaje;
    }
    notificar() {
        const texto = this.mensaje.obtenerTexto();
        console.log(`Notificando: ${texto}`);
    }
}
exports.Notificador = Notificador;
