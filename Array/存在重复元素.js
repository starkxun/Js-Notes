// nums = [4,3,2,3,8,9,5,6,8,1];
nums = [1,2,3,4,5,6];
var containsDuplicate = function(nums) {
    nums.sort();
    for(let i=0;i<nums.length-1;i++){
        if(nums[i+1]==nums[i]) return true;
    }
    return false;
};
console.log(containsDuplicate(nums));