const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsNumber = Math.pow(2, disksNumber) - 1;
  let turnTime = (60 * 60) / turnsSpeed;
  let seconds = Math.floor(turnsNumber * turnTime);
  let solution = {
    turns: turnsNumber,
    seconds: seconds,
  };
  return solution;
};
