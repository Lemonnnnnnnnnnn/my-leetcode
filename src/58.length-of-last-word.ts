/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
// 从前往后
// function lengthOfLastWord(s: string): number {
//     let res = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === ' ') {
//             if (s[i + 1] && s[i + 1] !== " ") {
//                 res = 0
//             }
//         } else {
//             res++
//         }
//     }
//     return res
// };

// 从后往前
function lengthOfLastWord(s: string): number {
    let res = 0;
    let findWord = false;
    for (let i = s.length - 1; i >= 0; i--) {
        if (!findWord) {
            if (s[i] === " ") {
                continue
            } else {
                findWord = true;
                res++;
            }
        } else {
            if (s[i] === " ") {
                break
            } else {
                res++;
            }
        }
    }
    return res
}
// @lc code=end

// console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(lengthOfLastWord("Hello World"));

