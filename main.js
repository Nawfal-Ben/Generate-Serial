let p = document.querySelector('p')
let btn = document.querySelector('button')

chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z", 1, 2, 3, 4, 5, 6, 7, 8, 9]

let serial = ""

for (let i = 0; i < 20; i++) {
    if (i % 4 == 0 && i != 0 && i != 20) {
        serial += "-"
    }
    randIndex = Math.floor(Math.random() * chars.length)
    serial += chars[randIndex]
}

btn.addEventListener("click", function () {
    let serial = ""
    for (let i = 0; i < 20; i++) {
        if (i % 4 == 0 && i != 0 && i != 20) {
            serial += "-"
        }
        randIndex = Math.floor(Math.random() * chars.length)
        serial += chars[randIndex]
    }
    p.innerText = serial
})