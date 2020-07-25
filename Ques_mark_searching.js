function Q(str) { 
    var count = 0;
	var fVal = 0;
	var sVal = 0;
	var trr = [];
	var	arr = str.replace( /[^0-9|?]/g, '').replace( /\s\s+/g, ' ' );
		for(var i=0; i< arr.length; i++){
			if(arr[i]==='?'){
				count++;
				if(count === 1){
					fVal = arr[i-1];
				}
			}else if(count !=0){
				sVal = arr[i];
				if(count === 3 && (fVal + sVal <= 10)){
					console.log("I am here");
					return true;
				}
				count = 0;
			}
		}
  
  return false; 

}