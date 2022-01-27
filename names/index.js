const getFirstNames = require("./utilities/utils/index");

function getPeopleInCity(names) {
  let listOfFirstNames = getFirstNames(names);
  return listOfFirstNames;
}

module.exports = getPeopleInCity;
