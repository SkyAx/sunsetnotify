const cmd = require('node-cmd');
const cron = require('node-cron');
const got = require('got');
const moment = require('moment');

const apiKey = 'b6907d289e10d714a6e88b30761fae22';
const cityId = '620127';
const url = `https://openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`;

moment().format();

const getSunsetTime = () => {
    return got(url, { json: true })
        .then(response => sunsetTime = JSON.stringify(response.body.sys.sunset))
        .catch(error => console.log(error.response.body));
};

const timeToGo = () => {
    let hour, minutes;

    getSunsetTime().then((res) => {
        let sunset = moment.unix(res);
        hour = sunset.hour();
        minutes = sunset.minute();
    });
};


const task = cron.schedule(`* * * * * *`, () => {
});