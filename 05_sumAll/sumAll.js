const sumAll = function(start,end) {
  let arr = [];

  for(let x = start;x <= end; x++){
    arr.push(x);
  }

  return arr.reduce(calculator = (previous,current) => {
    return previous + current
  })
};

// Do not edit below this line
module.exports = sumAll;
