// Imports
import { ALL_CARS_URI } from '../enpoints/enpoints.js';
// Variables
// -- DOM elemements
const latesCarsElement = document.querySelector('#latest-cars');
//
// Functions
const showCars = async () => {
  let cars = await fetch(ALL_CARS_URI);
  let data = await cars.json();

  console.log(data);
};
// Events
document.addEventListener('DOMContentLoaded', showCars);
