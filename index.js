const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');
const error404 = document.querySelector('.not-found');


search.addEventListener('click', () => {

    const APIKey = 'ea837899c3e78816fa642dd545ce38ff';
    const city = document.querySelector('.search-box input').value;

    if (city == '') 
        return;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then((response) => response.json()).then(json => {

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');


        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'img/clear.png';
                break;

            case 'Rain':
                image.src = 'img/rain.png';
                break;

            case 'Snow':
                image.src = 'img/snow.png';
                break;      

            case 'Clouds':
                image.src = 'img/cloud2.png';
                break;

            case 'Mist':
                image.src = 'img/mist.png';
                break;

            case 'Haze':
                image.src = 'img/haze.png';
                break;
        
            default:
                image.src = 'img/cloud1.png';
        }


        temperature.innerHTML = `${parseInt(json.main.temp)}<span>&#176;C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

    });

});