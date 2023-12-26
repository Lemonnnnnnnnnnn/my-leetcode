/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
    let min = nums[0]
    let insertIndex = 0;
    let res = 1;

    for(let i = 1 ; i < nums.length ; i ++ ){
        if(nums[i] > min){
            nums[++insertIndex] = nums[i]
            min = nums[i]
            res += 1;
        }
    }

    return res
};
// @lc code=end

