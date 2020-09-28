import findJsonInDb from '../codes/findJsonInDb.js'
import generatesHtml from '../codes/generatesHtmlOfSubjects.js'

let jsonUrlOfChemistry = 'https://res.cloudinary.com/doekxasxp/raw/upload/v1601251947/jsonSubjects/chemistryJson_ayzyew.json'

findJsonInDb(jsonUrlOfChemistry)
.then(json=>generatesHtml(json))