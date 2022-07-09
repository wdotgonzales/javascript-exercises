const removeFromArray = function(arr,value) {
  arr = arr.filter(test = (item) => item !== value);

  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
