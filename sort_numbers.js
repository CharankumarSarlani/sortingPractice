const nums = [2, 3, 41, 11, 10];
console.log(nums);
console.log(nums.sort(
  function (a, b) {
    console.log(a, b);
    console.log(a - b);
    return a - b;
  }
));