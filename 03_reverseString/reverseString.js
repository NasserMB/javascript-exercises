const reverseString = function(text) {
    const textIndex = text.length - 1;
    let reverseText = ''

    for (i = textIndex; i >= 0; i--) {
        reverseText += text[i];
    };

    return reverseText;
};

// Do not edit below this line
module.exports = reverseString;
