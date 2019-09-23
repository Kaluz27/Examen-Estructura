import Base from "./Base.js";

export default class Salida{
    constructor(nombre, numeroDeCamion,horaInicio, horaFin, secuencia){
        this._nombre = nombre;
        this._numeroDeCamion = numeroDeCamion;
        this._horaInicio = horaInicio;
        this._horaFin = horaFin;
        this._secuencia = secuencia;
        this._base = new Base(this._nombre);
    }

    
}