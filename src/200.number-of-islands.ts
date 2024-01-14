/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 */

// @lc code=start
function numIslands(grid: string[][]): number {
    let res = 0;
    const searched: boolean[][] = []
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (!searched[i]) {
                searched[i] = [false]
            } else {
                searched[i].push(false)
            }
        }
    }


    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (searched[i][j]) continue
            searched[i][j] = true;
            if (grid[i][j] === '1') {
                res += 1;
                search(grid, searched, i, j)
            }
        }
    }

    return res
};

function search(grid: string[][], searched: boolean[][], i: number, j: number) {
    if (grid[i + 1]?.[j] === '1' && !searched[i + 1]?.[j]) {
        searched[i + 1][j] = true
        search(grid, searched, i + 1, j)
    }
    if (grid[i - 1]?.[j] === '1' && !searched[i - 1]?.[j]) {
        searched[i - 1][j] = true
        search(grid, searched, i - 1, j)
    }
    if (grid[i]?.[j + 1] === '1' && !searched[i]?.[j + 1]) {
        searched[i][j + 1] = true
        search(grid, searched, i, j + 1)
    }
    if (grid[i]?.[j - 1] === '1' && !searched[i]?.[j - 1]) {
        searched[i][j - 1] = true
        search(grid, searched, i, j - 1)
    }
}

// @lc code=end

const testCase = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

console.log(numIslands(testCase))