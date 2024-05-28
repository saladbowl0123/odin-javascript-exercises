const palindromes = function (myString) {
  const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";
  let clean = myString
    .toLowerCase()
    .split("")
    .filter(char => alphanumerical.includes(char))
    .join("");
  let reverse = clean
    .split("")
    .reverse()
    .join("");
  return clean == reverse;
};

// Do not edit below this line
module.exports = palindromes;
