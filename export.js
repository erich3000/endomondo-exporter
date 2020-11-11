require('cross-fetch/polyfill');
const fse = require('fs-extra');
const { Api } = require('endomondo-api-handler');
const api = new Api();

const credentials = require('./credentials.json');

(async () => {

    if (credentials) {

        await api.login(credentials.email, credentials.password);
        await api.processWorkouts({}, (workout) => {

            const year = workout.start.year;
            const month = (workout.start.month > 9) ? workout.start.month : '0' + workout.start.month;
            const day = (workout.start.day > 9) ? workout.start.day : '0' + workout.start.day;
            const hour = (workout.start.hour > 9) ? workout.start.hour : '0' + workout.start.hour;
            const minute = (workout.start.minute > 9) ? workout.start.minute : '0' + workout.start.minute;

            fileName = `${year}-${month}-${day}_${hour}-${minute}`;

            if (workout.hasGPSData()) {
            
                const path = `gpx/${year}/${month}/${fileName}.gpx`;

                fse.outputFile(path, workout.toGpx(), err => {
                    if(err) {
                        console.log(err);
                    } else {
                        console.log(`wrote ${workout.toString()} to ${path}`);
                    }
                })
            }
        });

    }
    else {
        console.error('no credentials.json found. please type in your endomondo credententials into credentials_template.json and rename it to credentials.json');
    }

})();
