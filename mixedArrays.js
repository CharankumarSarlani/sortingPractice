const mixedArray = function (array) {
  return array.sort(function (a, b) {
    if (typeof a === "number" && typeof b === "string") {
      return -1;
    }

    if (typeof a === "string" && typeof b === "number") {
      return 1;
    }

    //return a - b;
  });

};
