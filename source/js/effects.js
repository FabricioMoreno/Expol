const subjects = document.getElementById('subjects')
const hr = document.getElementById('hr')

function sizeTheLine(){
    hr.style.width='30%'
}
function normalLine(){
    hr.style.width='50%'
}
subjects.addEventListener('mouseover',sizeTheLine)
subjects.addEventListener('mouseout',normalLine)