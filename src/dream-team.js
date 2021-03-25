const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let dreamTeam = [];
  members.forEach((name) => {
    if (typeof name === "string") {
      dreamTeam.push(name.match(/\p{L}/u)[0].toUpperCase());
    }
  });
  return dreamTeam.sort().join("");
};
