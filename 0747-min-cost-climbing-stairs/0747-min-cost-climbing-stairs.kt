class Solution {
    fun minCostClimbingStairs(cost: IntArray): Int {
        val n = cost.size
        val dp = IntArray(n+1)
        dp[0]=0
        dp[1]=0

        for(i in 2..n){
            dp[i] = minOf(dp[i-2]+cost[i-2],dp[i-1]+cost[i-1])
        }
        return dp[n]
    }
}