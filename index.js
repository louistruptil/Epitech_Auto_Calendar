const axios = require('axios');
const addEventToCalendar = require('./addEvent.js');

const userCookie = 'YOUR_USER_COOKIE';
const apiUrl = "https://intra.epitech.eu/planning/load?format=json&start=2024-01-22&end=2025-01-28";
const headers = {
    Cookie: `user=${userCookie}`,
};

function getEventofCalendar() {
    axios.get(apiUrl, {headers})
        .then(response => {
            const activities = response.data;

            if (activities && Array.isArray(activities)) {
                activities.forEach(element => {
                    if (element["event_registered"]) {
                        const inputDate = new Date(element["start"]);
                        const year = inputDate.getFullYear();
                        const month = String(inputDate.getMonth() + 1).padStart(2, '0');
                        const day = String(inputDate.getDate()).padStart(2, '0');
                        const hours = String(inputDate.getHours()).padStart(2, '0');
                        const minutes = String(inputDate.getMinutes()).padStart(2, '0');
                        const seconds = String(inputDate.getSeconds()).padStart(2, '0');
                        const inputDate2 = new Date(element["end"]);
                        const year2 = inputDate2.getFullYear();
                        const month2 = String(inputDate2.getMonth() + 1).padStart(2, '0');
                        const day2 = String(inputDate2.getDate()).padStart(2, '0');
                        const hours2 = String(inputDate2.getHours()).padStart(2, '0');
                        const minutes2 = String(inputDate2.getMinutes()).padStart(2, '0');
                        const seconds2 = String(inputDate2.getSeconds()).padStart(2, '0');

                        const newEventDetails = {
                            summary: element["acti_title"],
                            location: (element["room"]["code"]).split('/')[3],
                            description: element["titlemodule"],
                            start: {
                                dateTime: `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`,
                                timeZone: 'Europe/Paris',
                            },
                            end: {
                                dateTime: `${year2}-${month2}-${day2}T${hours2}:${minutes2}:${seconds2}Z`,
                                timeZone: 'Europe/Paris',
                            },
                            colorId: 7,
                        };

                        console.log(newEventDetails);
                        addEventToCalendar(newEventDetails);
                    }
                });
            } else {
                console.error('No valid "planning" property found in the response.');
            }
        })
        .catch(error => {
            console.log("Update USER cookie");
        });
}

getEventofCalendar();
