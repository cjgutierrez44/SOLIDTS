import Empleado from './Empleado';

class EmpleadoRepository {
  public guardarEmpleado(empleado: Empleado): void {
    console.log("Guardando empleado en BD");
  }
}

export default EmpleadoRepository;