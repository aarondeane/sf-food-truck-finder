const ora = require('ora');
const getFoodTrucks = require('../utils/foodtrucks');

module.exports = async (args) => {
  const spinner = ora().start();
  
  try {
    const now = args.date || new Date();
    const day = now.getDay();
    const openFoodTrucks = await getFoodTrucks(day);
    spinner.stop();
    console.log(openFoodTrucks);
  } catch (err) {
    spinner.stop();

    console.error(err);
  }  
}