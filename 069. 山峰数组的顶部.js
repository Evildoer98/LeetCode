/*
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-14 23:53:20
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-14 23:57:20
 */


/**
 * 符合下列属性的数组 arr 称为 山峰数组（山脉数组） ：
 * arr.length >= 3
 * 存在 i（0 < i < arr.length - 1）使得：
 * arr[0] < arr[1] < ... arr[i-1] < arr[i]
 * arr[i] > arr[i+1] > ... > arr[arr.length - 1]
 * 给定由整数组成的山峰数组 arr ，返回任何满足 arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1] 的下标 i ，即山峰顶部。
 * 
 * 链接：https://leetcode-cn.com/problems/B1IidL
 */

/**
 * 
 * 输入：arr = [0,10,5,2]
 * 输出：1
 * 
 * 输入：arr = [24,69,100,99,79,78,67,36,26,19]
 * 输出：2
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    let max = 0
    let position = 0
    arr.forEach((item, index) => {
        if (item > max) {
            max = item
            position = index
        }
    })
    return position
};