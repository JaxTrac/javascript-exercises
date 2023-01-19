const repeatString = function(string, num) {
    let multiString = "";

    if (num >= 0) {
        for (i=0; i < num; i++){
            multiString += string
        }
        return multiString;
    } else {
        return "ERROR";
    }
}

// Do not edit below this line
module.exports = repeatString;
