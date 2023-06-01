export interface Imprimir {
  imprimir(): void;
}

export class Impresora implements Imprimir {
  imprimir(): void {
    console.log('Imprimiendo documento...');
  }
}


export class ImpresoraColor implements Imprimir {
  imprimir(): void {
    console.log('Imprimiendo documento a color...');
  }
}
