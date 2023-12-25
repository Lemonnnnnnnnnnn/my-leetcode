/*
 * @lc app=leetcode id=20 lang=typescript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
function isValid(s: string): boolean {
    const stack: string[] = []

    const dict: Record<string, string> = {
        "(": ")",
        "[": "]",
        "{": "}"
    }

    for (let char of s) {
        if (Object.keys(dict).includes(char)) {
            stack.push(char)
        } else {
            const stackTop = stack.pop()
            if (!stackTop) return false

            if (dict[stackTop] !== char) {
                return false
            }
        }
    }
    if (stack.length) return false;

    return true;
};
// @lc code=end

console.log(isValid("("));
