const fibonacci = function(num) {
    let prevNum = 1;
    let currNum = 1;
    let temp;
    const arr = [];
    
    if (num < 0) {
        return 'OOPS';
    }

    for(let i = 0; i < num; i++) {
        if (i === 0 || i === 1) {
            arr.push(1);
        } else {
            arr.push(prevNum + currNum);
            temp = prevNum + currNum;
            prevNum = currNum;
            currNum = temp;
        }
    }

    return arr[arr.length - 1];
};


// Do not edit below this line
module.exports = fibonacci;
