const fibonacci = function(num) {
    let a = 0;
    let b = 1;
    let result = 1;
    const pos = parseInt(num, 10);

    if (pos <= 0) return "OOPS";

    for (let i = 1; i < pos; i++) {
        result = a + b;
        a = b;
        b = result;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
