var merge = function(nums1, m, nums2, n) {
    let p1=0, p2=0
    let n1copy = nums1.slice(0,m)
    for(let i=0; i<(m+n); i++){
        if(p2>=n || (p1 < m && n1copy[p1] < nums2[p2])){
            nums1[i] = n1copy[p1]
            p1++
           
        }else{
            nums1[i] = nums2[p2]
            p2++
        }
    }
};

//TC = O(m+n)
//SC= O(1)