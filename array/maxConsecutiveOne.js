var findMaxConsecutiveOnes = function(nums) {
    let max=0, count=0

    for(let i=0; i<nums.length; i++){
        if(nums[i] === 1){
            count ++
            max = max < count ? count : max
        }else{
            count = 0
        }
    }
    return max
};

// TC = O(n)
// SC = O(1)