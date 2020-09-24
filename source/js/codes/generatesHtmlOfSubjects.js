import elementOptions from './elementOptions.js'

export default function(json){
/*     import chemistryJson from '../chemistry/chemistryJson.js' */

    let element = elementOptions()
    let links = json

    function loop(nameTopic,array){
        //Recorrer todos los links del array classes
        for(let i=0;i<links[nameTopic][array].length;i++){

            let nameLink = links[nameTopic][array][i]['nameLink'];
            let link = links[nameTopic][array][i]['url'];

        //Ponerlos en formato html los links
            element.addLink(link,nameLink)
        }
    }

    /* Aqui comieza el programa y ordena todo el contenido 
    escrito en el chemistryJson*/

    for(let topic in links){
        let myTopic = links[topic]

        element.addTitleTopic(myTopic['nameClass'])

        let loopInClasses=loop,
            loopInVideos= loop,
            loopInExtras= loop,
            loopInExercises = loop

        if(myTopic['classes']){
            element.addTitle('Teor&#237a Fundamentada')
            loopInClasses(topic,'classes')
        }

        if(myTopic['videos']){
            element.addTitle('Videos')
            loopInVideos(topic,'videos')
        }

        if(myTopic['extras']){
            element.addTitle('Recursos extras')
            loopInExtras(topic,'extras')
        }

        if(myTopic['exercises']){
            element.addTitle('Ejercicios propuestos y resueltos')
            loopInExercises(topic,'exercises')
        }



        element.buildDivElement()
        element.setDefaultValues()
    }

    //Muestra todo en formato html al recorrer todo el chemistryJson.js*/
    element.showElement()

}