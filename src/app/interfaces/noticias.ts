export interface Noticias {
    
    id:number;
    idCategoria:number;
    nombreNoticia:string;
    autor:string;
    fecha:string;
    noticiaCorta:string;
    noticiaEntera:string;
    imagen:string;
    destacada:boolean;

}

export let noticias:Array<Noticias>=[
    {
        id:1,
        idCategoria:1,
        nombreNoticia:'Errores en el juego del calamar',
        autor:'Paolo Crotti',
        fecha:Date().toString(),
        imagen:'imagen1',
        noticiaCorta:'"El que no quiera jugar será eliminado". Esa es la invitación',
        noticiaEntera:'"El que no quiera jugar será eliminado". Esa es la invitación que reciben los cientos de participantes en el Juego del Calamar de Netflix, una serie en la que han aceptado la invitación para verla más de 140 millones de personas en el mundo. Uno de los mayores fenómenos de la plataforma de la N ¿Pero cuántos se habrán dado cuenta de los gazapos, errores de continuidad o de montaje que hay escondidos en ella?',
        destacada:false,
    },
    {
        id:2,
        idCategoria:2,
        nombreNoticia:'¿Que es el calentamiento global y cuáles son sus consecuencias?',
        autor:'Diego Lamas',
        fecha:Date().toString(),
        imagen:'imagen2',
        noticiaCorta:'El calentamiento global',
        noticiaEntera:'El calentamiento global resulta del aumento del efecto invernadero, un proceso en el que la radiación térmica emitida por la Tierra queda atrapada en la atmósfera debido a los gases con ese efecto (GEI). Su presencia es natural y necesaria para mantener la temperatura del planeta en unos valores habitables. El problema es que las emisiones de gases como el metano o el óxido nitroso se han disparado en comparación con la era preindustrial. "Las emisiones antropogénicas recientes de GEI son las más altas de la historia", señala el último informe del IPCC.',
        destacada:true,
    },
    {
        id:3,
        idCategoria:3,
        nombreNoticia:'¿Posible balón de oro?',
        autor:'Daniel Della chiara',
        fecha:Date().toString(),
        imagen:'imagen3',
        noticiaCorta:'En las últimas horas, comenzó a circular en redes una foto de los supuestos resultados',
        noticiaEntera:'En las últimas horas, comenzó a circular en redes una foto de los supuestos resultados finales de la votación por el Balón de Oro, que tendrían a Robert Lewandowski como ganador y a Lionel Messi en el segundo puesto. El tercero sería Benzema. ¿CR7? Ni en el Top 5... El 29 de noviembre, que es el día en que tendrá lugar la ceremonia de premiación, recién nos enteraremos si este post era verdad o no',
        destacada:true,
    },
    {
        id:4,
        idCategoria:4,
        nombreNoticia:'Farkas lo pierde todo',
        autor:'Rodrigo Narvaez',
        fecha:Date().toString(),
        imagen:'imagen4',
        noticiaCorta:'El millonario Leonardo Farkas luego de una inversión catastrófica, podría decirse la más terrible',
        noticiaEntera:'El millonario Leonardo Farkas luego de una inversión catastrófica, podría decirse la más terrible de su carrera, ha perdido el 80% de sus acciones en el mercado de la mineria',
        destacada:true,
    },
    {
        id:5,
        idCategoria:5,
        nombreNoticia:'La medicina digital',
        autor:'Javier "Mickey"',
        fecha:Date().toString(),
        imagen:'imagen5',
        noticiaCorta:'¿Cuántas veces hemos oído decir ‘internet ha transformado la vida',
        noticiaEntera:'¿Cuántas veces hemos oído decir ‘internet ha transformado la vida moderna’? No solo ha cambiado nuestra manera de relacionarnos con los demás (amigos o familiares), de comprar y de acceder a servicios como la compra de entradas. También lo ha hecho en nuestra manera de prestar y recibir atención médica.',
        destacada:false,
    },
    {
        id:6,
        idCategoria:6,
        nombreNoticia:'Precios iphone 13 chile',
        autor:'Sebastian Montiel',
        fecha:Date().toString(),
        imagen:'imagen6',
        noticiaCorta:'Pese a su alto costo, los modelos de este año son ligeramente más económicos que',
        noticiaEntera:'Pese a su alto costo, los modelos de este año son ligeramente más económicos que en su versión anterior, aunque también tiene que ver con que este año dejaron de fabricar iPhone con 64 GB de almacenamiento y todos parten desde los 128 GB hasta 1 TB.',
        destacada:false,
    },
    {
        id:3,
        idCategoria:3,
        nombreNoticia:'Humillación del liverpool al manchester united de CR7',
        autor:'Carlos Soto',
        fecha:Date().toString(),
        imagen:'imagen7',
        noticiaCorta:'Un baile brutal, con un Mohamed Salah',
        noticiaEntera:'Un baile brutal, con un Mohamed Salah en llamas le propina Liverpool a Manchester United en la Premier League, lo que generó la furia de Cristiano Ronaldo.',
        destacada:false,
    },

]
