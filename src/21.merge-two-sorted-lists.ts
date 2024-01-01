/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
 */

// class ListNode {
//     val: number
//     next: ListNode | null
//     constructor(val?: number, next?: ListNode | null) {
//         this.val = (val === undefined ? 0 : val)
//         this.next = (next === undefined ? null : next)
//     }
// }

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

// 递归版本
// function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
//     if (!list1) return list2
//     if (!list2) return list1

//     let header;
//     if (list1.val <= list2.val) {
//         header = list1;
//     } else {
//         header = list2
//     }

//     if (list1.val <= list2.val) {
//         if (list1.next && list1.next.val <= list2.val) {
//             mergeTwoLists(list1.next, list2)
//         } else {
//             let tmp = list1.next;
//             list1.next = list2;
//             mergeTwoLists(tmp, list2)
//         }
//     } else {
//         if (list2.next && list2.next.val < list1.val) {
//             mergeTwoLists(list1, list2.next)
//         } else {
//             let tmp = list2.next;
//             list2.next = list1
//             mergeTwoLists(list1, tmp)
//         }
//     }

//     return header
// };

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    if (!list1) return list2
    if (!list2) return list1

    let header;
    if (list1.val <= list2.val) {
        header = list1;
    } else {
        header = list2
    }

    let p: ListNode | null = list1;
    let q: ListNode | null = list2;
    let tmp: ListNode | null

    while (p && q) {
        if (p.val <= q.val) {
            if (p.next && p.next.val <= q.val) {
                p = p.next;
            } else {
                tmp = p.next;
                p.next = q;
                p = tmp;
            }
        }
        else {
            if (q.next && q.next.val < p.val) {
                q = q.next;
            } else {
                tmp = q.next;
                q.next = p;
                q = tmp;

            }
        }
    }

    return header
}
// @lc code=end

const list1 = new ListNode(5)
const list2 = new ListNode(1, new ListNode(2, new ListNode(4)))

console.dir(mergeTwoLists(list1, list2), { depth: null });
