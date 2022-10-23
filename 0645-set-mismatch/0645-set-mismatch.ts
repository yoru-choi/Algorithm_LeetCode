function findErrorNums(nums: number[]): number[] {
    
    let total = (1 + nums.length) * nums.length / 2;
    let repeating=0
    let sum=0
    let arr=[]
    for(let i =0; i< nums.length; i++){
        if( arr.includes(nums[i]) )repeating =nums[i]
        sum+= nums[i]
        arr.push(nums[i])
    }
    let missing = total - (sum-repeating);
    return [repeating, missing];
};