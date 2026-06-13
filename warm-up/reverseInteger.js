var reverse = function(x) {
    let n = Math.abs(x)
    let sum =0
    while(n !== 0){
        let rem  = n%10
        sum = (sum*10) + rem
        n = Math.floor(n/10)
    }
    let limit = Math.pow(2,31)
    if(sum < -limit || sum > limit ) return 0
    return x < 0 ? -sum : sum
};