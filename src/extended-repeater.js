const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let arr = [];
  if (options.separator === undefined) {
    options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|";
  }
  if (typeof str !== "string" && str !== undefined) {
    str = `${str}`;
  }
  if (typeof options.addition !== "string" && options.addition !== undefined) {
    options.addition = `${options.addition}`;
  }
  arr.push(str);
  arr.push(options.addition);
  for (let k = 1; k < options.additionRepeatTimes; k++) {
    arr.push(options.additionSeparator);
    arr.push(options.addition);
  }
  for (let i = 1; i < options.repeatTimes; i++) {
    arr.push(options.separator);
    arr.push(str);
    arr.push(options.addition);
    for (let k = 1; k < options.additionRepeatTimes; k++) {
      arr.push(options.additionSeparator);
      arr.push(options.addition);
    }
  }
  return arr.join("");
};
