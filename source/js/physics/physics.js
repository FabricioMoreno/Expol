import findJsonInDb from '../codes/findJsonInDb.js'
import generatesHtml from '../codes/generatesHtmlOfSubjects.js'

let jsonUrlOfPhysics = 'https://res.cloudinary.com/doekxasxp/raw/upload/v1601251947/jsonSubjects/physicsJson_ub1p35.json'

findJsonInDb(jsonUrlOfPhysics)
.then(json=>generatesHtml(json))