console.log("loaded");
function setTimeoutPromise(resolveAfter) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(`I call ${resolveAfter}`);
    }, resolveAfter * 1000);
  });
}

function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const currentLocation = {
          longitude: position.coords.longitude,
          latitude: position.coords.latitude
        };
        resolve(currentLocation);
      },
      err => {
        error = {
          code: err.code,
          message: err.message
        };
        reject(error);
      }
    );
  });
}


setTimeoutPromise(6).then(console.log);
setTimeoutPromise(3).then(console.log);
getCurrentLocation()
  .then(position => {

    console.log(position);
  })
  .catch(error => {
    console.log(error);
  });