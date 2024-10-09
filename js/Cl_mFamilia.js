export default class Cl_mFamilia {  
    constructor({apellido, persona, dia}) {
        this.apellido = apellido;
        this.persona = persona;
        this.dia = dia;
    }
set apellido(apellido){
    this._apellido = apellido;
}
get apellido(){
    return this._apellido;
}
set persona(persona){
    this._persona = +persona;
}
get persona(){
    return this._persona;
}
set dia(dia){
    this._dia = +dia;
}
get dia(){
    return this._dia;
}
precioEntrada(){
    if(this.dia == 1){
        return 1.50;
    } else return 3.00;
}
Pago(){
    return this.precioEntrada() * this.persona;
}
}