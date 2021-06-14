const request = require("request");
const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=380c4efb334758b6c0143ef87d26f6ea&query=" +
    latitude +
    "," +
    longitude +
    "&units=m";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "Hello weather, today we are in " +
          body.location.name +
          "," +
          body.location.country +
          ". The today time is " +
          body.current.weather_descriptions[0] +
          " It is currently " +
          body.current.temperature +
          " degrees out. It feels like " +
          body.current.feelslike +
          " degrees out! See you for more information!"
      );
    }
  });
};

module.exports = forecast;
