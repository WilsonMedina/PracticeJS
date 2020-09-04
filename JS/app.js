const MisDatos = {

    nombre: "wilson",
    apellido: "medina",
    edadd: 30,
    pasatiempo: "aprender",
    activo() {
       return console.log('siempre activo')
    }

}
//console.log(MisDatos)
MisDatos.activo()

let {nombre, apellido, edadd} = MisDatos
//console.log(nombre, apellido, edadd);

for (let e in MisDatos) {
  console.log(`${e} ${MisDatos[e]}`)
}

let edad = 40

const miEdad = (edad < 31)
    ? "eres menor de 31" 
    : "eres mayor de 31"

//console.log(miEdad)

let dia = 3

switch(dia){

case 0:
 console.log("domingo")
break;
case 1:
 console.log("lunes")
break;
case 2:
 console.log("martes")
break;
case 3:
 console.log("miercoles")
break;
case 4:
 console.log("jueves")
break;
case 5:
 console.log("viernes")
break;
case 6:
 console.log("sabado")
break;
default:
console.log("dia no existe")

}

if(dia === 0){
    console.log("domingo")
}else
 if(dia === 1){
    console.log("lunes")
}else
 if(dia === 2){
    console.log("martes")
}else
 if(dia === 3){
    console.log("miercoles")
}else
 if(dia === 4){
    console.log("jueves")
}else
 if(dia === 5){
    console.log("viernes")
}else
 if(dia === 6){
    console.log("sabado")
}else{
    console.log("dia no existe")
}

let num1 = 13.1
let num2 = 12.4

let resultado = Number((num1 + num2).toFixed(2))

//console.log(resultado)

const sumar = (a, b, ...c) => {
    let R = a + b

    c.forEach( n => {
        R += n
    });

    return R
}
//console.log(sumar(20, 20, 50))

const house = {
    room: 4,
    kitchen: 1,
    bathroom: 1,
    people: "a lot",
    clean() {
        console.log(this)
    }

}

//console.log(house)
house.clean()


//console.time("ti")

const arreglo = Array(1000000)

for(let i = 0; i < arreglo.length; i++){
    arreglo[i] = i
}

//console.timeEnd("ti")

//console.table(console)

let fecha = new Date

//console.log(fecha.toString())
//console.log(fecha.toUTCString())


const Perro = {
    nombre: "neski",
    apellido: "kuki",
    ladrar (){
        console.log(this)
    }
}

Perro.ladrar()

let cadena = "Hola, mi nombre es Juan";
let cadenarevertida = "";
   
//Itero la cadena de manera inversa
for(let i = cadena.length-1; i>=0; i--)
{
  //Voy concatenando el valor a la cadena resultado
  cadenarevertida += cadena[i];
}
//console.log(cadenarevertida);

function invertir_cadena(cadena = "Hola, mi nombre es Juan" ) { 
    return cadena.split('').reverse().join('')
}

console.log(invertir_cadena())


const cadenaI = cadena2 => 
 (!cadena2) 
  ? console.warn('No ingresaste texto')
  : (typeof cadena2 === "number")
    ? console.warn('solo debes ingresar texto')
    : cadena2.split('').reverse().join('')

console.log(cadenaI('SOY EL TEXTO QUE SI PASO'))

/*
7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/

const polindromo = palabra => {
    if (!palabra) return console.warn('Debes ingresar una palabra')

    palabra = palabra.toLowerCase()

    let poli = palabra.split('').reverse().join('')

    return (palabra === poli)
    ? console.log(`la palabra ${palabra} si es un polindromo`)
    : console.log(`la palabra ${palabra} no es un polindromo`)
}

polindromo('SALAS')
polindromo()


/*
8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/
const eliminar = (cadena = '', patron = '') =>
(!cadena) 
    ? console.warn('Debes ingresar un texto')
    : (!patron)
        ? console.warn('Debes ingresar un patron')
        : console.log(cadena.replace(new RegExp(patron, 'ig'), ''))

eliminar('www12, www13, www14, www15', 'ww')        

//Numero aleatorio entre 501 y 600
const redondeo = () => console.log(Math.ceil((Math.random() * 100) + 500))
    
 //redondeo()

 /*
7) Programa una función que valide si un numero, es capicua (que se lee igual en un sentido que en otro), pe. mifuncion("2002") devolverá true.
*/

