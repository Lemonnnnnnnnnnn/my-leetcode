/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
    return two(nums, 0, nums.length, target)
};

function two(nums: number[], left: number, right: number, target: number): number {
    if (left > right) {
        return left
    }
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
        return mid
    } else {
        if (nums[mid] < target) {
            return two(nums, mid + 1, right, target)
        } else {
            return two(nums, left, mid - 1, target)
        }
    }
}
// @lc code=end

console.log(searchInsert([1, 3, 5, 6], 7));
