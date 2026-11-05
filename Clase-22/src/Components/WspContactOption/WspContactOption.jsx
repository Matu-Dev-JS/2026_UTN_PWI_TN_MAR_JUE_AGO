function WspContactOption(props) {
    let mensajes_no_leidos = null
    if (props.cantidad_mensajes_no_leidos > 1) {
        mensajes_no_leidos = (
            <span>Mensajes no leidos:{props.cantidad_mensajes_no_leidos}</span>
        )
    }
    return (
        <div>
            <h2>{props.nombre}</h2>
            <p>{props.ultimo_mensaje}</p>
            <span>{props.fecha}</span>
            {mensajes_no_leidos}
        </div>
    )
}
export default WspContactOption