const capicua = (numero = 0) =>{
    if(!numero) return console.warn('Debes ingresar un numero')
    if(typeof numero !== "number") return console.warn('Solo debes ingrsar un numero')

    numero = numero.toString()

    let contrario = numero.split('').reverse().join('')

    return (numero === contrario)
    ? console.log(`${numero} si es capicua`)
    : console.log(`${numero} no es capicua`)
}

//capicua()
//capicua(9889)
//capicua(20091)

/*
Crear funcion que de el resultado factorial de un numero (el factorial es el equivalente a multiplicar el  numero por si mismo por todos los numeros que lo anteceden )
*/

const factorial = (numero4 = undefined) =>{
    if(numero4 === undefined) return console.warn('no ingresaste un numero')
    if(numero4 === 0) return console.warn('cero no se puede factorizar')
    if(isNaN(numero4)) return console.warn(`${numero4} no es un numero`)
    if(Math.sign(numero4) === -1) return console.warn('solo se puede factorizar numeros positivos')
    

    let factor = 1
    for(let i = numero4; i > 1; i--){
        factor *= i
    }

    return console.log(`el ${numero4} su factorial es ${factor}`)
}

//factorial()
//factorial(-87)
//factorial('hola')
//factorial(0)
//factorial(5)
//factorial(120)

/*
sacar de una cadena de texto la cantidad de vocales y consonantes
*/

const vocalesConsonantes = (cadenaTexto) => {
    if(!cadenaTexto) return console.warn('Debes ingresar un texto')
    if(typeof cadenaTexto !== 'string') return console.warn('Solo puedes ingresar texto')

    cadenaTexto = cadenaTexto.toLowerCase()

    let vocales = 0,
        consonantes = 0

    for (let letra of cadenaTexto) {
        if(/[aeiou]/.test(letra)) vocales++
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra)) consonantes++
    }

    return console.log({
        cadenaTexto,
        vocales,
        consonantes
    })
}
//vocalesConsonantes()
//vocalesConsonantes(9)
//vocalesConsonantes('hola que tal como estas')
//vocalesConsonantes('HOLA QUE TAL')

/*
validar que en formulario llegue un nombre correcto
*/

const nombreValido = (nombre) =>{
    if(!nombre) return console.warn('Debes ingresar un nombre')
    if(typeof nombre !== 'string') return console.warn('Solo puedes ingresar texto')

    let expReg = /^[A-Za-z\s]+$/g.test(nombre)

    return (expReg)
    ? console.log(`${nombre} es correcto`)
    : console.log(`${nombre} es incorrecto`)
}

//nombreValido()
//nombreValido(9)
//nombreValido('wilson medina cardenas')

/*
validar que en formulario llegue un correo correcto
*/

const correoValido = (correo) =>{
    if(!correo) return console.warn('Debes ingresar un correo')
    if(typeof correo !== 'string') return console.warn('Solo puedes ingresar texto')

    let expRegCorreo =/^[_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo)

    return (expRegCorreo)
    ? console.log(`${correo} es correcto`)
    : console.log(`${correo} es incorrecto`)
}

//correoValido()
//correoValido(99)
//correoValido('wilson medina')
//correoValido('wilson.89medina@gmail.com')

/*
******************************************************

el constructor new regExp('aca lleva el patror a evaluar', 'aca lleva las banderas') es un metodo que recibe dos atributos!!!!

******************************************************

*/

/*
funcion que devuelve el cuadrado de numeros
*/

