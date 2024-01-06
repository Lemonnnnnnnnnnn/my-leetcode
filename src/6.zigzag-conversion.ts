/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
enum Status {
  DOWN,
  UP,
}

// 用二维数组进行模拟
// function convert(s: string, numRows: number): string {
//   if (numRows === 1) return s;

//   const array = Array.from<string[]>({ length: numRows }).fill([]);
//   for (let i in array) {
//     array[i] = Array.from<string>({ length: s.length }).fill("");
//   }
//   let res = "";

//   let row = 0,
//     column = 0,
//     status: Status = Status.DOWN;

//   for (let char of s) {
//     array[row][column] = char;

//     switch (status) {
//       case Status.DOWN: {
//         row++;
//         break;
//       }
//       case Status.UP: {
//         row--;
//         column++;
//         break;
//       }
//     }

//     if (row === 0) {
//       status = Status.DOWN;
//     } else if (row === numRows - 1) {
//       status = Status.UP;
//     }
//   }

//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       if (array[i][j]) {
//         res += array[i][j];
//       }
//     }
//   }

//   return res;
// }

// 一维数组，用字符串替换数组来优化代码
function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  let array: string[] = [];
  let row = 0,
    status: Status = Status.DOWN;

  for (let char of s) {
    array[row] = (array[row] || "") + char;
    switch (status) {
      case Status.DOWN: {
        row++;
        break;
      }
      case Status.UP: {
        row--;
        break;
      }
    }

    if (row === 0) {
      status = Status.DOWN;
    } else if (row === numRows - 1) {
      status = Status.UP;
    }
  }

  return array.join("");
}
// @lc code=end

console.log(convert("PAYPALISHIRING", 4));
