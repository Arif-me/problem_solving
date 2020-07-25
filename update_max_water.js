var maxArea = function(height) {
    var fcount = 0;
    var scount = 0;
    var fVol = 0;
    var sVol = 0;
    var tVol =0;
    var fMax=height[0];
    var sMax=height[0];
    for(var i = 0; i < height.length; i++){
        if(fMax < height[i] || fMax == height[i]){
            if(fMax == height[i]){
            fVol = fMax * fcount;
            }else {
                fVol = fMax * fcount;
                fMax = height[i];
                fcount = 0;
            }
        }else{
            if(sMax < height[i] && height[i] != fMax){
            sMax = height[i];
            sVol = sMax * fcount;
            scount = 0;
            }else{
                sVol = sMax * scount;
            } 
        } 
        tVol = height[i] * fcount;
        fVol = (tVol > fVol) ? tVol : fVol; 

        scount++;
        fcount++;
    }
    return fVol + " F " + sVol + " S ";
};