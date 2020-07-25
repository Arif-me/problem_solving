/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var s=0;
    var t=0;
    if(x < 0){
        return false;
    }else{
        var num= x;
        while( x != 0){
            t= x % 10;
            s = (s * 10) + t;
            x = x/10 | 0;
        }
        return (num == s) ? true : false;
    }
};