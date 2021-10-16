/*
 * @Descripttion: 
 * @version: 
 * @Author: Evildoer98
 * @Date: 2021-10-16 15:10:31
 * @LastEditors: Evildoer98
 * @LastEditTime: 2021-10-16 15:16:04
 */

/**
 * 给定一个仅包含数字 0-9 的字符串 num 和一个目标值整数 target ，在 num 的数字之间添加 二元 运算符（不是一元）+、- 或 * ，返回所有能够得到目标值的表达式。
 * 链接：https://leetcode-cn.com/problems/expression-add-operators
 */

/**
 * 
 * 输入: num = "123", target = 6
 * 输出: ["1+2+3", "1*2*3"] 
 * 
 * 输入: num = "232", target = 8
 * 输出: ["2*3+2", "2+3*2"]
 * 
 * 输入: num = "105", target = 5
 * 输出: ["1*0+5","10-5"]
 * 
 * 输入: num = "00", target = 0
 * 输出: ["0+0", "0-0", "0*0"]
 * 
 * 输入: num = "3456237490", target = 9191
 * 输出: []
 * 
 */

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
 var addOperators = function(num, target) {
    let arr = num.split('')
    console.log(arr); // [1, 2, 3]
    
};

addOperators('123', 6)