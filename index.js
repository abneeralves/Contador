const adicionar = document.getElementById('mais')
const resultado = document.getElementById('valor')
const subtrair = document.getElementById('menos')
const resetar = document.getElementById('rest')

let contador = 0
let intervalId = 0

const updateValue = () => {
    resultado.innerHTML = contador
}

adicionar.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        contador += 1
        updateValue()
    }, 60)
})

subtrair.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        contador -= 1
        updateValue()
    }, 60)
})

resetar.addEventListener('click', () => {
    contador = 0
    updateValue()
})


document.addEventListener('mouseup', () => clearInterval(intervalId))