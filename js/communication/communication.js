import findJsonInDb from '../codes/findJsonInDb.js'
import generatesHtml from '../codes/generatesHtmlOfSubjects.js'

let jsonUrlOfCommunication = 'https://res.cloudinary.com/doekxasxp/raw/upload/v1601251947/jsonSubjects/communicationJson_djf8zc.json'

findJsonInDb(jsonUrlOfCommunication)
.then(json=>generatesHtml(json))