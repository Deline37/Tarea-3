
export interface CategoriaNoticias {
    
    nombre:string;
    id:number;
    color:string;

}


export let categorias:Array<CategoriaNoticias>=[
    {
        nombre:'Entretenimiento',
        id:1,
        color:'verde'
    },
    {
        nombre:'Mundo',
        id:2,
        color:'azul'
    },
    {
        nombre:'Deporte',
        id:3,
        color:'darkRed'
    },
    {
        nombre:'Economía',
        id:4,
        color:'violeta'
    },
    {
        nombre:'Salud',
        id:5,
        color:'darkBlue'
    },
    {
        nombre:'Tecnología',
        id:6,
        color:'rojo'
    },
]