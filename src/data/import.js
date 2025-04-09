const mongoose = require("mongoose");
const fs = require("fs");
const Car = require("../models/carsModel");


mongoose
  .connect('mongodb+srv://krushna24:Krishh_24_@krushna1.f8hvv.mongodb.net/cars?retryWrites=true&w=majority&appName=Krushna1', {})
  .then((conn) => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.log(error.message);
  });
const carJson = JSON.parse(fs.readFileSync("./cars.json", "utf-8"));

const importMovie = async () => {
  try {
    await Car.create(carJson);
    console.log("Data Added");
  } catch (error) {
    console.log(error.message);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importMovie();
}
