import Cl_vFamilia from "./Cl_vFamilia.js";
import Cl_vCine from "./Cl_vCine.js";
import Cl_mFamilia from "./Cl_mFamilia.js";
import Cl_mCine from "./Cl_mCine.js";
export default class Cl_controlador {
  constructor() {
    this.mCine = new Cl_mCine(this);
    this.vFamilia = new Cl_vFamilia(this);
    this.vCine = new Cl_vCine(this);
  }
  mostrarVistaFamilia() {
    this.vCine.ocultar();
    this.vFamilia.mostrar();
  }
  mostrarVistaCine() {
    this.vFamilia.ocultar();
    this.vCine.mostrar();
  }
  agregarFamilia({ apellido, persona, dia }) {
    let familia = new Cl_mFamilia({ apellido, persona, dia });
    this.mCine.procesarFamilia(familia);
    this.vCine.reportarFamilia({
      apellido: familia.apellido,
      persona: familia.persona,
      dia: familia.dia,
      Pago: familia.Pago(),
      devolverFamilia: this.mCine.devolverFamilia(),
      promedioLunes: this.mCine.promedioLunes(),
      dineroCaja: this.mCine.dineroCaja(),
    });
    this.mostrarVistaCine();
  }
  agregarCine({cantDinero}) {
    this.mCine.cantDinero = cantDinero;
  }
}
