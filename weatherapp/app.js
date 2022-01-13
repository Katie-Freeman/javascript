// const getWeatherURL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city}},&appid=493c38825ee1a38967355f1487534ebb&units=imperial`
const weatherDiv = document.getElementById("weatherDiv")
const submitBtn = document.getElementById("submitBtn")
const cityInput = document.getElementById("cityInput")
const locationForm = document.getElementById("locationForm")


locationForm.addEventListener("submit", function (event) {
    event.preventDefault()
    
    getWeather()
})

 function getWeather() {
    let city = cityInput.value
    const getWeatherURL = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},&appid=493c38825ee1a38967355f1487534ebb&units=imperial`

    fetch(getWeatherURL, {
        method:'GET',
        headers:{
            'Content-Type' : 'application/json'
        }
    }).then( response => {

        return response.json()
        
    }).then(result => { 
        return displayWeather(result)
    })

 }

function displayWeather(weatherData) {

// const city = weatherData.name
// const pressure = weatherData.main.pressure
// const lowTemp = weatherData.main.temp_min
// const highTemp = weatherData.main.temp_max
// const feelsLike = weatherData.main.feels_like

const { 
    name: city, 
    main: { 
        pressure,
        temp_min: lowTemp,
        temp_max: highTemp,
        feels_like: feelsLike, 
    }
} = weatherData;

        const weatherItems = `
        <div>
            <p>City Name: ${city}<p>
            <p>Low Temperature: ${lowTemp}<p>
            <p>High Temperature: ${highTemp}<p>
            <p>Pressure: ${pressure}<p>
            <p>Feels Like: ${feelsLike}<p>
        <div>
        `

    weatherDiv.innerHTML = weatherItems
}
