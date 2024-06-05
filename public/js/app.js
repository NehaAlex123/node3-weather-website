// // console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

// msg1.textContent='content form client side js'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const locationSearched = search.value
    // console.log(locationSearched)
    msg1.textContent = 'loading...'
    msg2.textContent = ''

    fetch('http://localhost:3000/weather?address=' + locationSearched).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg1.textContent = data.error
                // console.log(data.error)
            } else {
                msg1.textContent = data.location
                msg2.textContent = data.forecast
                // console.log(data.location)
                // console.log(data.forecast)
            }
        })
    })


})