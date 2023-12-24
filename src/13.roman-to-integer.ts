/*
 * @lc app=leetcode id=13 lang=typescript
 *
 * [13] Roman to Integer
 */

// @lc code=start
function romanToInt(s: string): number {
    const dist2: Record<string, number> = {
        "IV": 4,
        "IX": 9,
        "XL": 40,
        "XC": 90,
        "CD": 400,
        "CM": 900,
    }
    const dist = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    let i = 0;
    let res = 0;

    while (i < s.length) {
        if (i + 1 < s.length) {
            let two = s[i] + s[i + 1]
            if (dist2[two]) {
                res += dist2[two];
                i += 2;
                continue
            }
        }

        let char = s[i] as keyof typeof dist
        res += dist[char];
        i++;
    }

    return res

};
// @lc code=end

console.log(romanToInt("MCMXCIV"));
