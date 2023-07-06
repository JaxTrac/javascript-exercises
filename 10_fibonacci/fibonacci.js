const fibonacci = function(number) {
    let value = [1,1];
    if (number > 0) {
        for (let i = 2; i < 100; i++) {
            value[i] = value[i-1] + value[i-2];
        }
        return value[number-1]; 
    } else {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;

// 1 1 2 3 5 8
