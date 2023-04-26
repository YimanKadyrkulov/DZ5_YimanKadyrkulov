const som = document.querySelector('#som')
const usd = document.querySelector('#usd')
const eur = document.querySelector('#eur')

const convertCurrency = (fromCurrency, toCurrency, amount) => {
    const request = new XMLHttpRequest()
    request.open("GET", "data.json")
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
        const response = JSON.parse(request.response)
        const fromRate = response[fromCurrency]
        const toRate = response[toCurrency]
        const result = (amount * fromRate / toRate).toFixed(2)
        document.querySelector(`#${toCurrency}`).value = result || ''
    }
}

som.addEventListener('input', () => {
    const amount = som.value
    if (amount) {
        convertCurrency('som', 'usd', amount)
        convertCurrency('som', 'eur', amount)
    } else {
        usd.value = ''
        eur.value = ''
    }
})

usd.addEventListener('input', () => {
    const amount = usd.value
    if (amount) {
        convertCurrency('usd', 'som', amount)
        convertCurrency('usd', 'eur', amount)
    } else {
        som.value = ''
        eur.value = ''
    }
})

eur.addEventListener('input', () => {
    const amount = eur.value
    if (amount) {
        convertCurrency('eur', 'som', amount)
        convertCurrency('eur', 'usd', amount)
    } else {
        som.value = ''
        usd.value = ''
    }
})
