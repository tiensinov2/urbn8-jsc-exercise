calculation = (arr, length) => {
  if (length <= 0) {
    return 0;
  }
  return calculation(arr, length - 1) + arr[length - 1];
};

const arr = [5, 9, 6, 8, 4, 6];
console.log(calculation(arr, arr.length));
