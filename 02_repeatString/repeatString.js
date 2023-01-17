const repeatString = function(txt, x) {
    let resultString = '';

    if (x<0) {
        resultString = 'ERROR';
    };

    for (let i=0; i < x; i++) {

        resultString += txt;
    };

    return resultString;
};

// Do not edit below this line
module.exports = repeatString;