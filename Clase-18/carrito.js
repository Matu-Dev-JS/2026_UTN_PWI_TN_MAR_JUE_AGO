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
decrementarCantidadItem(item_id) 
    si lo encuentra 
        Verificar si la cantidad es 1, si lo es, debe eliminar el item del carrito
        Sino decrementa en 1 la cantidad
*/

function incrementarCantidadItem(item_id) { 
    let clonedCarritoState = [...carritoState];
    for (let item of clonedCarritoState) {
        if (item.id === item_id) {
            item.cantidad = item.cantidad + 1;
            break; 
        }
    }
    setCarritoState(clonedCarritoState);
}


function decrementarCantidadItem(item_id) {
    let clonedCarritoState = [...carritoState]
    for (let item of clonedCarritoState) {
        if (item.id === item_id) {
            if(item.cantidad === 1){
                eliminarPorId(item_id)
            }
            else{
                item.cantidad = item.cantidad - 1
                setCarritoState(clonedCarritoState)
            }
            
            return true
        }
    }
    return false
}



/* 
Definicion: Explicar que va a hacer la funcion
Invocacion o llamada de la funcion
*/

//primera impresion en pantalla
renderCarrito()



