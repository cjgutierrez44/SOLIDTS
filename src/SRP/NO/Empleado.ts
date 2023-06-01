class EmpleadoNO {
  private nombre: string;
  private salario: number;

  constructor(nombre: string, salario: number) {
    this.nombre = nombre;
    this.salario = salario;
  }

  public calcularSalario(): number {
    return this.salario;
  }

  public guardarEmpleado(): void {
    console.log("Guardando empleado en BD");
  }

  public enviarCorreo(): void {
    console.log("Correo enviado");
  }
}