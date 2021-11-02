/**
 * 请编写一个函数，用于 删除单链表中某个特定节点 。在设计函数时需要注意，你无法访问链表的头节点 head ，只能直接访问 要被删除的节点 。
 * 题目数据保证需要删除的节点 不是末尾节点 。
 * 
 * 链接：https://leetcode-cn.com/problems/delete-node-in-a-linked-list
 * 
 */

/**
 * 输入：head = [1,2,3,4], node = 3
 * 输出：[1,2,4]
 * 
 * 
 * 输入：head = [0,1], node = 0
 * 输出：[1]
 * 
 * 
 * 输入：head = [-3,5,-99], node = -3
 * 输出：[5,-99]
 * 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
 var deleteNode = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};