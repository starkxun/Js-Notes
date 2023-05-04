s = "rat";
t = "car";
var isAnagram = function(s, t) {
    let Slen = s.length;
    let Tlen = t.length;
    if(Slen!==Tlen){;return false;}
    for(let i=0;i<Tlen;i++){
      t=t.replace(s[i],'');
    }
    if(t.length==0) {;return true;}
    return  false;
};
result = isAnagram(s,t);
console.log(result);