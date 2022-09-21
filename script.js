 const converter = document.querySelector('#converter')
 const result = document.querySelector('.result')
 const convBtn = document.querySelector('.conv')
 const resetBtn = document.querySelector('.reset')
 const changeBtn = document.querySelector('.change')
 const one = document.querySelector('.one')
 const two = document.querySelector('.two')

 let fahrenheit
 let celsius

 const swap = () => {
    if(one.textContent === '°C') {
        one.textContent = '°F'
        two.textContent = '°C'
    } else {
        one.textContent = '°C'
        two.textContent = '°F'
    }
 }
 // T(°F) = T(°C) x 1,8 + 32

// T(°C) = (T(°F) – 32) / 1,8

const fahrToCel = () => {
    fahrenheit  = converter.value * 1.8 + 32
    result.textContent = `${converter.value}°C to ${fahrenheit}°F`
}

 changeBtn.addEventListener('click', swap)
 convBtn.addEventListener('click', fahrToCel)