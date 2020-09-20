export default function elementOptions (){
    let bodyHtml = document.getElementById('main')
    let titleTopic = '';
    let linksTopic = ''
    let innerDivTopic ='';
    let divTopic='';
    let allDivsTopic ='';
/*
    allDivsTopic-> Es una recopilacion de todos los divs o todos los temas con clase TOPIC que estaran insertados dentre del padre llamado main
    divTopic->Es un solo div que contiene un tema del json
    innerDivTopic->Tendran un header y los links que estaran insertadas dentro de cada allDivsTopic
*/
    return {
        getLinks:function(){
            return innerDivTopic
        },
        addLink:function(link,nameLink){
            linksTopic+=`
            <a href=${link}>${nameLink}</a>
            ` 
        },
        addTitle:function(title){
            titleTopic +=`<h2>${title}</h2>`
        },
        //Construye cada tema en un solo div
        buildDivElement:function(){
            innerDivTopic =`
            <header>
                ${titleTopic} 
            </header>
            <div class="links">
                ${linksTopic}
            </div>`

            divTopic = `
            <div class='topic'>
            ${innerDivTopic}
            </div>`

            allDivsTopic+=divTopic
        },
        addHeader:function(nameTopic){
            headerTopic+=nameTopic;
        },
        showElement:function(){
            bodyHtml.innerHTML = allDivsTopic
            this.setDefaultValues()
        },
        //Setea los valores como cadenas vacias
        setDefaultValues:function(){
            titleTopic=''
            linksTopic=''
        },
        getAllDivsTopic:function(){
            return allDivsTopic
        }
    }
}
