const https = require("https");
const callExternalApi = (callback) => {
  https
    .get(
      "https://www.omdbapi.com/?i=tt3896198&apikey=5cbae348&t=gangubai",
      (response) => {
        let data = "";
        //chunk of data has been recieved
        response.on("data", (chunk) => {
          data += chunk;
        });
        //Print the result
        response.on("end", () => {
          var parseData = JSON.parse(data);
          return callback(parseData);
        });
      }
    )
    .on("error", (error) => {
      console.log("Error: "+ error.message);
    });
};

module.exports.callApi = callExternalApi;