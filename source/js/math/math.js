import findJsonInDb from '../codes/findJsonInDb.js'
import generatesHtml from '../codes/generatesHtmlOfSubjects.js'

let jsonUrlOfMath = 'https://res.cloudinary.com/doekxasxp/raw/upload/v1601251947/jsonSubjects/mathJson_wzfkfb.json'

findJsonInDb(jsonUrlOfMath)
.then(json=>generatesHtml(json))