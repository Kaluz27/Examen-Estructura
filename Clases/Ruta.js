import Base from "./Base.js";

export default class Ruta {
    constructor(nombre, tiempoMinutos) {
        this._nombre = nombre;
        this.__tiempoMinutos = tiempoMinutos;
        this._bases = new Array(5);
    }
}