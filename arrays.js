//min , max, linear search very easy

//span of an array
// const spanOfArray = (arr) => {
//     return Math.max(...arr) - Math.min(...arr)
// }

// console.log(spanOfArray([1,2,3,4,5]))

//bar chart
// const barChart = (arr) => {
//     let max  = Math.max(...arr)
//     for(let r=1;r<=max;r++){
//         for(let c=0;c<arr.length;c++){
//             if(arr[c]+r-1 >= max){
//                 process.stdout.write('*')
//             }else{
//                 process.stdout.write(' ')
//             }
//         }
//         console.log()
//     }
// }

// barChart([5,3,0,1,6])

//revsrse an array
const reverseArray = (arr) => {
    for(let i=0;i<arr.length/2;i++){
        let temp = arr[i]
        arr[i] = arr[arr.length-i-1]
        arr[arr.length-i-1] = temp
    }
    //console.log(arr)
}

// reverseArray([1,2,3,4,5,6])

//addition  of two array 
// const addTwoArray = (a, b) => {
//   let len = a.length > b.length ? a.length : b.length;
//   let res = new Array(len);
//   res.fill(0);
//   let i = a.length - 1,
//     j = b.length - 1,
//     c = 0,
//     k = len - 1;
//   while (k >= 0) {
//     let sum = 0;
//     sum += c;
//     if (i >= 0) {
//       sum += a[i];
//       i--;
//     }
//     if (j >= 0) {
//       sum += b[j];
//       j--;
//     }
//     let val = sum % 10;
//     res[k] = val;
//     c = Math.floor(sum / 10);
//     k--;
//   }
//   if (c != 0) res[0] = c * 10 + res[0];
//   console.log(res);
// };

// addTwoArray([9,9,9],[1])


//subtraction of two array (considering b is always greater number)

// const subtractTwoArray = (a,b) => {
//     let diff = new Array(b.length)
//     let i = a.length-1,j=b.length-1,k=b.length-1,borrow=0
//     while(k>=0){
//         let digit = 0 
//         digit+=borrow+b[j]

//         if(i>=0){
//             digit -= a[i]
//         }

//         if(digit<0){
//             diff[k] = 10+digit
//             borrow = -1
//         }else{
//             diff[k] = digit
//             borrow=0
//         }
//         i--,j--,k--
//     }
//     console.log(diff)
// }

// subtractTwoArray([1],[1,0,0,0])

const rotateAnArrayleft  = (arr,k) => {
    k = ((k%arr.length)+arr.length)%arr.length
    //reverse 0 to k-1
    for(let i=0;i<k/2;i++){
        let temp = arr[i]
        arr[i]=arr[k-i-1]
        arr[k-i-1]=temp
    }
    //reverse k to n-1
    for(let i=k;i<(k+arr.length)/2;i++){
        let temp = arr[i]
        arr[i] = arr[arr.length-1-i+k]
        arr[arr.length-1-i+k]=temp
    }
    //reverse whole array
    for(let i=0;i<arr.length/2;i++){
        let temp = arr[i]
        arr[i] = arr[arr.length-i-1]
        arr[arr.length-i-1] = temp
    }
    console.log(arr)
}

// rotateAnArrayleft([1,2,3,4,5],1)

const rotateAnArrayRight  = (arr,k) => {
    k = ((k%arr.length)+arr.length)%arr.length
    //reverse whole array
    for(let i=0;i<arr.length/2;i++){
        let temp = arr[i]
        arr[i] = arr[arr.length-i-1]
        arr[arr.length-i-1] = temp
    }

    //reverse 0 to k-1
    for(let i=0;i<k/2;i++){
        let temp = arr[i]
        arr[i]=arr[k-i-1]
        arr[k-i-1]=temp
    }

    //reverse k to n-1
    for(let i=k;i<(k+arr.length)/2;i++){
        let temp = arr[i]
        arr[i] = arr[arr.length-1-i+k]
        arr[arr.length-1-i+k]=temp
    }
    //console.log(arr)
}

// const inverseAnArray = (arr) => {
//     let res = new Array(arr.length)
//     for(let i=0;i<arr.length;i++){
//         res[arr[i]]=i
//     }
//     console.log(res)
// }

// inverseAnArray([4,0,2,3,1])

//subarrays or substring => continuous, n(n+1)/2 arrays
//subsequence or subset => may or may be not continuous, 2^n arrays 
// we can visualize subarrays as a part of subsequence
// const subArrays = (arr) => {
//     for(let i = 0;i<arr.length;i++){
//         for(let j=i;j<arr.length;j++){
//             for(let k=i;k<=j;k++){
//                 process.stdout.write(`${arr[k]} `)
//             }
//             console.log()
//         }
//     }
// }

// subArrays([10,20,30])

// const binarySearch = (arr,ele) => {
//     let start =0,end =arr.length-1,mid;
//     while(start<=end){
//         mid = Math.floor((start+end)/2)
//         console.log(start,end,mid)
//         if(arr[mid]==ele)return mid
//         if(arr[mid]>ele)end=mid-1
//         else start=mid+1
//     }
//     return -1
// }

