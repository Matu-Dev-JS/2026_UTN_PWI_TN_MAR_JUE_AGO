let carritoState = [
    {
        titulo: 'tv samsung 42"',
        precio: 3000,
        id: 1,
        cantidad: 3
    },
    {
        titulo: 'tv samsung 52"',
        precio: 4500,
        id: 2,
        cantidad: 1
    }
]

const carrito_HTML = document.getElementById('carrito')

function renderCarrito() {
    let html = ''

    for (let item of carritoState) {
        html = html + `
            <div>
                <h3>${item.titulo} x ${item.cantidad} unidad/es</h3>
                <div>Precio unitario: $${item.precio} ARS</div>
                <div>Subtotal: $${item.cantidad * item.precio} ARS</div>
                <hr/>
            </div>
        `
    }

    carrito_HTML.innerHTML = html
}

function setCarritoState(nuevoValor) {
    carritoState = nuevoValor
    renderCarrito()
}

function vaciarCarrito() {
    setCarritoState([])
}


function agregarAlCarrito(titulo, precio, cantidad) {
    //Clonamos el estado de carrito para poder modificarlo sin modificar el ORIGINAL
    let clonedCarritoState = [...carritoState]

    clonedCarritoState.push({
        titulo: titulo,
        precio: precio,
        cantidad: cantidad,
        id: 1
    })
    setCarritoState(clonedCarritoState)
}

/* 
Crear la funcion eliminarPorId(item_id) busque el item por su id y lo elimine (obviamente NO MODIFIQUEN EL ESTADO, usen el setter)
*/


renderCarrito()


/* let nombre_1 = 'pepe'
let nombre_2 = nombre_1

nombre_2 = 'jose'

console.log(nombre_1) */

/* let nombres_1 = ['pepe', 'maria', 'jose']
let nombres_2 = nombres_1

nombres_2.push("julieta")

console.log(nombres_1 === nombres_2) */

/* 
Spread operator (...) operador de propagacion
Nos permite propagar los valores de un objeto o array sobre otro

*/

/* let nombres_1 = ['pepe', 'maria', 'jose']

//Asi se clona un array
let nombres_2 = [...nombres_1]

nombres_2.push("julieta")

console.log(nombres_1)
console.log(nombres_2) */

function eliminarPorId(item_id) {
    //Clonamos el estado de carrito para poder modificarlo sin modificar el ORIGINAL
    let clonedCarritoState = [...carritoState]
    for (let item of clonedCarritoState) {
        if (item.id === item_id) {
            let indice_item = clonedCarritoState.indexOf(item.id)
            clonedCarritoState.splice(indice_item, 1);
            setCarritoState(clonedCarritoState)
            return true
        }
    }
    return false
}

/* 
incrementarCantidadItem(item_id) si lo encuentra incrementa en 1 la cantidad
decrementarCantidadItem(item_id) si lo encuentra decrementa en 1 la cantidad
*/