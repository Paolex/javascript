/* 
//* Dispensador de golosionas online
//* El programa deberá leer la moneda que ingrese el usuario, posteriormente se debe elegir en el siguiente menu 4 opciones:

//* 1. Gaseosa: S/4
//* 2. Papitas: S/2
//* 3. Oreo: S/1
//* 4. Chupetin: S/3

//* El programa deberá escribir el vuelto que elegiste de caso contrario deberás decirle que no cuenta con saldo suficiente.
*/

let moneda = 0
let opcion = 0

moneda = prompt("Ingresar monto de moneda") 
moneda = parseInt(moneda) 

opcion = prompt(`
    ================================
    1. Gaseosa: S/ 4.00
    2. Papitas: S/ 2.00
    3. Oreo: S/ 1.00
    4. Chupetin: S/ 3.00
    ===================+============
    INGRESA UNA OPCIÓN:
`)
opcion = parseInt(opcion)

let vuelto = moneda - opcion
vuelto = parseInt(vuelto)

if(moneda < opcion){
    console.log("No cuenta con saldo suficiente")
}else{
    console.log("Su vuelto es",vuelto)
}
