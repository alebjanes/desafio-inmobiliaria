const propiedadesAlquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60",
        descripcion: "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
        ubicacion: `123 Main Street,
                    Anytown, CA 91234`,
        habitaciones: 2,
        banos: 2,
        costo: 2000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento luminoso con vista al mar',
        src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: `456 Ocean Avenue,
                    Seaside Town, CA 56789`,
        habitaciones: 3,
        banos: 3,
        costo: 2500,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: `123 Main Street,
                    Anytown, CA 91234`,
        habitaciones: 2,
        banos: 2,
        costo: 2200,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Cabaña rústica en el bosque',
        src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: 'Tranquila cabaña rústica en el bosque, ideal para escapadas de fin de semana',
        ubicacion: `789 Forest Road,
                    Woodland Hills, CA 34567`,
        habitaciones: 1,
        banos: 1,
        costo: 800,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa en los suburbios con jardín',
        src: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: 'Casa espaciosa en los suburbios con un hermoso jardín y espacio para mascotas',
        ubicacion: `901 Suburb Lane,
                    Suburbia, CA 67890`,
        habitaciones: 4,
        banos: 3,
        costo: 3000,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa con piscina y vista al mar',
        src: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: 'Tranquila cabaña rústica en el bosque, ideal para escapadas de fin de semana',
        ubicacion: `123 Beach Road,
                    Coastal Town, CA 78901`,
        habitaciones: 2,
        banos: 2,
        costo: 2500,
        smoke: true,
        pets: false
    }
]

const propiedadesVenta = [
    {
        nombre: 'Apartamento de lujo en zona exclusiva',
        src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
        descripcion: "Este apartamento de lujo está ubicado en una exclusiva zona residencial",
        ubicacion: `123 Luxury Lane,
                    Prestige Suburb, CA 45678`,
        habitaciones: 4,
        banos: 4,
        costo: 5000,
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: `789 Mountain Road,
                    Summit Peaks, CA 23456`,
        habitaciones: 2,
        banos: 1,
        costo: 1200,
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: `567 Skyline Avenue,
                    Skyview City, CA 56789`,
        habitaciones: 3,
        banos: 3,
        costo: 4500,
        smoke: false,
        pets: true
    },
    {
        nombre: 'Casa de campo con jardín',
        src: "https://images.unsplash.com/photo-1586982599726-11708daaceca?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: 'Casa de campo con un hermoso jardín y espacio para mascotas',
        ubicacion: `123 Country Lane, 
                    Rural Area, CA 67890`,
        habitaciones: 3,
        banos: 2,
        costo: 4000,
        smoke: true,
        pets: true  
    },
    {
        nombre: 'Casa en la playa',
        src: "https://images.unsplash.com/photo-1631528858266-5ebeb8bfc6f5?q=80&w=3360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: 'Casa en la playa con acceso directo a la playa y vistas al mar',
        ubicacion: `9067 Beach Road, 
                    Coastal Town, CA 78901`,
        habitaciones: 2,
        banos: 2,
        costo: 6000,
        smoke: true,
        pets: true  
    },
    {
        nombre: 'Studio moderno en el centro',
        src: "https://images.unsplash.com/photo-1702014862053-946a122b920d?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: 'Este moderno estudio está ubicado en el centro de la ciudad, ideal para estudiantes',
        ubicacion: `123 Main Street,
                    Anytown, CA 91234`,
        habitaciones: 1,
        banos: 1,
        costo: 1100,
        smoke: false,
        pets: false  
    },
    {
        nombre: 'Amplio apartamento en la ciudad',
        src: "https://images.unsplash.com/photo-1539922631499-09155cc609a4?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        descripcion: 'Este amplio apartamento está ubicado en el centro de la ciudad, cerca de tiendas y restaurantes',
        ubicacion: `456 City Center,
                    Urban Area, CA 12345`,
        habitaciones: 3,
        banos: 3,
        costo: 5000,
        smoke: false,
        pets: true  
    }
]

function generarTemplate(propiedad) {
    return `
        <div class="col-md-4 mb-4">
            <div class="card">
              <img
                src=${propiedad.src}
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                  ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones === 1 ? propiedad.habitaciones + " Habitación" : propiedad.habitaciones + " Habitaciones"} |
                  <i class="fas fa-bath"></i> ${propiedad.banos === 1 ? propiedad.banos + " Baño" : propiedad.banos + " Baños"}
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${new Intl.NumberFormat('en-US').format(propiedad.costo)}</p>
                
                ${propiedad.smoke ? 
                    `<p class="text-success">
                        <i class="fas fa-smoking"></i> Permitido fumar
                    </p>` 
                    : `<p class="text-danger">
                        <i class="fas fa-smoking-ban"></i> No se permite fumar
                    </p>` 
                }

                ${propiedad.pets ? 
                    `<p class="text-success">
                        <i class="fas fa-paw"></i> Mascotas permitidas
                    </p>`
                    : `<p class="text-danger">
                        <i class="fas fa-ban"></i> No se permiten mascotas
                    </p>`
                }
              </div>
            </div>
          </div>
        `; 
}

let htmlPropiedadesVenta = ""

for (const propiedad of propiedadesVenta) {
    htmlPropiedadesVenta += generarTemplate(propiedad)
}

let htmlPropiedadesAlquiler = ""

for (const propiedad of propiedadesAlquiler) {
    htmlPropiedadesAlquiler += generarTemplate(propiedad)
}

// Paginas secundarias

let elementDivEnVenta = document.querySelector("#en-venta-1")
if (elementDivEnVenta) {
    elementDivEnVenta.innerHTML = htmlPropiedadesVenta
}

let elementDivAlquiler = document.querySelector("#alquiler-1")
if (elementDivAlquiler) {
    elementDivAlquiler.innerHTML = htmlPropiedadesAlquiler
}

// Pagina principal

let elementDivEnVentaPrincipal = document.querySelector("#en-venta-2")
if (elementDivEnVentaPrincipal) {
    let html = ""
    for (let i = 0; i < 3; i++) {
        html += generarTemplate(propiedadesVenta[i])
    }
    elementDivEnVentaPrincipal.innerHTML = html
}

let elementDivAlquilerPrincipal = document.querySelector("#alquiler-2")
if (elementDivAlquilerPrincipal) {
    let html = ""
    for (let i = 0; i < 3; i++) {
        html += generarTemplate(propiedadesAlquiler[i])
    }
    elementDivAlquilerPrincipal.innerHTML = html
}
