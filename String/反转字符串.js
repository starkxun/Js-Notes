let s = "abcdefg";
var reverseString = function(s) {
    let len = s.length;
    let left = 0, right = len - 1;
    while(left < right) {
      [s[left++], s[right--]] = [s[right], s[left]]
    }
  };
reverseString(s);
