/**
 * @param {number[][]} intervals
 * @return {number}
 */
var removeCoveredIntervals = function(intervals) {
    
    let arr = intervals; 
    
    while(1){
        let len = arr.length;
        arr = arr.sort((a, b)=>a-b);
        
        let num = 0;
        let end = true;
        let i =0
        let j =0

         for(i; i<len; i++ ){
            if(!end)break;
            j =0
            for(j; j< len; j++){
                
               if(!end)break;
                if(i != j){
                    if(arr[i][0] <= arr[j][0]){
              
                        if(arr[i][1] >= arr[j][1]){

                            arr.splice(j, 1); 
                            end= false;
                            continue;
                            
                            
                        }
                    }
                }
               

            }
             if(end)num++
        }
        
        
        if(len == num){
           if(end){
               return len;
           }
        }
    }
    
};