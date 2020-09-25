import communicationJson from '../communication/communicationJson.js'
import generatesHtml from '../codes/generatesHtmlOfSubjects.js'

let jsonOfCommunication = communicationJson()
generatesHtml(jsonOfCommunication)

