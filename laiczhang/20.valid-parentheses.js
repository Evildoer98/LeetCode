/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    if(s.length%2!==0){
        return false;
    }
    var length = s.length / 2
    for(var i = 0; i < length; i++) {
        s = s.replace("()","").replace("{}", "").replace("[]", "")
    }
    return s.length == 0
};