const numCuadrado = (arreglo = undefined) =>{
    if(arreglo === undefined) return console.warn('Debes ingresar datos')
    if(!(arreglo instanceof Array)) return console.warn('Debes ingresar el arreglo')
    if(arreglo.length === 0) return console.warn('el arreglo esta vacio')

    for (let numero of arreglo) {
        if(typeof numero !== "number"){
            return console.warn('Solo se deben ingresar numeros')
        }
    }

    const newArreglo = arreglo.map(e => e * e)

    return console.log(`el cuadrado de ${arreglo} es ${newArreglo} `)
}

//numCuadrado()
//numCuadrado([])
//numCuadrado({})
//numCuadrado([1, 2, 3])
//numCuadrado([1, 2, 435])
//numCuadrado([1, 2, 3, 'hola'])

/*
funcion que devuelve el numero mayor y menor de un arreglo
*/

const numMaxMin = (num = undefined) =>{
    if(num === undefined) return console.warn('Debes ingresar datos')
    if(!(num instanceof Array)) return console.warn('Debes ingresar un arreglo')
    if(num.length === 0) return console.warn('el arreglo esta vacio')

    for (let numero of num) {
        if(typeof numero !== "number"){
            return console.warn('Solo se deben ingresar numeros')
        }
    }

    return console.log(`arreglo original ${num}\n el numero mayor es ${Math.max(...num)}\n el numero menor es ${Math.min(...num)} `)
}

//numMaxMin()
//numMaxMin([])
//numMaxMin({})
//numMaxMin([1, 2, 6, 'hola'])
//numMaxMin([12, 78, 90, 890])
//numMaxMin([-100, 300, 12])

/*
funcion que devuelve array con numeros pares e impares
*/

const nuevosArray = (arr = undefined) =>{
    if(arr === undefined) return console.warn('Debes ingresar datos')
    if(!(arr instanceof Array)) return console.warn('Debes ingresar un arreglo')
    if(arr.length === 0) return console.warn('el arreglo esta vacio')

    for (let numero of arr) {
        if(typeof numero !== "number"){
            return console.warn('Solo se deben ingresar numeros')
        }
    }

    return console.log({
        Pares: arr.filter(n => n % 2 === 0),
        Impares: arr.filter(n => n % 2 === 1)
    })
}

//nuevosArray()
//nuevosArray({})
//nuevosArray([])
//nuevosArray(['jkakaka',1, 2])
//nuevosArray([1,2,5,8,12,90,889,413])

/*
funcion que devuelve array con numeros ordenados de forma ascendente y descendente
*/

const ordenarArr = (arr1) => {
    if(arr1 === undefined) return console.warn('Debes ingresar datos')
    if(!(arr1 instanceof Array)) return console.warn('Debes ingresar un arreglo')
    if(arr1.length === 0) return console.warn('el arreglo esta vacio')

    for (let numero of arr1) {
        if(typeof numero !== "number"){
            return console.warn('Solo se deben ingresar numeros')
        }
    }

    return console.log({
        arr1,
        Asc: arr1.map(e => e).sort((a,b) => a-b),
        Desc: arr1.map(e => e).sort((a,b) => b-a)
    })
}

//ordenarArr()
//ordenarArr({})
//ordenarArr([])
//ordenarArr([1,2,3, "hola"])
//ordenarArr([1,69,24,17])

/*
funcion que devuelve array sin elementos duplicados
*/

const eliminaDuplicados = (arr2) => {
    if(arr2 === undefined) return console.warn('Debes ingresar datos')
    if(!(arr2 instanceof Array)) return console.warn('Debes ingresar un arreglo')
    if(arr2.length === 0) return console.warn('el arreglo esta vacio')
    if(arr2.length === 1) return console.warn('al menos debe exitir 2 elementos')


    /*return console.log({
        arr2,
        nuevo: arr2.filter((v, i,n) => n.indexOf(v) === i)
    })*/

    return console.log({
        original: arr2,
        nuevo: [... new Set(arr2)]
    })
}

