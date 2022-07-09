const reverseString = function(str) {
  const arr = str.split("");
  const reversedarr = arr.reverse();
  const reversedWord = reversedarr.join("");

  return reversedWord;
};

// Do not edit below this line
module.exports = reverseString;
