/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    var count = 0;
    var flag = 0;
    
    for(var i=0; i<s.length; i++){
        if(s[i]==="A"){
            count++;
            flag =0;
            if(count >=2){
                return false;
            }
        }else if(s[i]==="L"){
            flag++;
            if(flag===3){
                return false;
            }
        }else{
            flag=0;
        }
    }
    
    
    return true;
    
};