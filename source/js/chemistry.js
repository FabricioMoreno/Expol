const linksContainer = document.getElementById('links')

const links = {
    topic1:{
        name:'LA TABLA PERIÓDICA Y LEY PERIÓDICA',
        classes:[
            {
                nameLink:'Guía_lectura_1.1_la_tabla_periódica_historia_y_clasificación-1_ntvvpk',
                url:'https://res.cloudinary.com/doekxasxp/image/upload/v1598825459/Chemistry/LA%20TABLA%20PERI%C3%93DICA%20Y%20LEY%20PERI%C3%93DICA/Gu%C3%ADa_lectura_1.1_la_tabla_peri%C3%B3dica_historia_y_clasificaci%C3%B3n-1_ntvvpk.pdf'
            },
            {
                nameLink:'LECTURA_1.1_-_Tabla_periódica_história_y_clasificación-1_wqwt6k',
                url:'https://res.cloudinary.com/doekxasxp/image/upload/v1598825459/Chemistry/LA%20TABLA%20PERI%C3%93DICA%20Y%20LEY%20PERI%C3%93DICA/LECTURA_1.1_-_Tabla_peri%C3%B3dica_hist%C3%B3ria_y_clasificaci%C3%B3n-1_wqwt6k.pdf'
            },
            {
                nameLink:'Guía_lectura_1.2_Tabla_periódica_propiedades._wb1fi5',
                url:'https://res.cloudinary.com/doekxasxp/image/upload/v1598825459/Chemistry/LA%20TABLA%20PERI%C3%93DICA%20Y%20LEY%20PERI%C3%93DICA/Gu%C3%ADa_lectura_1.2_Tabla_peri%C3%B3dica_propiedades._wb1fi5.pdf'
            },
            {
                nameLink:'LECTURA_1.2_-_Tabla_periódica_Propiedades._eymhs2',
                url:'https://res.cloudinary.com/doekxasxp/image/upload/v1598825459/Chemistry/LA%20TABLA%20PERI%C3%93DICA%20Y%20LEY%20PERI%C3%93DICA/LECTURA_1.2_-_Tabla_peri%C3%B3dica_Propiedades._eymhs2.pdf'
            }
        ],
        exercises:[
            'https://res.cloudinary.com/doekxasxp/image/upload/v1598825459/Chemistry/LA%20TABLA%20PERI%C3%93DICA%20Y%20LEY%20PERI%C3%93DICA/Problemas_resueltos_Tabla_peri%C3%B3dica_propiedades_peri%C3%B3dicas._d5as6f.pdf',
            'https://res.cloudinary.com/doekxasxp/image/upload/v1598825459/Chemistry/LA%20TABLA%20PERI%C3%93DICA%20Y%20LEY%20PERI%C3%93DICA/Problemas_resueltos_Tabla_peri%C3%B3dica_historia_clasificaci%C3%B2n_pafhes.pdf'
        ]
    },
    topic2:{
        name:'LA TAdfsdIÓDICA Y LEY PERIÓDICA',
        classes:[
            {
                nameLink:'Guía_lectura_1.1_la_tabla_periódica_historia_y_clasificación-1_ntvvpk',
                url:'https://res.cloudinary.com/doekxasxp/image/upload/v1598825459/Chemistry/LA%20TABLA%20PERI%C3%93DICA%20Y%20LEY%20PERI%C3%93DICA/Gu%C3%ADa_lectura_1.1_la_tabla_peri%C3%B3dica_historia_y_clasificaci%C3%B3n-1_ntvvpk.pdf'
            },
            {
                nameLink:'LECTURA_1.1_-_Tabla_periódica_história_y_clasificación-1_wqwt6k',
                url:'https://res.cloudinary.com/doekxasxp/image/upload/v1598825459/Chemistry/LA%20TABLA%20PERI%C3%93DICA%20Y%20LEY%20PERI%C3%93DICA/LECTURA_1.1_-_Tabla_peri%C3%B3dica_hist%C3%B3ria_y_clasificaci%C3%B3n-1_wqwt6k.pdf'
            },
            {
                nameLink:'Guía_lectura_1.2_Tabla_periódica_propiedades._wb1fi5',
                url:'https://res.cloudinary.com/doekxasxp/image/upload/v1598825459/Chemistry/LA%20TABLA%20PERI%C3%93DICA%20Y%20LEY%20PERI%C3%93DICA/Gu%C3%ADa_lectura_1.2_Tabla_peri%C3%B3dica_propiedades._wb1fi5.pdf'
            },
            {
                nameLink:'LECTURA_1.2_-_Tabla_periódica_Propiedades._eymhs2',
                url:'https://res.cloudinary.com/doekxasxp/image/upload/v1598825459/Chemistry/LA%20TABLA%20PERI%C3%93DICA%20Y%20LEY%20PERI%C3%93DICA/LECTURA_1.2_-_Tabla_peri%C3%B3dica_Propiedades._eymhs2.pdf'
            }
        ],
        exercises:[
            'https://res.cloudinary.com/doekxasxp/image/upload/v1598825459/Chemistry/LA%20TABLA%20PERI%C3%93DICA%20Y%20LEY%20PERI%C3%93DICA/Problemas_resueltos_Tabla_peri%C3%B3dica_propiedades_peri%C3%B3dicas._d5as6f.pdf',
            'https://res.cloudinary.com/doekxasxp/image/upload/v1598825459/Chemistry/LA%20TABLA%20PERI%C3%93DICA%20Y%20LEY%20PERI%C3%93DICA/Problemas_resueltos_Tabla_peri%C3%B3dica_historia_clasificaci%C3%B2n_pafhes.pdf'
        ]
    },
    
}

import elementOptions from './codes/elementOptions.js'
let element = elementOptions()

for(let topic in links){
    element.addTitle(links[topic]['name'])
    
    for(let i=0;i<links[topic]['classes'].length;i++){

        let nameLink = links[topic]['classes'][i]['nameLink'];
        let link = links[topic]['classes'][i]['url'];

        element.addLink(link,nameLink)
    }

    element.buildDivElement()
    element.setDefaultValues()
}
console.log(element.getAllDivsTopic())
element.showElement()


