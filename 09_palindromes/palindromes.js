const palindromes = function (str) {
    let remNonLetters = str.replace(/[^a-zA-Z0-9]/g, '');
    let lowerCase = remNonLetters.toLowerCase();
    
    let splitStr = lowerCase.split("");
    let reverseStr = splitStr.reverse().join("");
    return lowerCase === reverseStr;
};

// Do not edit below this line
module.exports = palindromes;
