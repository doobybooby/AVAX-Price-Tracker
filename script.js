const avaxPrice = document.getElementById('avax--value')
let ws = new WebSocket('wss:stream.binance.com:9443/ws/avaxusdt@trade')
let lastPrice = null
ws.onmessage = (event) => {
    let coinObject = JSON.parse(event.data)
    let price = parseFloat(coinObject['p']).toFixed(2)
    avaxPrice.innerText = `$${price}`
    if(price>lastPrice) avaxPrice.style.color = 'green'
    else avaxPrice.style.color = 'red'
    lastPrice = price
}

const info = document.getElementById('info')
const themeToggleButton = document.querySelector('.theme-toggle-button').addEventListener('click', ()=>{
    document.body.classList.toggle('dark')
    document.getElementById('info').classList.toggle('dark')
})