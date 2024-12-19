const listOfLists = [[3, 1], [2, 4], [21, 1]];

const sortedArray = listOfLists.map(function (element) {
  return element.sort(function (a, b) {
    return a - b;
  });
});

console.log(sortedArray);