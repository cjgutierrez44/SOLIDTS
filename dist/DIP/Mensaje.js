"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MensajeDeCorreo = exports.MensajeDeTexto = void 0;
class MensajeDeTexto {
    obtenerTexto() {
        return 'Hola, soy un mensaje de texto.';
    }
}
exports.MensajeDeTexto = MensajeDeTexto;
class MensajeDeCorreo {
    obtenerTexto() {
        return 'Hola, soy un mensaje de correo electrónico.';
    }
}
exports.MensajeDeCorreo = MensajeDeCorreo;
