// Code your solution in this file.

function lowerCaseDrivers(driverObject){
  return driverObject.map(function(driverName){
    return driverName.toLowerCase()
  })
}

function nameToAttributes(array) {
  return array.map(function(name) {
    return Object.assign({}, {firstName: name.split(' ')[0]}, {lastName: name.split(' ')[1]})
  });
}

function attributesToPhrase(array) {
  return array.map(function(object) {
    return `${object.name} is from ${object.hometown}`
  });
}
