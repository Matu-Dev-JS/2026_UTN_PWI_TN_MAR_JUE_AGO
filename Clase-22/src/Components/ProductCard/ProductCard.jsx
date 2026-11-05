/* 
TODO COMPONENTE RECIBE: props (propiedades) 
Las props siempre seran de tipo de dato objeto
Las props sirven para transferir informacion a la instancia del componente

La responsabilidad de un componente es mostrar/renderizar cierta pieza/parte/componente de la pagina
Lo QUE DIFERENCIA a un componente de una funcion es que el COMPONENTE retorna JSX
Y no se INVOCA se INSTANCIAN con la sintaxis "as a component"
*/

function ProductCard (props){


    let descuento_badge = null

    if(props.descuento && props.descuento > 0){
        descuento_badge = <span>%{props.descuento} OFF</span>
    }

    return (
        <div>
            <h2>{props.titulo}</h2>
            <p>{props.descripcion}</p>
          
            <span>Precio: ${props.precio} ARS</span>
            {descuento_badge}



            {/* {
            props.descuento 
            && 
            props.descuento > 0 
            && 
            <span>%{props.descuento} OFF</span>
            } */}
            <button>Comprar</button>
        </div>
    )
}

export default ProductCard
