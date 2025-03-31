//Even though it worked correctly with int, using shift operations on int types is generally discouraged in C++ due to potential issues with sign bits and undefined behavior.

class Solution {
public:
    int getSum(int a, int b) {
        while (b != 0) {
            unsigned carry = (unsigned)(a & b) << 1; // calculate carry
            a = a ^ b; // calculate sum without carry
            b = carry; // apply carry
        }
        return a;
    }
};