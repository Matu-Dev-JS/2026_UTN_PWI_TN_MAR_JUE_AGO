export const initialContactState = [
    {
        nombre: 'Pepe',
        id: 1,
        ultima_conexion: 'Hoy 17:30',
        estado: 'Baila y se feliz que la vida es una.',
        mensajes: [
            {
                autor: 'YO',
                contenido: "Hola!",
                estado: "VISTO",
                fecha: "Hoy a las 15:30"
            },
            {
                autor: 'Pepe',
                contenido: "Hola!",
                estado: "VISTO",
                fecha: "Hoy a las 16:30"
            },
            {
                autor: 'YO',
                contenido: "Que tal?",
                estado: "RECIBIDO",
                fecha: "Hoy a las 19:30"
            }
        ]
    },
    {
        nombre: 'Maria',
        id: 2,
        ultima_conexion: 'Hoy 14:30',
        estado: 'Siempre de dia',
        mensajes: [
            {
                autor: 'YO',
                contenido: "Hola!",
                estado: "VISTO",
                fecha: "Hoy a las 15:30"
            },
            {
                autor: 'Pepe',
                contenido: "Hola!",
                estado: "VISTO",
                fecha: "Hoy a las 16:30"
            },
            {
                autor: 'YO',
                contenido: "sigsag?",
                estado: "RECIBIDO",
                fecha: "Hoy a las 19:30"
            }
        ]
    }
]

/* 
Todo archivo JS podria ser JSX 
TODO ARCHIVO JSX NO SIEMPRE ES COMPATIBLE CON JS
*/