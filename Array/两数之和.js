nums = [3,2,4];
target = 6;
var twoSum = function(nums, target) {
    result = [];
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
            result.push(i);
            result.push(j);
            return result;
        }
    }
}
}
result = twoSum(nums,target);
console.log(result);