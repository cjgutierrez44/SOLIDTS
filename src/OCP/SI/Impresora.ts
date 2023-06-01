import { Documento } from "./Documento";

class Impresora {
  public imprimir(documento: Documento): void {
    if (documento.tipo === 'pdf') {
      this.imprimirPDF(documento.contenido);
    } else if (documento.tipo === 'word') {
      this.imprimirWord(documento.contenido);
    } else if (documento.tipo === 'excel') {
      this.imprimirExcel(documento.contenido);
    }
  }

  private imprimirPDF(contenido: string): void {
    console.log("Imprimiendo documento PDF");
  }

  private imprimirWord(contenido: string): void {
    console.log("Imprimiendo documento de Word");
  }

  private imprimirExcel(contenido: string): void {
    console.log("Imprimiendo hoja de cálculo de Excel");
  }
}

export default Impresora;