var removeDuplicates = function(nums) {
    var count;
    for(var i =0; i< nums.length; i++){
        if(nums[i]==nums[i+1]){
            nums.splice(i,1);  // here i=index 
            i=0;
        }
    }
    if(nums[0]==nums[1]){
        nums.shift();    
    }
    return nums.length;
};

// or-----

var removeDuplicates = function(nums) {
    var count;
    for(var i =0; i< nums.length; i++){
        if(nums[i]==nums[i+1]){
            nums.splice(i,1);
            i--;
        }
    }
    return nums.length;
};