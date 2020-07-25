var isValid = function(s) {
    var ar = [];
    var k=0;
    for(var i = 0 ; i < s.length ; i++){
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            ar.push(s[i]);
            k++;
        }else{
            if(s[i] === ')' && ar[k-1] === '('){
                ar.pop();
                k--;
            }else if(s[i] === '}' && ar[k-1] === '{'){
                ar.pop();
                k--;
            }else if(s[i] === ']' && ar[k-1] === '['){
                ar.pop();
                k--;
            }else{
                return false;
            }
        }
    }
    if(ar.length !== 0){
        return false;
    }else{
        return true;    
    }
    