//eliminaDuplicados()
//eliminaDuplicados([])
//eliminaDuplicados([1])
//eliminaDuplicados({})
//eliminaDuplicados([1, 1, "hola", "como", false, true, {}, 2, 3, 69])

/*
funcion que devuelve el promedio de la suma de numeros
*/

const promedio = (arr1) => {
    if(arr1 === undefined) return console.warn('Debes ingresar datos')
    if(!(arr1 instanceof Array)) return console.warn('Debes ingresar un arreglo')
    if(arr1.length === 0) return console.warn('el arreglo esta vacio')

    for (let numero of arr1) {
        if(typeof numero !== "number"){
            return console.warn('Solo se deben ingresar numeros')
        }
    }

    return console.log(
       arr1.reduce((p, a, i, arr1) => {
           p += a
           if(i === arr1.length-1){
               return `el promedio es ${p / arr1.length}`
           }else{
               return p
           }
       })
    )
}

//promedio([1, 2, 3])

/*prueba*/

const multiplicar = (x, y) => x * y

const resultado3 = x => {
    let r = multiplicar(x, x)
    return console.log(r)
}

//resultado3(10)

/*aprendiendo promesas, .then() .catch()*/

function promise(v){
    if(typeof v !== 'number') return Promise.reject({
        Error: 'error de tipografia',
        TipoError: v
    })

    return new Promise((res, reject) => {
      setTimeout(() => {
        res(/*`el valor ingresado es ${v} y su cuadrado es ${v * v}`*/
        {
            v,
            resultado: v * v
        }
        )
      }, Math.random() * 1000)
    })

}

promise(3)
    .then(o => {
        //console.log(`el valor es: ${o.v}, el resultado es: ${o.resultado}`)
        return promise(4)
    })
    .then(o => {
        //console.log(`el valor es: ${o.v}, el resultado es: ${o.resultado}`)
        return promise(5)
    })
    .then(o => {
        //console.log(`el valor es: ${o.v}, el resultado es: ${o.resultado}`)
        return promise(1)
    })
    .catch(e => console.error(e))

async function declarada(){
   try {
    let o = await promise(4)
    console.log(`el valor es: ${o.v}, el resultado es: ${o.resultado}`)
    
    o = await promise(7)
    console.log(`el valor es: ${o.v}, el resultado es: ${o.resultado}`)
    
    o = await promise(9)
    console.log(`el valor es: ${o.v}, el resultado es: ${o.resultado}`)
   
   } catch (e) {
     console.error(e)
   }
}

//declarada()

/*Metodo para que el parlante de la pc se active*/

let tex = 'Hola desiree pernia' 

const hablar = (tex) => speechSynthesis.speak(new SpeechSynthesisUtterance(tex));

//hablar(tex)



   

for(let i = 0; i < 5; i++){

    const $figure = document.createElement('figure'),
          $img = document.createElement('img'),
          $figcaption = document.createElement('figcaption'),
          $figcaptionText = document.createTextNode('People'),
          $div = document.querySelector('#cards')  

    $figcaption.appendChild($figcaptionText)
    $img.setAttribute('src', 'https://placeimg.com/200/200/any')  
    $figure.appendChild($img)
    $figure.appendChild($figcaption)
    $div.appendChild($figure) 
}

//const $fragmento = document.createDocumentFragment()

/*
los JSON tienen dos metodos parse() y stringify() el primero convierte todo a tipo de dato entendible por JS y el segundo como su nombre lo dice lo combierte a string (texto)
*/


/*
manera de crear un solo addEventListener que apunte al DOM y con condiciones se pase logica al elemento del HTML
*/


document.addEventListener('click', (e) => {
    console.log(e.target)

    if(e.target.matches('#cards img')){
        alert('hola desde la img')
    }
})

console.log(innerHeight)
console.log(innerWidth)
console.log(outerHeight)
console.log(outerWidth)

//let alerta = prompt('confirma')

//console.log(alerta)

/*console.log(navigator.geolocation)
console.log(navigator.mediaDevices)
console.log(navigator.connection)
console.log(navigator)*/
