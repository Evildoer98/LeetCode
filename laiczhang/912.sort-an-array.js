// 快速排序
// Arrays.sort(),用了三种排序哦，数组长度小于47时用的插入排序，长度小于286用的快排，大于286时用的归并
// 
// Array.prototype.sort
// 浏览器	使用的 JavaScript 引擎	排序算法	源码地址
// Google Chrome	V8	插入排序和快速排序	[源码实现](https://github.com/v8/v8/blob/master/src/js/array.js#L768)
// Mozilla Firefox	SpiderMonkey	归并排序	[源码实现](https://github.com/mozilla/gecko-dev/blob/master/js/src/jsarray.cpp)
// Safari	Nitro（JavaScriptCore ）	归并排序和桶排序	[源码实现](https://github.com/WebKit/webkit/blob/master/Source/JavaScriptCore/builtins/ArrayPrototype.js#L423)
// Microsoft Edge 和 IE(9+)	Chakra	快速排序	[源码实现](https://github.com/Microsoft/ChakraCore/blob/master/lib/Common/DataStructures/QuickSort.h)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    let len = nums.length;
    if (len <= 1) return nums;
    let povitIndex = Math.floor(len / 2);
    let povit = nums.splice(povitIndex, 1)[0];
    let left = [], right = [];
    for(let value of nums){
        if(value < povit){
            left.push(value);
        }else{
            right.push(value);
        }
    }
    return sortArray(left).concat([povit], sortArray(right));
};

let arr = [2,1,5,2,3,4,6,8,6,9,0];
console.log(sortArray(arr));