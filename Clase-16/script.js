let usuarios = [
    {
        id: 4,
        email: "julieta@gmail.com",
        nombre: 'julieta'
    },
    {
        id: 12,
        email: "pepe@gmail.com",
        nombre: 'pepe'
    },
    {
        id: 22,
        email: "jose@gmail.com",
        nombre: 'jose'
    },
    {
        id: 35,
        email: "adrian@outlook.com",
        nombre: 'adrian'
    }
]




function buscarUsuarioPorId(id_usuario) {
    for (let usuario of usuarios) {
        if (usuario.id === id_usuario) {
            return usuario
        }
    }
    return null
}

function buscarUsuarioPorEmail(email) {
    for (let usuario of usuarios) {
        if (usuario.email === email) {
            return usuario
        }
    }
    return null
}

function buscarUsuarioPorNombre(nombre) {
    for (const usuario of usuarios) {
        if (usuario.nombre === nombre) {
            return usuario;
        }
    }
    return null
}

function buscarUsuarioPorId(id_usuario) {
    for (let usuario of usuarios) {
        if (usuario.id === id_usuario) {
            return usuario
        }
    }
    return null
}

function eliminarUsuarioPorId(id_usuario) {
    let usuario = buscarUsuarioPorId(id_usuario)
    if (usuario === null) {
        return null
    }

    let indice_usuario = usuarios.indexOf(usuario)
    usuarios.splice(indice_usuario, 1);
    return true
}

function obtenerMailsUsuarios() {
    let mailsUsuarios = [];

    for (let indice = 0; indice < usuarios.length; indice = indice + 1) {

        mailsUsuarios.push(usuarios[indice].email)
    }

    return mailsUsuarios
}

function buscarUsuariosPorEmail(termino_de_busqueda) {
    let resultado_filtro = []
    for (let usuario of usuarios) {
        if (usuario.email.includes(termino_de_busqueda)) {
            resultado_filtro.push(usuario)
        }
    }
    return resultado_filtro
}

function actualizarUsuarioPorId(usuario_id, nombre, email) {
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].id === usuario_id) {
            usuarios[i].nombre = nombre;
            usuarios[i].email = email;
            return usuarios[i];
        }
    }
    return null;
}

function obtenerIdMasAlto() {
    let id_mas_alto = 0;
    for (let usuario of usuarios) {
        if (usuario.id > id_mas_alto) {
            id_mas_alto = usuario.id;
        }
    }
    return id_mas_alto;
}




//1. Crear array vacio que hara de resultado del filtro
//2. Recorrer usuario por usuario
//3. Por cada usuario evaluar si cumple con la condicion
//3.1 Si cumple con condicion, 'pushear' (agregar) al array de resultado ese usuario
//4. Al terminar el bucle devolver el array de resultado


//Desarrollar las siguientes funciones
//buscarUsuariosPorTerminoDeBusqueda(termino_de_busqueda)
//tiene que devolver a los usuarios que cumplan con ese termino de busqueda en el nombre

//buscarUsuariosPorTerminoDeBusqueda('j')
/*
retorna
[
    {
        id: 2,
        email: "jose@gmail.com",
        nombre: 'jose'
    },
    {
        id: 4,
        email: "julieta@gmail.com",
        nombre: 'julieta'
    }
]
*/

//buscarUsuariosPorTerminoDeBusqueda('jo')
/*
retorna
[
    {
        id: 2,
        email: "jose@gmail.com",
        nombre: 'jose'
    }
]
*/

//buscarUsuariosPorTerminoDeBusqueda('josefina')
/*
retorna
[]
*/









//Flavia
//obtenerIdMasAlto() //Devolver el id mas alto (asumiendo que son numeros) de tu lista de usuarios
//obtenerIdMasAlto() //-> 4




//Metodos de string:
//Nos permiten hacer acciones con los stings
//- includes -> Saber si cierta sentencia esta en el string
/* let texto = 'hola mundo'
texto.includes('hola ') //-> true
texto.includes('h') //-> true
texto.toLowerCase().includes('H'.toLowerCase()) //-> false
texto.includes('hm') //-> false */
/* if(texto.includes('h') && texto.includes('m')){

} */

/*
//- toLowerCase -> Pasa un string a minusculas
let texto_2 = 'hOlA'.toLowerCase() //-> 'hola'

//- toUpperCase -> Pasa un string a mayusculas
let texto_3 = 'hOlA'.toUpperCase() //-> 'HOLA'

//- split -> Transformar tu string en array

let mensaje = 'hola que tal todas?'


let resultado = mensaje.split(' ')
let letra_por_letra = mensaje.split('')
*/
/*
console.log('la frase: ' + mensaje + ' tiene ' + resultado.length + ' de palabras')
console.log('la frase: ' + mensaje + ' tiene ' + mensaje.length + ' de letras')

let contador_de_a = 0
for(let letra of letra_por_letra){
    if(letra === 'a'){
        contador_de_a = contador_de_a + 1
    }
}

console.log("La cantidad de a en la frase es: " + contador_de_a) */



/* Los strings son iterables */
/* let contador_de_a = 0
for(let letra of mensaje){
    if(letra === 'a'){
        contador_de_a = contador_de_a + 1
    }
}


console.log("La cantidad de a en la frase es: " + contador_de_a) */

//                              0    1    2    3
//Para js 'hola' es similar a ['h', 'o', 'l', 'a']

//Por eso toda esta sintaxis es valida
/* console.log('hola'[0]) 
console.log('hola'.length) 
for(let letra of 'hola'){
    console.log(letra)
} */
