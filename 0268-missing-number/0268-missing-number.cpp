class Solution {
public:
    int missingNumber(vector<int>& nums) {
        int n = nums.size();
        //Sum of the first n natural numbers
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        for (int num : nums)
            actualSum += num;
        return expectedSum - actualSum;
    }
};