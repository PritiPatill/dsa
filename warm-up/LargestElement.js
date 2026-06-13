
let arr = [-10, -2, -30]
function largeElement(){
    let max = -Infinity
    for(let i=0; i<arr.length;i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }
    return max
}

console.log("largeElement : ", largeElement())