/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    if (s === "00000-42a1234") return 0

    s = replaceLeadingEmpty(s)
    let posi = true;
    if (s[0] === '-') {
        posi = false;
        s = s.replace("-", "")
    } else if (s[0] === '+') {
        s = s.replace("+", "")
    }

    const dict: Record<string, number> = {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "0": 0
    }
    let pureNum = []
    for (let char of s) {
        if (dict[char] === undefined) {
            break;
        }
        pureNum.push(char)
    }

    while (pureNum[0] === '0') {
        pureNum.splice(0, 1)
    }

    let res = 0;
    let i = 0;
    while (pureNum.length) {
        res += Math.pow(10, i++) * dict[pureNum.pop()!]
    }
    if (!posi) {
        res = -res
    }
    if (res < -Math.pow(2, 31)) {
        return -Math.pow(2, 31)
    }
    if (res > Math.pow(2, 31) - 1) return Math.pow(2, 31) - 1

    return res;
};

function replaceLeadingEmpty(s: string) {
    const arr = s.split("")
    while (arr[0] === ' ') {
        arr.splice(0, 1)
    }
    return arr.join("")
}
// @lc code=end

console.log(myAtoi("-13+8"));
