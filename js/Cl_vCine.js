export default class Cl_vCine { 
    constructor(controlador) {
      this.vista = document.getElementById("mainForm");
      this.tabla = document.getElementById("mainForm_tabla");
      this.inCantDinero = document.getElementById("mainForm_inCantDinero");
      this.btAgregar = document.getElementById("mainForm_btAgregar");
      this.lblDevolverFamilia = document.getElementById("mainForm_lblDevolverFamilia");
      this.lblPromedioLunes = document.getElementById("mainForm_lblPromedioLunes");
      this.lblDineroCaja = document.getElementById(  "mainForm_lblDineroCaja");
      this.btAceptar = document.getElementById("mainForm_btAceptar");

      this.btAceptar.onclick = () =>
        controlador.agregarCine({
          cantDinero: this.inCantDinero.value,
        });
      this.btAgregar.onclick = () => 
        controlador.mostrarVistaFamilia();
    }
    mostrar() {
      this.vista.hidden = false;
    }
    ocultar() {
      this.vista.hidden = true;
    }
    reportarFamilia({
      apellido,
      persona,
      dia,
      Pago,
      devolverFamilia,
      promedioLunes,
      dineroCaja,

    }) {
      this.tabla.innerHTML += `
      <tr>
        <td>${apellido}</td>
        <td>${persona}</td>
        <td>${dia}</td>
        <td>${Pago}</td>
      </tr>`;
      this.lblDevolverFamilia.innerHTML = devolverFamilia;
      this.lblPromedioLunes.innerHTML = promedioLunes;
      this.lblDineroCaja.innerHTML = dineroCaja;
    }
  }
  