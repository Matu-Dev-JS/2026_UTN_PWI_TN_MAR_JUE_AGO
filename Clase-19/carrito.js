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
                <div>
                    <button 
                        class='increment-cart-btn'
                        data-item-id='${item.id}'
                    >+</button>
                    <span>${item.cantidad}</span>
                    <button 
                        class='decrement-cart-btn'
                        data-item-id='${item.id}'
                    >-</button>
                    <button 
                        class='delete-cart-btn'
                        data-item-id='${item.id}'
                    >Eliminar</button>
                </div>
                <hr/>
            </div>
        `
    }
    
    //A partir de aca se modifico el DOM
    //a partir de aca existen mis elementos
    carrito_HTML.innerHTML = html


    /* 
    Siguendo la logica para incrementar implementar las funcionalidades de decrementar y eliminar (el boton '-' y 'eliminar')
    */

    //llamamos a todos los botones por clase "increment-cart-btn"
    //.getElementsByClassName, nos permite obtener una lista de todos los elementos que tengan cierta clase
    
    const btnIncrementList = document.getElementsByClassName('increment-cart-btn')

    /* 
    Si una funcion es llamada desde un evento, esa funcion recibe el objeto event
    ese objeto event tiene informacion del evento en si, por ejemplo que tipo de evento, desde que elemento se disparo
    */
    function handleIncrementarItem( evento ){
        /* evento.target es el elemento del que se disparo el evento */
        
        const btnClickeado = evento.target
        const item_id = btnClickeado.getAttribute('data-item-id')
        incrementarCantidadItem(Number(item_id))
        
    }

    /* Por cada boton de incremento le asocio la funcionalidad "saludar" al evento click */
    for(const btnIncrement of btnIncrementList){
        btnIncrement.addEventListener(
            'click', handleIncrementarItem
        )
    }
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
    let clonedCarritoState = [...carritoState]
    for (let item of clonedCarritoState) {
        if (item.id === item_id) {
            let indice_item = clonedCarritoState.indexOf(item)
            clonedCarritoState.splice(indice_item, 1);
            setCarritoState(clonedCarritoState)
            return true
        }
    }
    return false
}

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

renderCarrito()



const tituloHTML = document.getElementById('titulo')

//Accediendo desde JS al atributo del elemento 'data-valor-oculto'
console.log(tituloHTML.getAttribute('data-valor-oculto'))

/* 
Los data attributes nos permiten guardar datos en los elementos HTML
*/