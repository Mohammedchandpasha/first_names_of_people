const peopleList = require("../country/state/city/index");

const firstNames = require("../utilities/utils/index");

function getPeopleInCity(list) {
  return firstNames(list);
}
console.log(getPeopleInCity(peopleList));

module.exports = getPeopleInCity;
