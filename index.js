// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function(driver){
    // console.log(driver)
    return driver.toLowerCase()
  }
  )
}
function nameToAttributes(drivers){
  return drivers.map(function(driverName){
    const matches = driverName.match(/^(\S*)\s(\S*)/)
    return {firstName: matches[1], lastName: matches[2]}
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
}
