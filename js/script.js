// console.log("Hola mundo"); mi primer hola mundo 
// var edad = 22
// console.log(edad);

// var edad = 21
// console.log(edad);

// const nombre = "delfina"

// console.log(nombre);

// const nombreUsuario = "Estudiante";
// let intentosRealizado = 0

// intentosRealizado = intentosRealizado + 1

// console.log("Bienvenido " + nombreUsuario);
// console.log("Intentos: " + intentosRealizado);


// const nombre  = "Juan"
// let edad = 22
// const estudiante = true
// let telefono 

// console.log(typeof nombre);
// console.log(typeof edad);
// console.log(typeof estudiante);
// console.log(typeof telefono);

// const a = 10
// const b = "10"

// console.log(`a > b = ${a > b}`);
// console.log(`a < b = ${a < b}`);
// console.log(`a >= b = ${a >= b}`);
// console.log(`a == b = ${a == b}`);
// console.log(`a !== b = ${a !== b}`);

// Promedio de notas 

// // Declarar tres notas, calcular el promedio y comparar si el promedio es mayor o igual a 6

// let x = 3
// let y = "5"

// console.log(x + y);


// if (edad >= 18) {
//     console.log("Sos mayor de edad");

// } else {
//     console.log("Sos menor de edad");

// }

// if (edad < 18) {
//     console.log("No podes ingresar");

// } else if(edad === 18){
//     console.log("Es tu primera vez, bienvenido");

// }else{
//     console.log("Bienvenido");

// }


// const edad = 22
// const tieneEntrada = true

// console.log(edad >= 18 && tieneEntrada);

// const esEstudiante = false
// const esJubilado = false 

// console.log(esEstudiante || esJubilado);

// const tieneAcceso = true 

// console.log(!tieneAcceso);

// const contrasenia = 123456
// const usuariocontrasenia = 1234565

// const mensaje = usuariocontrasenia === contrasenia ? alert("Bienvenido") : alert("No capo, no estas bienvenido")

// if (mensaje == "puede ingresar") {
//     alert("Bienvenido")
// } else {
//     alert("contraseña incorrecta")
// }

// const dia = 3

// switch(dia){
//     case 1: 
//     console.log("Hoy es lunes");
//         break
//     case 2: 
//     console.log("Hoy es martes");
//         break
//     case 3: 
//         console.log("Hoy es miercoles");
//         break
//     default:
//         console.log("Dia no encontrado");


// }

// Crear dos variables: tieneUsuario y tieneContrasena.

// El programa debe mostrar:
// - Si ambas son verdaderas: "Inicio de sesión correcto".
// - Si solo una es verdadera: "Faltan datos para ingresar".
// - Si ambas son falsas: "Complete sus datos".
// Conceptos: booleanos, if/else if/else y &&/||.

// const tieneUsuario = false
// const tieneContrasena = false

// if (tieneContrasena && tieneUsuario) {
//     console.log("Inicio de sesión correcto");

// } else if(tieneContrasena || tieneUsuario){
//     console.log("Faltan datos para ingresar");

// }else{
//     console.log("Complete sus datos");

// }

// for (let i = 1; i <= 5 ; i++) { //condicion del ciclo

//     //    bloque de ejecucion por ciclo
//     console.log(i);

// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

//Cambiar el ciclo para mostrar los números del 1 al 10. Después, modificarlo para que muestre solamente los números pares.

// for (let i = 2; i <= 10 ; i += 2) { //condicion del ciclo

//     //    bloque de ejecucion por ciclo
//     console.log(i);

// }

// let i = 1

// while (i <= 5) {
//         console.log(i);
//         i++;
// }

// let suma = 10

// for (let i = 1; i <= 5; i++) {
//     suma = suma + i
// }

