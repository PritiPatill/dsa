var isPalindrome = function(x) {
    let n = x
    let sum =0
    if(n < 0) return false
    while(n !== 0){
        let rem  = n%10
        sum = (sum*10) + rem
        n = Math.floor(n/10)
    }
    return x === sum ? true : false
};