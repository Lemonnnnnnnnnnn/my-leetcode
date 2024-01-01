/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1) return l2
    if (!l2) return l1

    let p = l1, q = l2;
    let increment = 0;
    // 相加
    while (p.next && q.next) {
        let total = increment + p.val + q.val;

        let remain = total % 10;
        increment = Math.floor(total / 10)

        p.val = remain;

        p = p.next;
        q = q.next;
    }

    // 处理最后一个值
    let total = increment + p.val + q.val;

    let remain = total % 10;
    increment = Math.floor(total / 10)

    p.val = remain;

    // 两链表长度相等
    if (!p.next && !q.next) {
        if (increment) {
            p.next = new ListNode(increment, null)
        }
        return l1
    } else if (!q.next) {
        // l1 更长
        p = p.next as ListNode;
    } else {
        // l2 更长
        p.next = q.next;
        p = p.next;
    }

    // 循环剩下的单链表
    while (p.next) {
        total = increment + p.val

        remain = total % 10;
        increment = Math.floor(total / 10)

        p.val = remain

        p = p.next;
    }

    // 处理最后一个值
    total = increment + p.val;

    remain = total % 10;
    increment = Math.floor(total / 10)

    p.val = remain;

    // 最后一位是否有进位
    if (increment) {
        p.next = new ListNode(increment, null)
    }
    return l1;
};


// @lc code=end

const l1 = new ListNode(2, new ListNode(4, new ListNode(3)))
const l2 = new ListNode(8, new ListNode(9))
// const l2 = new ListNode(5, new ListNode(6, new ListNode(4)))
console.dir(addTwoNumbers(l2, l1), { depth: null });

// 342 + 998 = 1340
// 0431
// 342 + 98 = 440
// 044