// Operadores
/*
Aritmeticos
+, -, /, *, %
*/

console.log(`Suma - 10 + 3 = ${10 + 3}`)
console.log(`Resta - 10 - 3 = ${10 - 3}`)
console.log(`Multiplicacion - 10 x 3 = ${10 * 3}`)
console.log(`Division - 9 / 3 = ${9 / 3}`)
console.log(`Residuo de la division 9 / 2 = ${9 % 2}`)

/*
Operadores de comparacion
===, !==, >, >=, <, <=
*/
console.log(`5 es igual a 3: ${5 === 3}`)
console.log(`5 es diferente a 3: ${5 !== 3}`)
console.log(`5 es mayor a 3: ${5 > 3}`)
console.log(`5 es menor a 3: ${5 < 3}`)
console.log(`5 es mayor o igual a 5: ${5 >= 3}`)
console.log(`5 es menor o igual a 5: ${5 <= 3}`)

/*
Operadores logicos
&& - AND
|| - OR
*/
console.log(`AND - 10 + 3 = 13 y 7 + 3 = 10: ${10 + 3 === 13 && 7 + 3 === 10}`)
console.log(`OR - 10 + 3 = 13 o 7 + 3 = 13: ${10 + 3 === 13 || 7 + 3 === 13}`)
console.log(`NOT - !true = ${!true}`)

// Operadores de asignacion
let miNumero = 5
console.log(miNumero)
miNumero += 5
console.log(miNumero)
miNumero -= 5
console.log(miNumero)
miNumero *= 2
console.log(miNumero)
miNumero /= 5
console.log(miNumero)
miNumero %= 2
console.log(miNumero)

// Operadores de bit
console.log(`10 AND 3 = ${10 & 3}` )
console.log(`10 OR 3 = ${10 | 3}` )
console.log(`10 XOR 3 = ${10 ^ 3}` )
console.log(`Desplazamiento a la derecha 10 >> 2 = ${10>>2}`)
console.log(`Desplazamiento a la izquierda 10 >> 2 = ${10<<2}`)

// Condicionales
let edad = 21
if(edad < 18) {
  console.log('Usted no puede fumar')
} else {
  console.log('Usted no deberia fumar')
}

// Iterativas
for (let i = 0; i < 11; i++){
  console.log(i)
}

let i = 0
while(i < 11){
  console.log(i)
  i++
}

// Manejo de excepciones
try{
  console.log(10 / 0)
} catch {
  console.log('No puedes dividir entre 0')
} finally {
  console.log('Ha finalizado el manejo de excepciones')
}

// Ejercicio
for(let i = 10; i <= 55; i++){
  if(i % 2 === 0 && i !== 16 && i % 3 !== 0){
    console.log(i)
  }
}