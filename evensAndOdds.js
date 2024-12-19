const isEven = function (number) {
  return (number & 1) === 0;
};

const evensAndOdds = function (array) {
  return array.sort(function (a, b) {
    if (isEven(a) && !isEven(b)) {
      return -1;
    }

    if (!isEven(a) && isEven(b)) {
      return 1;
    }

    return a - b;
  });
}; 