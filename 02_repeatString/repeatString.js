const repeatString = function(myString, numReps) {
  if (numReps < 0) return "ERROR";
  let r = "";
  for (let i = 0; i < numReps; i++) {
    r += myString;
  }
  return r;
};

// Do not edit below this line
module.exports = repeatString;
