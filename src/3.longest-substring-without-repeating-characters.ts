/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
// function lengthOfLongestSubstring(s: string): number {
//     let res = 0;
//     let count = 0;
//     let map = new Map();

//     for (let i = 0; i < s.length; i++) {
//         let valueInMap = map.get(s[i])
//         if (valueInMap !== undefined) {
//             if (count > res) {
//                 res = count
//             }
//             i = valueInMap
//             map.clear();
//             count = 0;
//         } else {
//             map.set(s[i], i)
//             count++
//         }
//     }
//     if (count > res) {
//         res = count
//     }
//     return res
// };

// 滑动窗口，不回溯
function lengthOfLongestSubstring(s: string): number {
    let map = new Map();
    let left = 0;
    let res = 0;

    for (let i = 0; i < s.length; i++) {
        let valueInMap = map.get(s[i])
        if (valueInMap !== undefined) {
            // 存储窗口长度
            if (res < i - left) {
                res = i - left
            }
            // 移动窗口到重复元素的下一位（需要判断不允许窗口左侧回溯，测试用例abba）
            if (left < valueInMap + 1) {
                left = valueInMap + 1;
            }
        }
        map.set(s[i], i)
    }

    if (res < s.length - left) {
        res = s.length - left
    }

    return res
};


// @lc code=end

console.log(lengthOfLongestSubstring("abba"));
