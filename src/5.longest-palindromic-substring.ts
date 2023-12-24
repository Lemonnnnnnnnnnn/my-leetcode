/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start

function longestPalindrome(s: string): string {
    if (s.length === 1) return s;
    let sArr = s.split("")

    let res = ""
    let max = 0

    for (let i = 0.5; i < s.length - 1; i += 0.5) {
        for (let j = 1; j < s.length / 2 + 1; j++) {
            let preIndex
            let nextIndex
            if (isFraction(i)) {
                preIndex = i - j + 0.5
                nextIndex = i + j - 0.5
            } else {
                preIndex = i - j
                nextIndex = i + j
            }

            const pre = s[preIndex]
            const next = s[nextIndex]
            if (!pre || !next) break

            if (pre === next) {
                const diff = nextIndex - preIndex
                if (max < diff) {
                    res = sArr.slice(preIndex, nextIndex + 1).join('')
                    max = diff
                }
            } else {
                break
            }
        }
    }

    if (!res.length) return s[0]

    return res;
};


function isFraction(n: number) {
    return n / 0.5 % 2 === 1
}


// @lc code=end

console.log(longestPalindrome("babadada"));

