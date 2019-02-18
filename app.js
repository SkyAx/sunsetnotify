const cmd = require('node-cmd');
const cron = require('node-cron');
const got = require('got');

const apiKey = 'b6907d289e10d714a6e88b30761fae22';
const cityId = '620127';
const url = `https://openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`;
let sunsetTime;

const getSunsetTime = () => {
    got(url, { json: true })
        .then(response => sunsetTime = JSON.stringify(response.body.sys.sunset))
        .catch(error => console.log(error.response.body));
    return sunsetTime;
};

const task = cron.schedule('* * * * * *', () => {
});