const { google } = require('googleapis');

const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(
    'ID_CLIENT',
    'SECRET_CLIENT_CODE'
);

oAuth2Client.setCredentials({
  refresh_token:
      'REFRESH_TOKEN',
});

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

function addEventToCalendar(eventDetails) {
  const event = {
    summary: eventDetails.summary,
    location: eventDetails.location,
    description: eventDetails.description,
    start: eventDetails.start,
    end: eventDetails.end,
    colorId: eventDetails.colorId,
  };

  calendar.events.list({
    calendarId: 'primary',
    timeMin: eventDetails.start,
    timeMax: eventDetails.end,
  }, (err, res) => {
    if (err) {
      console.error('Error fetching existing events:', err);
      return;
    }

    const existingEvents = res.data.items;

    const eventAlreadyExists = existingEvents.some(existingEvent => {
      return existingEvent.summary === event.summary;
    });

    if (eventAlreadyExists) {
      console.log('Event with the same summary already exists on the same day.');
    } else {
      calendar.events.insert({
        calendarId: 'primary',
        resource: event,
      }, (err, res) => {
        if (err) {
          console.error('Error creating event:', err);
          return;
        }
        console.log('Event created:', res.data.htmlLink);
      });
    }
  });
}

module.exports = addEventToCalendar;
