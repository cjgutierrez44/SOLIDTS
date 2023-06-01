class Empleado {
  private nombre: string;
  private salario: number;

  constructor(nombre: string, salario: number) {
    this.nombre = nombre;
    this.salario = salario;
  }

  public calcularSalario(): number {
    return this.salario;
  }
}

export default Empleado;