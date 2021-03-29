const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(mode) {
    this.mode = mode;
  }
  encrypt(message, key) {
    let origin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let messageUp = message.toUpperCase();
    let keyUp = key.toUpperCase();
    let mEnc = [];
    let kis = 0;
    let ki = 0;
    for (let i = 0; i < messageUp.length; i++) {
      let mi = origin.indexOf(messageUp[i]);
      if (kis >= keyUp.length) {
        kis = kis % keyUp.length;
        ki = origin.indexOf(keyUp[kis]);
      } else {
        ki = origin.indexOf(keyUp[kis]);
      }
      if (mi === -1) {
        mEnc.push(messageUp[i]);
      } else {
        if (mi + ki >= origin.length) {
          var ci = (mi + ki) % origin.length;
        } else {
          var ci = mi + ki;
        }
        mEnc.push(origin[ci]);
        kis++;
      }
    }
    if (this.mode === false) {
      return mEnc.reverse().join("");
    } else {
      return mEnc.join("");
    }
  }
  decrypt(message, key) {
    let origin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let messageUp = message.toUpperCase();
    //console.log(`messageUp: ${messageUp}`);
    let keyUp = key.toUpperCase();
    let mDec = [];
    let kis = 0;
    let ki = 0;
    for (let i = 0; i < messageUp.length; i++) {
      //console.log(`index: ${i}`);
      let mi = origin.indexOf(messageUp[i]);
      //console.log(`mi: ${mi} letter: ${origin[mi]} index: ${i}`);
      if (kis >= keyUp.length) {
        kis = kis % keyUp.length;
        ki = origin.indexOf(keyUp[kis]);
      } else {
        ki = origin.indexOf(keyUp[kis]);
      }
      if (mi === -1) {
        mDec.push(messageUp[i]);
      } else {
        if (mi - ki + origin.length >= origin.length) {
          var ci = (mi - ki + origin.length) % origin.length;
        } else {
          var ci = mi - ki + origin.length;
        }
        mDec.push(origin[ci]);
        //console.log(`mi: ${mi} letter: ${origin[mi]} index: ${i}`);
        //console.log(`ki: ${ki} letter: ${origin[ki]}`);
        kis++;
      }
    }
    if (this.mode === false) {
      return mDec.reverse().join("");
    } else {
      return mDec.join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
