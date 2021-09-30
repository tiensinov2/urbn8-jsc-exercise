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
      resolve(param);
    }, 1000);
  });
};

const api2 = function (param) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(param);
    }, 1000);
  });
};

const printResult = async function () {
  const resApi = await api(1);
  console.log("result: " + resApi);
  const resApi1 = await api1(2);
  console.log("result2: " + resApi1);
  const resApi2 = await api2(3);
  console.log("result3: " + resApi2);
};

printResult();
console.log("FIRST");
