var reverseString = function(s) {
    let start=0
    let n = s.length
    let end = n-1
    let mid = Math.floor(n/2)

    for(let i=0; i<mid; i++){
        let temp = s[start]
        s[start] = s[end]
        s[end] = temp

        start++
        end--
    }
};

// TC = O(n/2) = o(n)
// SC = O(1)