// console.log(binarySearch([1,2,3,4,5],9))

// const ceilAndFloor = (arr,ele) => {
//     let start =0,end =arr.length-1,mid,ceil,floor;
//     while(start<=end){
//         mid = Math.floor((start+end)/2)
//         console.log(start,end,mid)
//         if(arr[mid]==ele)return arr[mid]
//         if(arr[mid]>ele){
//             end=mid-1
//             ceil = arr[mid]
//         }
//         else {
//             start=mid+1
//             floor = arr[mid]
//         }
//     }
//     return [floor,ceil]
// }

// console.log(ceilAndFloor([1,5,10,15,22,33,40,42,55],49))

// const firstIndex = (arr,ele) => {
//     let start =0,end =arr.length-1,mid,res
//     while(start<=end){
//         mid = Math.floor((start+end)/2)
//         if(arr[mid]==ele){
//             res = mid
//             end = mid-1
//         }
//         else if(arr[mid]>ele){
//             end=mid-1
//         }
//         else {
//             start=mid+1
//         }
//     }
//     return res
// }

// const lastIndex = (arr,ele) => {
//     let start =0,end =arr.length-1,mid,res
//     while(start<=end){
//         mid = Math.floor((start+end)/2)
//         if(arr[mid]==ele){
//             res = mid
//             start = mid+1
//         }
//         else if(arr[mid]>ele){
//             end=mid-1
//         }
//         else {
//             start=mid+1
//         }
//     }
//     return res
// }

// const firstAndLastIndex = (arr,n) => {
//     const first = firstIndex(arr,n)
//     console.log(first)
//     const last = lastIndex(arr,n)
//     return [first,last]
// }

// console.log(firstAndLastIndex([2,2,2,2,3,3,3,4,4,4,4,4,4,4,5,5,6],6))


// const printSubsets = (arr) => {
//   for (let i = 0; i < Math.pow(2, arr.length); i++) {
//     let binary = decimalToBinary(i);
//     let j = arr.length - 1,s='';
//     while (j >= 0) {
//       let rem = binary % 2;
//       if (rem) {
//         s = arr[j] + s
//       } else {
//         s = '_'+s
//       }
//       j--;
//       binary = Math.floor(binary / 2);
//     }
//     console.log(s);
//   }
//   return;
// };

// const decimalToBinary = (n) => {
//     let ans = 0,i=1
//     while(n!=0){
//         let rem = n%2
//         n = Math.floor(n/2)
//         ans = (rem*i)+ans
//         i*=10
//     }
//     return ans
// }

// printSubsets([1,2,3])

// const matrixMultiplication = (a,b) => {
//     if(a[0].length != b.length)return 'matrix cannot be multiplied'
//     let c = new Array(a.length)
//     for(let i=0;i<c.length;i++){
//         c[i] = new Array(b[0].length)
//         c[i].fill(0)
//     }
//     console.log(c)
//     for(let i=0;i<a.length;i++){
//         for(let j=0;j<b[0].length;j++){
//             for(let k=0;k<a[0].length;k++){
//                 console.log(a[i][k]*b[k][j])
//                 c[i][j] += a[i][k]*b[k][j]
//                 console.log(c[i][j])
//             }
//         }
//     }
//     console.log(c)
// }

// matrixMultiplication([[1,2,3],[4,5,6]],[[7,8],[9,10],[11,12]])

// const stateOfWakanda = (arr) => {
//     for(let i=0;i<arr[0].length;i++){
//         if(i%2==0){
//             for(let j=0;j<arr.length;j++){
//                 process.stdout.write(`${arr[j][i]}`)
//             }
//         }else{
//             for(let j=arr.length-1;j>=0;j--){
//                 process.stdout.write(`${arr[j][i]}`)
//             }
//         }
//     }
// }

// stateOfWakanda([[1,2,3],[4,5,6],[7,8,9]])

// const spiralMatrix = (arr) => {
//     let minr=0,maxr=arr.length-1,minc=0,maxc=arr[0].length-1,count=0,total=arr.length*arr[0].length;
//     while(count<total){
//         for(let i=minr;i<=maxr&&count<total;i++){
//             process.stdout.write(`${arr[i][minc]} `)
//             count++
//         }
//         minc++
//         for(let i=minc;i<=maxc&&count<total;i++){
//             process.stdout.write(`${arr[maxr][i]} `)
//             count++
//         }
//         maxr--
//         for(let i=maxr;i>=minr&&count<total;i--){
//             process.stdout.write(`${arr[i][maxc]} `)
//             count++
//         }
//         maxc--
//         for(let i=maxc;i>=minc&&count<total;i--){
//             process.stdout.write(`${arr[minr][i]} `)
//             count++
//         }
//         minr++
//     }
// }

// spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])

// const exitPoint = (arr) => {
//     let dir=0,i=0,j=0
//     while(true){
//         dir+=arr[i][j]
//         dir%=4

//         if(dir==0){
//             j++
//         }else if(dir==1){
//             i++
//         }else if(dir==2){
//             j--
//         }else {
//             i--
//         }

//         if(i<0 || j<0 ||i>=arr.length ||j>=arr[0].length){
//             break
//         }
//     }

