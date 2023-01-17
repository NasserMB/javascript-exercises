const sumAll = function(a, b) {
    let sumOfAll = 0;
    let x;
    let y;

    if (a < 0 || b < 0) {
        return 'ERROR';
    } else if (typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    };

    if ((compareNums(a ,b)) == -1) {
        x = b;
        y = a;
    } else {
        x = a;
        y = b;
    };
    

    for (i = x; i <= y; i++) {
        sumOfAll += i;
    };

    return sumOfAll;
};
   
function compareNums (numOne, numTwo) {

    if (numOne > numTwo) {
        return -1;
    };

    return 1;
};

// Do not edit below this line
module.exports = sumAll;
