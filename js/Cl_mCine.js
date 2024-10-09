export default class Cl_mCine {
    constructor({cantDinero}){
        this.mayor = 0;
        this.auxFamilia = "";
        this.acumDiaLunes = 0.0;
        this.contDias = 0;
        this.cantDinero = cantDinero;
        this.acumTotal = 0.0;
    }
    procesarFamilia(familia){
        this.acumTotal += familia.Pago();
    if (familia.dia == 1){
        this.acumDiaLunes += familia.Pago();
        this.contDias++;
    }   
    if (familia.Pago() > this.mayor){
     this.mayor = familia.Pago();
     this.auxFamilia = familia.apellido;
    }
 }
    devolverFamilia(){
        return this.auxFamilia;
    }
    promedioLunes(){
        return this.acumDiaLunes / this.contDias;
    }
    dineroCaja(){
        return this.cantDinero - ( - this.acumTotal);
    }
}
