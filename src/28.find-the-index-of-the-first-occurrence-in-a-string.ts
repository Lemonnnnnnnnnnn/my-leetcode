/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
// 一般解法
// function strStr(haystack: string, needle: string): number {
//     let i = 0, j = 0;
//     let res = i;

//     while (i < haystack.length && j < needle.length) {
//         if (res === haystack.length) break
//         if (haystack[i] === needle[j]) {
//             if (j + 1 === needle.length) {
//                 return res;
//             }
//             i++;
//             j++;
//         } else {
//             j = 0;
//             i = ++res
//         }
//     }

//     return -1
// };

/**
 * @description
 * KMP算法 
 * @ref
 * - https://cloud.tencent.com/developer/article/1706743
 * - https://juejin.cn/post/7079403753215901709
 * @detail
 * - 以主串 ABCDABABCDABD，子串 ABCDABD ，next数组 [-1, 0, 0, 0, 1, 2, 0] 为例：
 * - 当ABCDAB“A”发生失配，主串不回溯，字串回溯到AB"C" 处开始新一轮匹配。
 * - 这是因为 ABCDAB"A" 虽然失配，但其前两个字母 AB 刚好匹配头两个字母 AB，因此头两个字母无需在进行匹配，直接匹配第三个字母“C” 即可
 * - 从算法来看，当 ABCDAB"A" 发生失配，其前一个匹配元素的 next 值 2 即指向了字串回溯的位置
 * @todo
 * 背后的数学原理
 */
function strStr(haystack: string, needle: string): number {
    let next = getNext(needle)

    let i = 0, j = 0;

    while (i < haystack.length && j < needle.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
            if (j === needle.length) {
                return i - needle.length
            }
        } else {
            if (j === 0) {
                i++;
            } else {
                j = next[j - 1];
            }
        }
    }

    return -1
}

/**
 * 
 * @description
 * next数组每个位置的值：【从数组首部到该位置的子串】的【最长前后缀共有元素】 
 * 如 "ABCDAB"的前缀为[A, AB, ABC, ABCD, ABCDA]，后缀为[BCDAB, CDAB, DAB, AB, B]，共有元素为"AB"，长度为2；
 */
function getNext(needle: string): number[] {
    let next = Array.from<number>({ length: needle.length }).fill(0)

    for (let k = 1; k < needle.length; k++) {
        let max = 0;

        for (let i = 0; i < k; i++) {
            let prefix = needle.substring(0, i + 1);
            let suffix = needle.substring(k - i, k + 1)
            let len = prefix.length
            if (prefix === suffix && max < len) {
                max = len;
            }
        }

        next[k] = max;
    }

    return next
}
// @lc code=end

// console.log(getNext("ABCDABD"));
console.log(strStr("babbbbbabb" , "bbab"));


