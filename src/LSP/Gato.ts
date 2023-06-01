import Animal from './Animal';

class Gato extends Animal {
  public hacerSonido(): void {
    console.log('Miau miau!');
  }
}

export default Gato;