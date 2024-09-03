const palindromes = function (str) {
    let tempStr = str.toLowerCase();
    let stripped = "";
    for (const s in tempStr) {
        if (tempStr[s] != " " && tempStr[s] != "!" && tempStr[s] != "." && tempStr[s] != "?" && tempStr[s] != ",") {
            stripped += tempStr[s];
        }
    }
    let reversed = "";
    for (let i = stripped.length - 1; i >= 0; i--) {
        reversed += stripped[i];
    }
    return stripped == reversed;

};

//************* Most efficient **************//
/*
const palindromes = function (str) {
    let tempStr = str.toLowerCase();
    let stripped = tempStr.replace(/[^a-z0-9]/g, '');
    let reversed = stripped.split('').reverse().join('');
    return stripped === reversed;
};
*/

// Do not edit below this line
module.exports = palindromes;
