/* 
DOM: Document Object Model
Interfaz para poder manipular desde JS el HTML de nuestra pagina
*/

//Este H1 se insertara en el HTML de la pagina al momento de leerse el script.js
/* let username = 'pepe'
document.write('<h1>Hola ' + username + '</h1>') */



//let username = 'pepe'
/* 
Nosotros podemos llamar a un elemento del HTML mediante JS usando .getElementById, esto buscara el elemento en el HTML si lo encuentra devolvera un objeto que representa la informacion de ese elemento. Sino devolvera un null
*/
//let titulo = document.getElementById('titulo')

//.dir nos permite quitarle los formatos de estilos a la consola
//console.dir(titulo)

/* 
innerText permite modificar el texto interno de un elemento
*/
/* titulo.innerText = 'Hola ' + username


let user_data = {
    username: 'pepe',
    email: 'pepe@gmail.com',
    id: 1
}

let user_info = document.getElementById('user-info')
 */

/* user_info.innerHTML = '<hr> <span>ID: #' + user_data.id + '</span><h2>' + user_data.username + '</h2><span>Email: ' + user_data.email+ '</span>' */

//O pueden usar templete strings
//Es una forma mas practica de escribir un string, especialmente util cuando tenes que concatenenar mucho
/* user_info.innerHTML = `
    <hr>
    <span>ID: #${user_data.id}</span>
    <h2>${user_data.username}</h2>
    <span>Email: ${user_data.email}</span>
` */


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

let users_list = document.getElementById('users-list')

let html = ''

for(let usuario of usuarios){
    html = html + `
        <span>ID #${usuario.id}</span>
        <h2>${usuario.nombre}</h2>
        <span>Email: ${usuario.email}</span>
        <hr>
    `
}
/* 
cuando modifican el innerHTML a nivel de recursos es una operacion costosa
Esto no quiere decir que NUNCA deben usar innerHTML, quiere decir que debemos hacer un uso moderado y responsable. Usarlo la minima cantidad de veces y solo cuando es necesario
*/
users_list.innerHTML = html