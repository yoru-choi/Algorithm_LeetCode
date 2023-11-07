function removeDuplicates(nums: number[]): number {
    const temp = [...new Set(nums)]
    nums.length = 0
    nums.push(...temp)
    return nums.length
};