export interface Escanear {
  escanear(): void;
}

export class Escaner implements Escanear {
  escanear(): void {
    console.log('Escaneando documento...');
  }
}
