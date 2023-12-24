/*
 * @lc app=leetcode id=9 lang=typescript
 *
 * [9] Palindrome Number
 */

// @lc code=start
// function isPalindrome(x: number): boolean {
//     if (x < 0) return false;
//     if (x < 10) return true;

//     const strX = String(x);
//     for (let i = 0; i < strX.length / 2; i++) {
//         if (strX[i] !== strX[strX.length - i - 1]) {
//             return false
//         }
//     }

//     return true;
// };

// 不转成字符串
function isPalindrome(x: number): boolean {
    if (x < 0) return false;
    if (x < 10) return true;

    const singleArr : number[] = []

    while (true) {
        let tail = x % 10;
        let remain = Math.floor(x / 10)
        x = remain
        if (remain === 0 && tail === 0) break;
        singleArr.push(tail);
    }

    for(let i = 0 ; i < singleArr.length / 2 ; i ++ ){
        if(singleArr[i] !== singleArr[singleArr.length - 1 - i]) {
            return false;
        }
    }

    return true

}

// @lc code=end
