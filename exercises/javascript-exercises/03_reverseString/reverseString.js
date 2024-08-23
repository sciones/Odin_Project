const reverseString = function(original) {
    let newStr = "";
    for (let i = original.length - 1; i >= 0; i--) {
        newStr += original[i];
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
