const removeFromArray = function() {

    let original = arguments[0];
    let newArr = []
    let good = 0;

    for (const ele of original) {
        good = 1;
        for (let i = 1; i < arguments.length; i ++) {
            if (ele === arguments[i]) {
                good = 0;
            }
        }
        if (good == 1) {
            newArr.push(ele);
        }
    }
    
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
