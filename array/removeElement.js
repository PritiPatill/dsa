var removeElement = function(nums, val) {
    let ptr=0
    for(let i=0; i<nums.length;i++){
        if(nums[i] !== val){
            nums[ptr] = nums[i]
            ptr++
        }
        
    }
    return ptr
}

// TC=O(n)
// SC=O(1)