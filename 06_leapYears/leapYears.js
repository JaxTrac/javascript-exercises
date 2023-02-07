const leapYears = function(year) {
// if divided by 400 -> leapyear
    if (year%400==0){
        return true;
// if divided by 100 -> no leapyear
    } else if (year%100==0){
        return false;
// if divided by 4 -> leapyear
    } else if (year%4==0){
        return true;
    } else {
        return false;
    }

};

// Do not edit below this line
module.exports = leapYears;
