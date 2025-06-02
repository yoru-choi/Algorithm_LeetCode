fun Int.factorial(): Long {
    var result = 1L
    for (i in 2..this) {
        result *= i
    }
    return result
}

class Solution {
    fun uniquePaths(m: Int, n: Int): Int {
        val dp = IntArray(n) { 1 } // 첫 번째 행은 모두 1로 초기화
        for (i in 1 until m) {
            for (j in 1 until n) {
                dp[j] += dp[j - 1] // 현재 위치 = 위쪽 경로 + 왼쪽 경로
            }
        }
        return dp[n - 1]
    }
}
