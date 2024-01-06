/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
// function reverse(x: number): number {
//     const array = []
//     let posi = true;
//     if (x < 0) {
//         posi = false;
//         x = -x;
//     }

//     while (x !== 0) {
//         let singleValue = x % 10;
//         let remain = Math.floor(x / 10)
//         array.push(singleValue)
//         x = remain
//     }

//     let i = 0;
//     while (array.length) {
//         x += Math.pow(10, i++) * array.pop()!
//     }

//     if (!posi) x = -x;

//     if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1) return 0

//     return x

// };

// 字符串
function reverse(x: number): number {
    let posi = true;
    if (x < 0) {
        posi = false;
        x = -x;
    }
    let str = String(x);
    str = reverseStr(str);
    if (!posi) {
        str = `-${str}`
    }
    x = Number(str)

    if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1) return 0

    return x;
}

function reverseStr(x: string) {
    let arr = x.split('')
    for (let i = 0; i < arr.length / 2; i++) {
        let tmp = arr[i]
        arr[i] = arr[arr.length - i - 1]
        arr[arr.length - i - 1] = tmp;
    }

    while (arr[0] === '0') {
        arr.splice(0, 1)
    }
    return arr.join('')
}
// @lc code=end

console.log(reverse(120));


