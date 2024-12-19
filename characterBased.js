const startsWith = function (string, character) {
  return string.at(0) === character;
};

const createLeadingCharSort = function (character) {
  return function (string1, string2) {
    
    if (startsWith(string1, character) === !startsWith(string2, character)) {
      return -1;
    }

    if (!startsWith(string1, character) && startsWith(string2, character)) {
      return 1;
    }

    return string1 < string2 ? -1 : 1;
  };
};

const leadingCharSort = createLeadingCharSort("c");
const strings = ["education", "charan", "hello", "class", "apple"];

console.log(strings.sort(leadingCharSort))