let weatherReadings = [
    {
        id: 0,
        temprature: 20,
        humidity: "30%",
        city: "Damascus"
    },
    {
        id: 1,
        temprature: 40,
        humidity: "50%",
        city: "Budapest"
    },
    {
        id: 2,
        temprature: 5,
        humidity: "10%",
        city: "Cairo"
    }
]


getAllReadings = (req, res) => {
    res.status(200).json(weatherReadings);
};



//localhost:5000/weather/1
getReading = (req, res) => {
    let id = req.params.id;
    for (let i = 0; i < weatherReadings.length; i++) {  
        if (weatherReadings[i].id == id) {
            res.status(200).json(weatherReadings[i]);
        }
    }    
};



// {
//     "id": 4,
//     "temprature": 40,
//     "humidity": "10%",
//     "city": "hama"
// }
addReading = (req, res) => {
    let reading = req.body;
    weatherReadings.push(reading);
    console.log(weatherReadings)
    res.status(200).json();
};

//localhost:5000/weather/1
deleteReading = (req, res) => {
    let id = req.params.id;
    let newWeatherReading = [];
    for (let i = 0; i < weatherReadings.length; i++) {  
        if (weatherReadings[i].id != id) {
            newWeatherReading.push(weatherReadings[i]);
        }
    }
    weatherReadings = newWeatherReading;
    res.status(200).json();
};

module.exports = {getAllReadings, getReading, deleteReading, addReading}