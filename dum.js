const evensAndOdds = function (array) {
  return array.sort(function (a, b) {
    if ((a % 2 === 0) === (b % 2 === 0)) {
      return -1;
    }

    return a % 2 === 0 ? 1 : -1;
  });
};