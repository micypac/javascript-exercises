const removeFromArray = function(argArray, ...moreArgs) {
    for(let i = 0; i < moreArgs.length; i++) {
        let index = argArray.indexOf(moreArgs[i])
        if (index !== -1) {
            argArray.splice(index, 1)
        } 
    }

    return argArray
};

// Do not edit below this line
module.exports = removeFromArray;
