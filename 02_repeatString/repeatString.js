const repeatString = function(str,num) {
let arr = [];

  for(let x = 0; x < num;x++){
    arr.push(str);
  }

  const word = arr.join("")
  return word;
};

// Do not edit below this line
module.exports = repeatString;
