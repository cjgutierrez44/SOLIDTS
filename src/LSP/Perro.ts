import Animal from './Animal';

class Perro extends Animal {
  public hacerSonido(): void {
    console.log('Guau guau!');
  }
}

export default Perro;