//     if(i<0){
//         i++
//     }else if(j<0){
//         j++
//     }else if(i>=arr.length){
//         i--
//     }else if(j>=arr[0].length){
//         j--
//     }

//     return [i,j]
// }

// console.log(exitPoint([[0,0,1,0],[1,0,0,0],[0,0,0,0],[1,0,1,0]]))

//const rotateAnticlockWiseBy90 = (arr) => {
    //It is given that matrix is square, else transpose will not happen right properly

    // Approach 1
    // for(let i=0;i<arr.length/2;i++){
    //     for(let j=i;j<arr.length-i-1;j++){
    //         //storing in a temp var
    //         let temp = arr[i][j]
    //         //right to top
    //         arr[i][j] = arr[j][arr.length-i-1]
    //         //bottom to right
    //         arr[j][arr.length-i-1] = arr[arr.length-i-1][arr.length-j-1]
    //         //left to bottom
    //         arr[arr.length-i-1][arr.length-j-1] = arr[arr.length-j-1][i]
    //         //temp to left
    //         arr[arr.length-j-1][i] = temp
    //     }
    // }

    //Approach 2
    // reverse rows of array the transpose it
    // for(let i=0;i<arr.length;i++){
    //     reverseArray(arr[i])
    // }
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i;j<arr[0].length;j++){
    //         let temp = arr[i][j]
    //         arr[i][j]=arr[j][i]
    //         arr[j][i] = temp
    //     }
    // }
    // console.log(arr)
//}

//rotateAnticlockWiseBy90([[1,2,3],[4,5,6],[7,8,9]])

// const rotateClockWise90 = (arr) => {
//     // first transpose then reverse rows
//     for(let i=0;i<arr.length;i++){
//         for(let j=i;j<arr[0].length;j++){
//             let temp = arr[i][j]
//             arr[i][j]=arr[j][i]
//             arr[j][i] = temp
//         }
//     }
//     for(let i=0;i<arr.length;i++){
//         reverseArray(arr[i])
//     }
//     console.log(arr)
// }

// rotateClockWise90([[1,2,3],[4,5,6],[7,8,9]])

// const ringRotate = (arr,s,r) => {
//     let minr = s-1,minc = s-1, maxr = arr.length-s,maxc= arr[0].length-s
//     let temp = []
//     for(let i=minr;i<=maxr;i++){
//         temp.push(arr[i][minc])
//     }
//     for(let i=minc+1;i<=maxc;i++){
//         temp.push(arr[maxr][i])
//     }
//     for(let i=maxr-1;i>=minr;i--){
//         temp.push(arr[i][maxc])
//     }
//     for(let i=maxc-1;i>=minc+1;i--){
//         temp.push(arr[minr][i])
//     }
//     console.log(temp)
//     rotateAnArrayRight(temp,r)
//     console.log(temp)

//     let c=0;
//     for(let i=minr;i<=maxr;i++){
//         arr[i][minc] = temp[c]
//         c++
//     }
//     for(let i=minc+1;i<=maxc;i++){
//         arr[maxr][i] = temp[c]
//         c++
//     }
//     for(let i=maxr-1;i>=minr;i--){
//         arr[i][maxc] = temp[c]
//         c++
//     }
//     for(let i=maxc-1;i>=minc+1;i--){
//         arr[minr][i] = temp[c]
//         c++
//     }

//     console.log(arr)
// }

// ringRotate([[11,12,13,14,15,16,17],[21,22,23,24,25,26,27],[31,32,33,34,35,36,37],[41,42,43,44,45,46,47],[51,52,53,54,55,56,57]],2,3)

// const stateOfWakanda2 = (arr) => {
//     for(let r=0;r<arr.length;r++){
//         let i=0,j=r
//         while(i<arr.length&&j<arr.length){
//             process.stdout.write(`${arr[i][j]} `)
//             i++,j++
//         }
//     }
// }

// stateOfWakanda2([[11,12,13,14],[21,22,23,24],[31,32,33,34],[41,42,43,44]])

// const saddlePrice = (arr) => {
//     for(let i=0;i<arr.length;i++){
//         let min = Math.min(...arr[i])
//         let col=0
//         for(let j=0;j<arr[0].length;j++){
//             if(min==arr[i][j]){
//                 col= j
//                 break
//             }
//         }
//         let max = -Infinity,r=0
//         while(r<arr.length){
//             max = Math.max(max,arr[r][col])
//             r++
//         }

//         if(max==arr[i][col])return max
//     }
//     return 'No element'
// }

// console.log(saddlePrice([[11,12,13,14],[21,22,23,24],[31,32,33,34],[41,42,43,44]]))

// const searchInASorted2Matrix = (arr,n) => {
//     let r=0,c=arr[0].length-1
//     while(r<arr.length && c>=0){
//         if(arr[r][c]==n)return [r,c]
//         else if(arr[r][c]<n){
//             r++
//         }else{
//             c--
//         }
//     }
//     return -1
// }

// console.log(searchInASorted2Matrix([[11,12,13,14],[21,22,23,24],[31,32,33,34],[41,42,43,44]],32))