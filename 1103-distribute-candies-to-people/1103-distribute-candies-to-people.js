/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
    
    let res =[]
    let i =0;
    let cnt = 1;
    let peopleCnt =1;
    
    while(1){
    if(i ==num_people ) i = 0;
        
    if(candies-cnt <=0){
        res[i] = (res[i]||0) + candies;
        candies = 0;
    
        if(peopleCnt >= num_people)return res
    }else{
            
        res[i]= (res[i]||0) + cnt;
        candies -= cnt;
    }
    
    peopleCnt ++;
    i++;
    cnt++;
        
    }
};