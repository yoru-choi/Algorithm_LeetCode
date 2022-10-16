/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs: string[]): string {
    
    const strLen = strs.length
    if(strLen == 0)return "" //arr 0 @case1
    if(strLen == 1)return strs[0] //arr 1 @case2 

    strs.sort();
    for (let i = 0; i < strs[0].length; i++) {
    if(strs[0][i] !== strs[strs.length-1][i])return strs[0].substr(0, i); // @case3
    }
    return strs[0];//all same @case4
};