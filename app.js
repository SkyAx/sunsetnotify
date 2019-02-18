const cmd = require('node-cmd');
const cron = require('node-cron');
const got = require('got');
const moment = require('moment');

const apiKey = 'b6907d289e10d714a6e88b30761fae22';
const cityId = '620127';
const url = `https://openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`;

let sunsetHour = 0;
let sunsetMinutes = 0;

moment().format();

const getSunsetTime = () => {
    return got(url, { json: true })
        .then(response => sunsetTime = JSON.stringify(response.body.sys.sunset))
        .catch(error => console.log(error.response.body));
};

const timeToGo = () => {
    getSunsetTime().then((res) => {
        let sunset = moment.unix(res);
        sunsetHour = sunset.hour() - 1;
        sunsetMinutes = sunset.minute();
    });
};

timeToGo();

const checkSunset = cron.schedule(`0 0 9 * * *`, () => {
    timeToGo();
});

const nofity = cron.schedule(`0 ${sunsetMinutes} ${sunsetHour} * * *`, () =>{
    cmd.get('python buzzer.py -c 7 -d 0.5', () => {
        console.log('Ok')
    });
});
