// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  const ret = drivers.map(driver => {
    return driver.toLowerCase();
  });
  return ret;
}

function nameToAttributes(drivers) {
  const ret = drivers.map(driver => {
    const names = driver.split(" ");
    return { firstName: names[0], lastName: names[1] };
  });
  return ret;
}

function attributesToPhrase(drivers) {
  const ret = drivers.map(driver => {
    return `${driver.name} is from ${driver.hometown}`;
  });
  return ret;
}
