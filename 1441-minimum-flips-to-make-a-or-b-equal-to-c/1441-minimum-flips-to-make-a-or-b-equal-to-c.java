class Solution {
    public int minFlips(int a, int b, int c) {
    int differnce = (a | b) ^ c;
    int bothOne = (a & b) & (~c);
    return Integer.bitCount(differnce)+Integer.bitCount(bothOne);
   }
}