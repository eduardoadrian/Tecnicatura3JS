class Persona{
   
    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this.idPersona = ++Persona.contadorPersonas;
        this.nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
    }

    get idPersona(){
        return this,this.idPersona;
    }

    get nombre(){
        this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get edad(){
        return this._edad;
    }

    set edad(edad){
        this._edad = edad;
    }
//
    toString(){
        return `
        ${this._idPersona} 
        ${this._nombre} 
        ${this._apellido} 
        ${this._edad}`;
    }
}


