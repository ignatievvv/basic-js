const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    sampleActivity === undefined ||
    typeof sampleActivity !== "string" ||
    /\p{L}|\s/u.test(sampleActivity) === true ||
    sampleActivity.length === 0 ||
    Number(sampleActivity) > 15 ||
    Number(sampleActivity) < 1
  ) {
    return false;
  }
  sampleActivity = Number(sampleActivity);
  let sampleAge = Math.ceil(
    (Math.log(MODERN_ACTIVITY / sampleActivity) / 0.693) * HALF_LIFE_PERIOD
  );
  return sampleAge;
};
