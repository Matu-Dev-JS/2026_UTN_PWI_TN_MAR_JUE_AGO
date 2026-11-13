import { useState } from "react"

function FormAltaProducto() {
    /* Formularios controlados */
    /* 
    Un estado se sincroniza en tiempo real con el formulario
    */

    const initialStateForm = { title: '', price: '' }
    const [formState, setFormState] = useState(initialStateForm)

    const [productos, setProductos] = useState([])


    function manejarCambioInput(evento) {
        const campo = evento.target
        const nombre_campo = campo.name
        const valor_campo = campo.value

        //Clonamos el estado para no violar la regla de inmutabilidad de los estados
        const cloneFormState = { ...formState }

        //Modificamos cierto campo del estado clonado (puede ser "price" o "title")
        cloneFormState[nombre_campo] = valor_campo

        //Guardamos el estado clonado como nuevo valor de estado de formulario
        setFormState(cloneFormState)
    }
    const nombres_prohebidos = ['cosme fulanito', 'test']

    let tituloMinCaracteres = formState.title && formState.title.length < 3
    let tituloEstaProhebido = formState.title && nombres_prohebidos.includes(formState.title)

    function manejarAltaProducto(evento) {
        evento.preventDefault()

        const clonedProductos = [...productos]
        clonedProductos.push({
            title: formState.title,
            price: formState.price,
            id: productos.length + 1
        })
        setProductos(clonedProductos)
    }

    console.log(productos)

    let productos_jsx = []
    for (let producto of productos) {
        productos_jsx.push(<div>
            <h3>{producto.title}</h3>
            <div>Precio: ${producto.price} ARS</div>
            <button>Comprar</button>
            <hr />
        </div>)
    }

    return (
        <div>
            <h1>Alta de producto</h1>
            <form onSubmit={manejarAltaProducto}>
                <div>
                    <label htmlFor="title">Titulo del producto:</label>
                    <input
                        type='text'
                        name='title'
                        id='title'
                        value={formState.title}
                        onChange={manejarCambioInput}
                    />
                    <ul>
                        {
                            tituloMinCaracteres
                            &&
                            <li>Debes ingresar un titulo de almenos 3 caracteres</li>
                        }
                        {
                            tituloEstaProhebido
                            &&
                            <li>No puedes usar de titulo la palabra {formState.title}</li>
                        }
                    </ul>
                </div>



                <div>
                    <label htmlFor="price">Precio del producto:</label>
                    <input
                        type="number"
                        name='price'
                        id='price'
                        value={formState.price}
                        onChange={manejarCambioInput}
                    />
                </div>
                <button
                    disabled={
                        formState.title === ''
                        ||
                        formState.price === ''
                        ||
                        tituloMinCaracteres
                        ||
                        tituloEstaProhebido
                    }>
                    Dar de alta
                </button>
            </form>

            <h2>Listado de productos:</h2>
            <div>
                {productos_jsx}
            </div>
        </div>
    )
}

export default FormAltaProducto