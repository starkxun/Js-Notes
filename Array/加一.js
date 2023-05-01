digits = [9,9,9,9];
var plusOne = function(digits) {
    digits[digits.length-1] += 1;
    for(let i=1;i<digits.length;i++){
        if(digits[digits.length-i]>9){
            digits[digits.length-i]-=10;
            digits[digits.length-i-1]+=1;
        }
    }
    if(digits[0]>9){        //特判，最高位进一
        digits[0]-=10;
        digits.unshift(1);
    }
    return digits;
};
result = plusOne(digits);
console.log(result);