const repeatString = function(txt, x) {
    let resultString = '';

    for (let i=0; i < x; i++) {
        if (x<0) {
            resultString = 'ERROR';
            break;
        }
        resultString += txt;
    }

    return resultString;
};

// Do not edit below this line
module.exports = repeatString;
