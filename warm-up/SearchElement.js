let arr = [4, 2, 0, 10, 8, 30]

function searchElement(num){
    for(let i=0; i< arr.length; i++){
        if(arr[i] === num){
            return i
        }
    }

    return -1
}

console.log(searchElement(20))