let x = 10; //Variable de tipo primitiva
console.log(x.length);
console.log('Tipos primitivos');
//Objeto
let persona = {
    nombre: 'Carlos',
    apellido: 'Gil',
    email: 'cgil@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase(); //Convierte las minúsculs a mayusculas
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    nombreCompleto: function(){ //método o funciones en JavaScript
        return this.nombre+' '+this.apellido;
    },
    get nombreEdad(){ //Este es el método get
        return 'El nombre es: '+this.nombre+', Edad: '+this.edad;
    }
}

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.email);
console.log(persona.edad);
console.log(persona);
console.log(persona.nombreCompleto());
console.log('Ejecutando con un objeto');
let persona2 = new Object(); //Debe crear un nuevo objeto en memoria
persona2.nombre = 'Juan';
persona2.direccion = 'Salada 14';
persona2.telefono = '5465625132246';
console.log(persona2.telefono);
console.log('Creamos un nuevo objeto');
console.log(persona['apellido']); //Accedemos como si fuera un arreglo
console.log('Usamos el ciclo for in');
//for in y accedemos al objeto como si fuera un arreglo
for(propiedad in persona){
    console.log(propiedad);
    console.log(persona[propiedad]);
}
console.log('cambiamos y eliminamos un error');
persona.apellida = 'Betancud'; //Cambiamos dinamicamente el valor de un objeto
delete persona.apellida; //Eliminamos el error
console.log(persona);

//Distinta forma de imprimir un objeto
//Número 1: la mas sencilla: concatenar cada valor de cada propiedad
console.log('Distinta forma de imprimir un objeto: forma 1');
console.log(persona.nombre+', '+persona.apellido);

//Número 2: Através del ciclo for in
console.log('Distinta forma de imprimir un objeto: forma 2');
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

//Número 3: La funcion Object.values()
console.log('Distinta forma de imprimir un objeto: forma 3');
let personaArray = Object.values(persona);
console.log(personaArray);

//Número 4: Utilizaremos el método JSON.stringify
console.log('Distinta forma de imprimir un objeto: forma 4');
let personaString = JSON.stringify(persona);
console.log(personaString);
console.log('Comenzamos a utilizar el metodo get');
console.log(persona.nombreEdad);

console.log('Comenzamos con el método get y set para idiomas');
persona.lang = 'en';
console.log(persona.lang);

function Persona3(nombre, apellido, email){ //contructor
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+' '+this.apellido;
    }
}
let padre = new Persona3('Leo', 'Lopez', 'lopez1@gmail.com');
padre.nombre = 'Luis'; //modificamos el nombre
padre.telefono = '562562562561'; //Una propiedad exclusiva del objeto padre
console.log(padre);
console.log(padre.nombreCompleto()); //Utilizamos la funcion
let madre = new Persona3('Laura', 'Contrera', 'contrera1@gmail.com');
console.log(madre);
console.log(madre.telefono); //la propiedad no esta definida
console.log(madre.nombreCompleto());

//Diferentes formas de crear objetos
//caso objeto1
let miObjeto = new Object(); //Esta es una opcion formal
//caso objeto2
let miObjeto2 = {}; //Esta opcion es breve y recomendada

//caso String 1
let miCaddena1 = new String('Hola'); //Sintaxis formal
//caso String 2 
let miCaddena2 = 'Hola'; //Esta es la sintaxis simplificada y recomendada

//caso con números 1
let miNumero = new Number(1); //Es formal no recomendable
//caso con números 2
let miNumero2 = 1; //Sintaxis recomendada

//caso boolean 1
let miBoolean1 = new Boolean(false); //Formal
//caso boolean 2
let miBoolean2 = false; //Sintaxis recomendada

//caso Arreglos 1
let miArreglo1 = new Array(); //Forma1
//caso Arreglos 2
let miArreglo2 = []; //Sintaxis recomendada

//caso function 1
let miFuncion1 = new function(){}; //todo despues de new es considerado objeto
//caso function 2
let miFuncion2 = function(){}; //Notacion simplificada y recomendada

//Uso de prototype
Persona3.prototype.telefono = '265132132';
console.log(padre);
console.log(madre.telefono);
madre.telefono = '54651654651';
console.log(madre.telefono);

//Uso de call
let persona4 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto2: function(titulo, telefono){
        return titulo+': '+this.nombre+' '+this.apellido+' '+telefono;
        //return this.nombre+' '+this.apellido;
    }
}

let persona5 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

console.log(persona4.nombreCompleto2('Lic.', '5565412346'));
console.log(persona4.nombreCompleto2.call(persona5, 'Ing.', '565456165465'));
 
//Método Apply
let arreglo = ['Ing.', '56545612345'];
console.log(persona4.nombreCompleto2.apply(persona5, arreglo));














