const sumAll = function(startNum, endNum) {
    if (isNaN(startNum) || isNaN(endNum)){
        return "ERROR";
    } else if (startNum < 0 || endNum < 0){
        return "ERROR";
    } else if (typeof startNum === "string" || typeof endNum === "string"){
        return "ERROR";
    }else {
        let sumOfNums = 0;
        if (startNum<=endNum){
            for (i=startNum; i<=endNum; i++){
                sumOfNums += i;
            }
            console.log(typeof endNum)
            return sumOfNums;
        } else {
            for (i=endNum; i<=startNum; i++){
                sumOfNums += i;
            }
            
            return sumOfNums;
        }
    }
};
console.log(sumAll(1,"345"));
console.log(typeof "123")
// Do not edit below this line
module.exports = sumAll;
