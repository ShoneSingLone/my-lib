/**
 * 用0填充数字:1.jpg => 0001.jpg
 * @param {any} _num 
 * @param {any} _length 
 */
function fillNumStringWithZero(_num, _length) => {
    var temple = Array(length).fill(0);
    num = String(num).split("");

    var targetArray = [];
    for (let i = 1; i <= temple.length; i++) {
        if (num.length >= i) {
            targetArray.unshift(num[num.length - i]);
        } else {
            targetArray.unshift(0);
        }
    }
    return targetArray.join("");
};

exports.fillNumStringWithZero = fillNumStringWithZero;