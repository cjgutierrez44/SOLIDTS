"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Impresora {
    imprimir(documento) {
        if (documento.tipo === 'pdf') {
            this.imprimirPDF(documento.contenido);
        }
        else if (documento.tipo === 'word') {
            this.imprimirWord(documento.contenido);
        }
        else if (documento.tipo === 'excel') {
            this.imprimirExcel(documento.contenido);
        }
    }
    imprimirPDF(contenido) {
        console.log("Imprimiendo documento PDF");
    }
    imprimirWord(contenido) {
        console.log("Imprimiendo documento de Word");
    }
    imprimirExcel(contenido) {
        console.log("Imprimiendo hoja de cálculo de Excel");
    }
}
exports.default = Impresora;
