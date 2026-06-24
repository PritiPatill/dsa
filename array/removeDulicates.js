var removeDuplicates = function(nums) {
    let ptr = 0
    for(let i=1; i < nums.length; i++){
        if(nums[i] !== nums[ptr]){
            ptr++
            nums[ptr] = nums[i]
        }
    }
    return ptr+1
};

// TC=O(n)
// SC=O(1)