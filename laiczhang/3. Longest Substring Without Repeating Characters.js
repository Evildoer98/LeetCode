/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    let len = s.length,
        map = new Map()
    let ans = 0,
        [left, right] = [0,0]
    while(right<len){
        const c=s[right]
        // console.log(c,map.get(c))
        left=Math.max(left,map.get(c)||0)
        ans=Math.max(ans,right-left+1)
        map.set(c,++right)
    }
    return ans
};
console.log(lengthOfLongestSubstring('abcabcbb'))