const weatherReadings = [
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

getReading = (req, res) => {
};

addReading = (req, res) => {
};

deleteReading = (req, res) => {
};

module.exports = {getAllReadings}