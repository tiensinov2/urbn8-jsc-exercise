function api(callback) {
  setTimeout(() => {
    callback(1);
  }, 1000);
}

function api2(callback) {
  setTimeout(() => {
    callback(2);
  }, 1000);
}

function api3(callback) {
  setTimeout(() => {
    callback(3);
  }, 1000);
}

api(function (result) {
  console.log("result: ", result);
  api2(function (result2) {
    console.log("result2: ", result2);
    api3(function (result3) {
      console.log("result3: ", result3);
    });
  });
});
