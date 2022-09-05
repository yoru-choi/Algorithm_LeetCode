function twoSum(nums: number[], target: number): number[] {
    
    const numsMap = new Map()
    for (const [index, value] of nums.entries()) {
        const difference:number = target-value
        if(numsMap.has(difference)) return [numsMap.get(difference), index]
        numsMap.set(value, index)
    } 
    return []
};