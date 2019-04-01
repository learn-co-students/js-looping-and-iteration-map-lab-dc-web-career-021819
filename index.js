// Code your solution in this file.
function lowerCaseDrivers(objects) {
  return objects.map(function (name) {return name.toLowerCase();});
}

function nameToAttributes(obj) {
  return obj.map(function(name){
    return {firstName: name.split(" ")[0], lastName: name.split(" ")[1]};
  });
}

function attributesToPhrase(obj) {
  return obj.map(function(driver){
    return `${driver["name"]} is from ${driver["hometown"]}`;
  });
}
