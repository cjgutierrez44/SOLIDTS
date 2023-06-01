"use strict";
class Impresora {
    imprimir(documento) {
        if (documento.tipo === 'pdf') {
            console.log("Imprime un pdf");
        }
        else if (documento.tipo === 'word') {
            console.log("Imprime un word");
        }
        else if (documento.tipo === 'excel') {
            console.log("Imprime un word");
        }
    }
}
