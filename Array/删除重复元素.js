/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [1,1,1,2,3,4,5,6,6,7,8,12,12,13];
var removeDuplicates = function(nums) {
    var len = nums.length;
    if(len==0) return 0;
    let i=1;
    for(let j=1;j<len;j++){
        if(nums[j]!==nums[i-1]){
            nums[i]=nums[j];    //当遇到相同的数就会被忽略掉
            i++;
        }
    }
    return i;
};
result = removeDuplicates(nums);
console.log(result);
console.log(nums);