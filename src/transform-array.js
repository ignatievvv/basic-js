const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error;
  let arrNew = [];
  let statusDeleted = false;
  arr.forEach((elem, i, array) => {
    if (
      elem === "--discard-prev" &&
      statusDeleted === false &&
      array[i - 1] !== undefined
    ) {
      arrNew.pop();
    }

    if (
      elem === "--double-prev" &&
      array[i - 1] !== undefined &&
      statusDeleted === false
    ) {
      arrNew.push(array[i - 1]);
    }

    if (elem === "--double-next" && array[i + 1] !== undefined) {
      arrNew.push(arr[i + 1]);
      statusDeleted = false;
    }

    if (elem === "--discard-next" && array[i + 1] !== undefined) {
      statusDeleted = true;
    }

    if (
      elem !== "--discard-prev" &&
      elem !== "--double-prev" &&
      elem !== "--double-next" &&
      elem !== "--discard-next" &&
      statusDeleted === false
    ) {
      arrNew.push(elem);
    }

    if (elem === "--double-prev" && statusDeleted === true) {
      statusDeleted = false;
    }

    if (elem === "--discard-prev" && statusDeleted === true) {
      statusDeleted = false;
    }

    if (
      elem !== "--discard-prev" &&
      elem !== "--double-prev" &&
      elem !== "--double-next" &&
      elem !== "--discard-next" &&
      array[i - 1] !== "--discard-prev" &&
      array[i - 1] !== "--double-prev" &&
      array[i - 1] !== "--double-next" &&
      array[i - 1] !== "--discard-next" &&
      statusDeleted === true
    ) {
      arrNew.push(elem);
      statusDeleted = false;
    }
  });
  return arrNew;
};
