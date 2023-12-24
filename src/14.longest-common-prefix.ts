/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
    let res = ""

    if (strs.length === 1) return strs[0]

    let i = 0;
    let j;

    while (true) {
        j = 0;
        let prefix = strs[j][i]
        if(!prefix) return res
        
        for (j = 1; j < strs.length; j++) {
            if (strs[j][i] !== prefix) {
                return res;
            }
        }
        res += prefix;
        i++;
    }
};
// @lc code=end

console.log(longestCommonPrefix(["", ""]));

