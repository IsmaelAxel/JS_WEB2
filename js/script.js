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

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 1) {
        console.log(`${i} es impar`);
        
    }
}

