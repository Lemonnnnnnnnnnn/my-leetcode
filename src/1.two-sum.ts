/*
 * @lc app=leetcode id=1 lang=typescript
 *
 * [1] Two Sum
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
    let res: number[] = [];
    let find = false;
    for (let i = 0; i < nums.length; i++) {
        if (find) break
        for (let j = i + 1; j < nums.length; j++) {
            if (find) break
            if (nums[i] + nums[j] === target) {
                res = [i, j]
                find = true
            }
        }
    }
    return res
};
// @lc code=end

