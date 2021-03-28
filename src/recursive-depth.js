const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    return arr.reduce((arrDepth, current) => {
      if (Array.isArray(current) === false) {
        return arrDepth;
      } else {
        let x = this.calculateDepth(current);
        if (x + 1 > arrDepth) {
          return 1 + x;
        } else {
          return arrDepth;
        }
      }
    }, 1);
  }
};
