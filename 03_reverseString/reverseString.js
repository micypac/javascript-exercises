const reverseString = function(phrase) {
    let myArray = phrase.split('')
    myArray.reverse()
    let result = myArray.join('')
    return result

};

// Do not edit below this line
module.exports = reverseString;
