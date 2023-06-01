"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class EmailService {
    enviarCorreo(destinatario, contenido) {
        console.log("To: " + destinatario);
        console.log("Body: " + contenido);
    }
}
exports.default = EmailService;