// console.log("la suma total es: ", suma);

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 1) {
//         console.log(`${i} es impar`);

//     }
// }


// const numeroMagico  = prompt("decime un numero")

// console.log(numeroMagico);

//CLASE DE FUNCIONES 




// function saludar(){
//     console.log("Hola, estudiantes"); //BLOQUE DE CODIGO QUE QUIERA REUTILIZAR
//     console.log("Bienvenidos a la clase");
// }

// saludar()

// saludar()


// saludar()


// saludar()


// saludar()

// let pesos = prompt("Dame plata")
// let dolares = prompt("Dame los verdes")

// function recibirPLata(x, moneda){
//     let plata = x
//     console.log(`Tu moned es: ${moneda}, y la cantidad es $${x}`)
// }

// recibirPLata(pesos, "pesos")
// recibirPLata(dolares, "dolares")

// function suma(x, y){
//     return x + y
// }

// let resultado = suma(10,20)

// console.log(resultado);

//El doble de un numero

// function calcularElDoble(numero){
//     return numero * 2 
// }

// console.log(calcularElDoble(2));

//Funcion para determinar si una persona es mayor de edad

// const edad = prompt("Introduci tu edad")

// function mayorDeEdad(){
//     if(edad >= 18){
//         return true
//     }else{
//         return false
//     }
// }

// if(mayorDeEdad(edad)){
//     console.log("Podes conducir")
// }else{
//     console.log("No podes conducir");
// }

//Calculadora

// function suma(x, y) {
//     return "La suma de tu operacion es: " + (x + y)
// }

// function resta(x, y) {
//     return "La resta de tu operacion es: " + (x - y)
// }

// function division(x, y) {
//     return "La divisón de tu operacion es: " + (x / y)
// }

// function multiplicar(x, y) {
//     return "La multiplicación de tu operacion es: " + (x * y)
// }

// const operacion = prompt("Introduce una operación: \n Opcion 1: suma \n Opcion 2: resta \n Opcion 3: division \n Opcion 4: mulitplicar")
// const valorA = parseInt(prompt("Introduce tu primer valor"))
// const valorB =  parseInt(prompt("Introduce el segundo valor "))

// if (operacion == 1) {
//     console.log(suma(valorA, valorB));
// } else if (operacion == 2) {
// console.log(resta(valorA, valorB))
// } else if (operacion == 3) {
// console.log(division(valorA, valorB))
// } else if (operacion == 4) {
// console.log(multiplicar(valorA, valorB))
// }

// Javascript: Scope, Hoisting y JavaScript Moderno

// const nombre = "ismael"

// function saludar(){
//     console.log("hola ", nombre);
// }

// saludar()
// console.log(nombre);

//Ejemplo 2


// function saludar(){
//     const mensaje = "Hola estudiantes"
//     console.log(mensaje);
    
// }

// saludar()

// console.log(mensaje);

//Ejemplo 3

// if (true) {
//     let edad =25
//     const nombre = "Lucia"

//     console.log(edad);
//     console.log(nombre);

//     function saludar(){
//         console.log("hola", nombre);
        
//     }
    
//     saludar()
// }

// console.log(edad);

//Hoisting - ejemplo 1

// var nombre

// console.log(nombre);

// nombre = "ismael"

// console.log(nombre);


// Ejemplo 2 - Antes de inicializar

// console.log(nombre);

// let nombre = "ismael"

//Ejemplo 3 - Hoisting con funciones 

// saludar()

// function saludar(){
//     console.log("Hola estudiantes");
// }

// Arrow functions

// function sumar (a,b){
//     return a + b
// }

// console.log(sumar(10,20));

// const sumarA = (a,b) => a + b 

// console.log(sumarA(10,20));

// const sumar = (a,b) => {

//     let resultado = a+b
//     return resultado
    
// }

// console.log(sumar(10,30));


// pasar de lo tradicional a lo moderno en JS

// function presentar(nombre, curso){
//     return "hola " + nombre + ", estas cursando " + curso;
// }

// console.log(presentar("Ismael", "Javascript"));

// const presentar = (nombre, curso) => `Hola ${nombre}, estas cursando ${curso}`

// console.log(presentar("Ismael", "Javascript"));

//Clase 7: Objetos y arrays

// let nombre = "ismael"
// let edad = 22
// let fechaDeNacimiento = "08/06/2004"

// const persona = {
//     id: 1,
//     nombre: "Ismael Callamullo",
//     edad: 22,
//     fechaDeNacimiento: "08/06/2004"
// }


// persona.nombre = "Delfina"
// console.log(persona["nombre"]);

// const tren = ["vagonA", 22, true]

// console.log(tren[3]);

// tren.push("VagonD")

// console.log(tren[3]);

// tren.pop()

// console.log(tren[3]);

// console.log(tren.length);


// Array de objetos

// const productos = [
//     {
//         id: 1,
//         nombre: "Laptop",
//         precio: 1200
//     },
//     {
//         id: 2,
//         nombre: "Teclado",
//         precio: 100
//     },
//     {
//         id: 3,
//         nombre: "mouse",
//         precio: 50
//     }
// ]

//console.log(productos[0].nombre);

//Destructuración

// const [primero, segundo, tercero] = productos

// console.log(primero);

//SpreadOperator

// const producto = [{
//     id: 1,
//     nombre: "Laptop",
//     precio: 1200
// },
// {
//     id: 2,
//     nombre: "Laptop",
//     precio: 1200
// }]

// const productoActualizado = [...producto, {
//     nombre: "mouse"
// }]

// console.log(productoActualizado);

//Recorrer un array de objetos

// const productos = [
//     {
//         id: 1,
//         nombre: "Laptop",
//         precio: 1200
//     },
//     {
//         id: 2,
//         nombre: "Teclado",
//         precio: 100
//     },
//     {
//         id: 3,
//         nombre: "mouse",
//         precio: 50
//     }
// ]

// for (let i = 0; i < productos.length; i++) {
//     console.log(`El producto con posición: ${i} es ${productos[i].nombre}`);
    
    
// }


// const tren = [1, 2, 3]

// for (let i = 0; i < tren.length; i++) {
//     console.log(tren[i] * 2);
    
    
// }


//Vamos a crear un pequeño sistema de inventario que permita organizar productos mediante objetos y arrays.

const producto1 = {
         
        id: 1,
        nombre: "Laptop",
        precio: 1200
    
};

const producto2 = {
   id: 2,
   nombre: "mouse", 
   precio: 200
}

const inventario = [producto1, producto2]

console.log(inventario[0].nombre);

const {nombre, precio} = producto1

console.log(`Producto: ${nombre}`);

const producto3 = {
    id: 3,
   nombre: "teclado", 
   precio: 300
}

const nuevoInventario = [...inventario, producto3]

console.log(nuevoInventario);


const productoActualizado = {
    ...producto1,
    precio: 2000
}

console.log(productoActualizado);







