const palindromes = function (str) {
    const origArr = [...str.toLowerCase()].filter(char => (/[a-zA-Z]/).test(char))
    const newArr = origArr.slice().reverse();

    return origArr.every((value, idx) => value === newArr[idx])

};

// Do not edit below this line
module.exports = palindromes;
