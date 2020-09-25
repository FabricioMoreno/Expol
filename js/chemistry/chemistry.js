import chemistryJson from '../chemistry/chemistryJson.js'
import generatesHtml from '../codes/generatesHtmlOfSubjects.js'

let jsonOfChemistry = chemistryJson()
generatesHtml(jsonOfChemistry)