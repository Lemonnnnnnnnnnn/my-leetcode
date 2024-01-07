/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start

// 解题的关键在于移动短板
function maxArea(height: number[]): number {
    let max = 0;
    let i = 0, j = height.length - 1;
    while (i < j) {
        const minHeightIndex = height[i] < height[j] ? i : j
        let minHeight = height[minHeightIndex]
        let area = minHeight * (j - i)
        if (area > max) {
            max = area
        }

        if (minHeightIndex === i) {
            i++
        } else {
            j--
        }

    }
    return max
};

// @lc code=end
console.log(maxArea([1, 3, 2, 5, 25, 24, 5]));


