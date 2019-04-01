// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map( d => d.toLowerCase())
}

function nameToAttributes(drivers) {
  return drivers.map( d => {
    return {firstName: d.substr(0, d.indexOf(" ")), lastName: d.substr(d.indexOf(" ") + 1)}
  } )
}

function attributesToPhrase(drivers) {
  return drivers.map(d => {
    return `${d["name"]} is from ${d["hometown"]}`
  })
}
