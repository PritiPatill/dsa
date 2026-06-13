function countDigit(n){
    let count=0
    if(n===0) return 1
    n = Math.abs(n)
    while(n!==0){
        count++;
        n=Math.floor(n/10)
    }
    return count
}

console.log(countDigit(-298))