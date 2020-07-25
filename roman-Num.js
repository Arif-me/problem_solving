/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var val=0;
    var sum=0;
    var m = 0;
	var arr = [];
    var ch="";
    for(var j=0; j < s.length; j++){
        ch=s[j];
        switch(ch){
        case "I":
            val=1;
            arr.push(val);
            break;
        case "V":
            val=5;
            arr.push(val);
            break;
        case "X":
            val=10;
            arr.push(val);
            break;
        case "L":
            val=50;
            arr.push(val);
            break;
        case "C":
            val=100;
            arr.push(val);
            break;
        case "D":
            val=500;
            arr.push(val);
            break;
        case "M":
            val= 1000;
            arr.push(val);
            break;
           }
    }
    for(var k = 0; k < arr.length ; k++){
        if(arr[k] < arr[k+1]){
            m = arr[k+1] - arr[k];
            sum = sum + m;
            k++;
        }else{
            sum=sum+arr[k];
        }
    }
	
    return sum;
};