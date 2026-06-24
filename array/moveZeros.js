var moveZeroes = function(nums) {
    let ptr=0
    for(let i=0;i <nums.length;i++){
        if(nums[i] !== 0){
            nums[ptr] = nums[i]
            ptr++
        }
    }
    // for(let j=ptr; j<nums.length; j++){
    //     nums[j] = 0
    // }
    nums.fill(0, ptr)
};

// TC = O(n)
// SC = O(1)