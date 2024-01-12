const szovegM = document.getElementById('szoveg')
const sebessegM = document.getElementById('sebesseg')
const szoveg = 'Alul gyorsíthatod a szöveg írását...'
let index = 1
let sebesseg = 300 / sebessegM.value

writeText()

function writeText() {
    szovegM.innerText = szoveg.slice(0, index)

    index++

    if(index > szoveg.length) {
        index = 1
    }

    setTimeout(writeText, sebesseg)
}


sebessegM.addEventListener('input', (e) => sebesseg = 300 / e.target.value)