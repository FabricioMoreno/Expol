export default function elementOptions (){
    let bodyHtml = document.getElementById('allTopics')
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
            <p class='links_single'><a href=${link} target="_blank">${nameLink}</a></p>
            ` 
        },
        addTitleTopic:function(title){
            titleTopic +=`<h2 class='headerTopic_title'>${title}</h2>`
        },
        addTitle:function(title){
            linksTopic+=`<h3 class='links_title'>${title}</h3>`
        },
        //Construye cada tema en un solo div
        buildDivElement:function(){
            innerDivTopic =`
            <header class='headerTopic'>
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
