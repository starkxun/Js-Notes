s = "A man, a plan, a canal: Panama";
var isPalindrome = function(s) {
    let format = s.replace(/[^A-Za-z0-9]/gi,'').toLowerCase().split('');
    return format.join('') === format.reverse().join('')
};
result = isPalindrome(s);
console.log(result);

