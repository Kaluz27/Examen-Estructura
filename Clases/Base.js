import Ruta from "./Ruta";

export default class Base {
    constructor(nombre, longitud, latitud) {
        this._nombre = nombre;
        this._latitud = latitud;
        this._longitud = longitud;
        this._tiempoLlegada = new Ruta(this._tiempoMinutos);
        this._salidas = [];

    }

    get nombre() {
        return this._nombre;
    }

    set nombre (nombre) {
        this._nombre = nombre
    }

    get latitud() {
        return this._latitud;
    }

    set latitud(coordenada){
        this._latitud = coordenada
    }

    get longitud() {
        return this._longitud;
    }

    set longitud(coordenada){
        this._longitud = coordenada
    }

    get tiempoLlegada() {
        return this._tiempoLlegada;
    }

    set tiempoLlegada(val) {
        this._tiempoLlegada = val
    }

    toString(){
        let mostrar = `La base: ${this._nombre}, con una latitud de: ${this._latitud} y una longitud de: ${this._longitud}`
        return mostrar
    }

    }