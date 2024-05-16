const container = document.querySelector('.container');
const search = document.querySelector('.search-box button');
const weatherBox = document.querySelector('.weather-box');
const weatherDetails = document.querySelector('.weather-details');


search.addEventListener('click', () => {

    const APIKey = 'ea837899c3e78816fa642dd545ce38ff';
    const city = document.querySelector('.search-box input').value;

    if (city == '') 
        return;
    
    fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}').then((response) => response.json()).then(json => {

        const image = document.querySelector('.weather-box img');
        const image = document.querySelector('.weather-box img');
        const image = document.querySelector('.weather-box img');

    });

});