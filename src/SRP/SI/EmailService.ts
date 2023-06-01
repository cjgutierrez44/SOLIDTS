class EmailService {
  public enviarCorreo(destinatario: string, contenido: string): void {
    console.log("To: " + destinatario);
    console.log("Body: " + contenido)
  }
}

export default EmailService;