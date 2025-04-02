class Solution {
public:
    int climbStairs(int n) {
    if (n <= 2)
        return n;

    int first = 1;  // Ways to reach step 1
    int second = 2; // Ways to reach step 2
    int result = 0;

    for (int i = 3; i <= n; ++i)
    {
        result = first + second;
        first = second;
        second = result;
        /*
            f(n) = f(n - 1) + f(n - 2)
            use fibonacci sequence
        */
    }

    return result;
    }
};