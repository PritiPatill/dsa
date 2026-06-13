
// function printPattern(n){
//     for(let i=0; i<n; i++){
//         let str=""
//         for(let j=0; j<n;j++){
//             str = str+"*"
//         }
//         console.log(str)
//     }
// }

// printPattern(4)

// function printPattern(n){
//     for(let i=1; i<=n; i++){
//         let str=""
//         for(let j=1; j<=i;j++){
//             str = str+"*"
//         }
//         console.log(str)
//     }
// }

// printPattern(10)


// function printPattern(n){
//     for(let i=1; i<=n; i++){
//         let str=""
//         for(let j=1; j<=i;j++){
//             str = str+j
//         }
//         console.log(str)
//     }
// }

// printPattern(5)

// function printPattern(n){
//     for(let i=1; i<=n; i++){
//         let str=""
//         for(let j=1; j<=i;j++){
//             str = str+i
//         }
//         console.log(str)
//     }
// }

// printPattern(5)

// function printPattern(n){
//     for(let i=n; i>0; i--){
//         let str=""
//         for(let j=1; j<=i;j++){
//             str = str+j
//         }
//         console.log(str)
//     }
// }

// printPattern(5)

// function printPattern(n){
//     for(let i=n; i>0; i--){
//         let str=""
//         for(let j=1; j<=i;j++){
//             str = str+"*"
//         }
//         console.log(str)
//     }
// }

// printPattern(5)

// function printPattern(n){
//     for(let i=n; i>0; i--){
//         let str=""
//         for(let j=1; j<=i;j++){
//             str = str+"*"
//         }
//         console.log(str)
//     }
// }

// printPattern(5)

// function printPattern(n){
//     for(let i=0; i<n; i++){
//         let str=""
//         for(let k=0; k<((n-i)-1); k++){
//             str = str + " "
//         }
//         for(let k=0; k<=i; k++){
//             str = str + "*"
//         }
//         console.log(str)
//     }
// }

// printPattern(5)

// function printPattern(n){
//     for(let i=0; i<n; i++){
//         let str=""
//         for(let k=n; k>i; k--){
//             str = str + "*"
//         }
//         console.log(str)
//     }
// }

// printPattern(5)

// function printPattern(n){
//     for(let i=0; i<n; i++){
//         let bit=1
//         let str=""
//         for(let k=0; k<=i; k++){
//             str = str + bit
//             bit = bit ? 0 : 1
//         }
//         console.log(str)
//     }
// }

// printPattern(6)

function printPattern(n){
    let bit=1
    for(let i=0; i<n; i++){
        let str=""
        for(let k=0; k<=i; k++){
            str = str + bit
            bit = bit ? 0 : 1
        }
        console.log(str)
    }
}

printPattern(6)