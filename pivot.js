const isLessThanEqual = function (num1, num2) {
  return num1 <= num2;
};

const createPivotSort = function (pivot) {
  return function (a, b) {
    if (isLessThanEqual(a, pivot) || isLessThanEqual(b, pivot)) {
      return a - b;
    }

    return b - a;
  };
};

const pivotSort = createPivotSort(5);
const elements = [2, 3, 1, 5, 34, 45, 21];

console.log(elements.sort(pivotSort));