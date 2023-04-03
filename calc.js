let input = document.getElementById('campo')
let botaoIgual = document.getElementById('calcular')
let historyInner = document.getElementById('results-history')

function history() {
    historyInner.innerHTML += `<span>${input.value}</span>`
}

function calc() {
    let number = input.value.replace(/x/gi, '*')

    if (input.value !== '') {
        input.value = (eval(number))
    }
    historyInner.innerHTML += `<p>${input.value}</p>`
}

botaoIgual.addEventListener('click', history)
botaoIgual.addEventListener('click', calc)


const botoes = document.querySelectorAll('.number')
function btn(id) {
    const operacoes = [...document.querySelectorAll('.operacao')]
    const zero = document.getElementById('zero')
    const virgula = document.getElementById('virgula')
    const clear = document.getElementById('clear')

    clear.onclick = () => {
        input.value = ''
    }
    operacoes[0].onclick = () => {
        input.value += '+'
    }
    operacoes[1].onclick = () => {
        input.value += '-'
    }
    operacoes[2].onclick = () => {
        input.value += 'x'
    }
    operacoes[3].onclick = () => {
        input.value += '/'
    }
    zero.onclick = () => {
        input.value += 0
    }
    virgula.onclick = () => {
        input.value += '.'
    }
    botoes[id].onclick = () => {
        input.value += id + 1
    }

}

for (i = 0; i <= botoes.length; i++) {
    btn(i)
}
