strs = ["flower","flow","flight"];
var longestCommonPrefix = function(strs) {
    if (strs == null || strs.length == 0)
        return "";
    //默认第一个字符串是他们的公共前缀
    let pre = strs[0];
    let i = 1;
    while(i<strs.length){
        //不断的截取
        while(strs[i].indexOf(pre)!==0){
            pre = pre.substr(0,pre.length-1);
        }
        i++;
    }
    return pre;
};
result = longestCommonPrefix(strs);
console.log(result);