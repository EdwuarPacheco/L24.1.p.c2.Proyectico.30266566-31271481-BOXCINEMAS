export default class Cl_vFamilia {

constructor(controlador) {
    this.vista = document.getElementById("familiaForm");
    this.inApellido = document.getElementById("familiaForm_inApellido");
    this.inPersona = document.getElementById("familiaForm_inPersona");
    this.inDia = document.getElementById("familiaForm_inDia");
    this.btAceptar = document.getElementById("familiaForm_btAceptar");
    this.btAceptar.onclick = () =>
      controlador.agregarFamilia({
        apellido: this.inApellido.value,
        persona: this.inPersona.value,
        dia: this.inDia.value,
    });
    this.ocultar();
}

mostrar() {
    this.vista.hidden = false;
  }
ocultar() {
    this.vista.hidden = true;
  }
}