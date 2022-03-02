const sumAll = function(startNum, endNum) {
    
    // Negative numbers and NaN values (even though a string can be implicitly cast to number) 
    // will return an ERROR.
    if (startNum < 0 || endNum < 0) {
        return 'ERROR';
    } else if (typeof(startNum) == 'string' || typeof(endNum) == 'string' ) {
        return 'ERROR';
    } else if (isNaN(startNum) || isNaN(endNum)) {
        return 'ERROR';
    }

    let result = 0;

    // Switch variable values if startNum get a higher value than endNum.
    if (startNum > endNum) {
        [startNum, endNum] = [endNum, startNum]
    }

    for(let i = startNum; i <= endNum; i++) {
        result += i;
    }

    return result
};

// Do not edit below this line
module.exports = sumAll;
