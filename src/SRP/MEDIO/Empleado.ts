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

class EmpleadoRepository {
  public guardarEmpleado(empleado: Empleado): void {
    console.log("Guardando empleado en BD");
  }
}

class EmailService {
  public enviarCorreo(destinatario: string, contenido: string): void {
    console.log("To: " + destinatario);
    console.log("Body: " + contenido)
  }
}