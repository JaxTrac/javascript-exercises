const removeFromArray = function() {
   let toBeShortenedArray = arguments[0];
   for (i=1; i <= arguments.length; i++) {
    if (toBeShortenedArray.includes(arguments[i])){
        for (a=0; a<=toBeShortenedArray.length; a++){
            if (toBeShortenedArray[a]==arguments[i]){
                toBeShortenedArray.splice(a,1);
                a=-1;
            }
        }
    }}
    return toBeShortenedArray
};

// Do not edit below this line
module.exports = removeFromArray;
