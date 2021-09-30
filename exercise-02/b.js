const api = function (param) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(param);
    }, 1000);
  });
};

const api1 = function (param) {
  return new Promise((resolve) => {
    setTimeout(() => {
      param++;
      resolve(param);
    }, 1000);
  });
};

const api2 = function (param) {
  return new Promise((resolve) => {
    setTimeout(() => {
      param++;
      resolve(param);
    }, 1000);
  });
};

api(1)
  .then((result) => {
    console.log("result:", result);
    return api1(result);
  })
  .then((result) => {
    console.log("result2:", result);
    return api2(result);
  })
  .then((result) => console.log("result3:", result))
  .catch((err) => console.log(err));
