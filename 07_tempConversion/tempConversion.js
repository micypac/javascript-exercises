const ftoc = function(tempFar) {
  let result = (tempFar - 32) * 5/9
  return parseFloat(result.toFixed(1)) 
};

const ctof = function(tempCel) {
  let result = tempCel * 9/5 + 32
  return parseFloat(result.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
