var singleNumber = function(nums) {
    // let obj = {}

    // for(let i=0; i<nums.length; i++){
    //     obj[nums[i]] = obj[nums[i]] ? obj[nums[i]] + 1 : 1
    // }

    // for(key in obj){
    //     if(obj[key] === 1){
    //         return Number(key)
    //     }
    // }

      let xor = 0
    for(let i=0; i<nums.length; i++){
        xor = xor ^ nums[i]
    }
    return xor
};


// TC = O(n)
// SC = O(n)