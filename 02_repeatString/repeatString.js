const repeatString = function(word, num) {
    let result
    try{
        result = word.repeat(num)
    } catch(err) {
        result = 'ERROR'
    }

    return result
};

// Do not edit below this line
module.exports = repeatString;
