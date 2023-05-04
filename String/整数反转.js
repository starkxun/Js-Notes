let x = 1563847412;
var reverseNum = function(x){
    let res = 0;
    let maxValue = Math.pow(2,31)-1;
    let minValue = maxValue * (-1);
    while (x!=0){
        res = res *  10 + parseInt(x%10);
        if(res>maxValue||res<minValue) return 0;
        x = parseInt(x/10);
    }
    return res;
}
let result = reverseNum(x);
console.log(result);
