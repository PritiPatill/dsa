let arr = [4, 9, 0, 2, 8, 7, 1]

function secondMax() {
    let fm= -Infinity
    let sm= -Infinity
    for(let i=0; i<arr.length; i++){
        if(fm < arr[i]){
            sm = fm
            fm = arr[i]
        }else{
            if(arr[i] != fm && sm < arr[i]){
                sm=arr[i]
            }
        }
    }
    return sm
}

console.log(secondMax())