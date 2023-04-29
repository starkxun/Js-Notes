nums = [1,2,3,4,5,6,7];
var rotate = function(nums, k) {
    for(let i=0;i<k;i++){
        nums.unshift(nums[nums.length-1]);
        nums.pop();
    }
    return nums;
};
console.table(rotate(nums,3));