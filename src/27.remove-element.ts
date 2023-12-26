/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
    let moveStep = 0;
    let res = 0;
    for (let i = 0; i < nums.length; i++) {
        nums[i - moveStep] = nums[i]

        if (nums[i] === val) {
            moveStep++
        } else {
            res++
        }
    }
    return res
};
// @lc code=end

console.log(removeElement([3, 2, 2, 3], 3));

