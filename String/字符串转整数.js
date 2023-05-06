s = " -4193 with words";
var myAtoi = function(s) {
    let maxValue = Math.pow(2,31)-1;
    let minValue = maxValue*(-1)-1;
    if(isNaN(Number.parseInt(s))){
        return 0;
    }
    else{
        let temp = Number.parseInt(s);
        if(temp>maxValue) return maxValue;
        else if(temp<minValue){
            return minValue;
        }
        return temp;
    }
};
result = myAtoi(s);
console.log(result);
