/*
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-17 15:30:03
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-17 18:06:04
 */

/**
 * 给定一个二叉搜索树的根节点 root ，和一个整数 k ，请你设计一个算法查找其中第 k 个最小元素（从 1 开始计数）。
 * 
 * 链接：https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/
 */

/**
 * 输入：root = [3,1,4,null,2], k = 1
 * 输出：1
 * 
 * 输入：root = [5,3,6,2,4,null,null,1], k = 3
 * 输出：3
 */

/**
 * 二叉搜索树具有如下性质：
 * 
 * 结点的左子树只包含小于当前结点的数。
 * 
 * 结点的右子树只包含大于当前结点的数。
 * 
 * 所有左子树和右子树自身必须也是二叉搜索树。
 * 
 * 二叉树的中序遍历即按照访问左子树——根结点——右子树的方式遍历二叉树；在访问其左子树和右子树时，我们也按照同样的方式遍历；直到遍历完整棵树。
 * 
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 
 var kthSmallest = function(root, k) {
    const arr = []
    while(root != null || arr.length) {
        while(root != null) {
            arr.push(root)
            root = root.left
        }
        root = arr.pop()
        --k
        if (k === 0) {
            break
        }
        root = root.right
    }
    return root.val
};