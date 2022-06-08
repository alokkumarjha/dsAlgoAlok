// const printDecreasing = (n) => {
//     if(n==0)return
//     console.log(n)
//     printDecreasing(n-1)
// }

// printDecreasing(5)

// const printIncreasing = (n) => {
//     if(n==0)return
//     printIncreasing(n-1)
//     console.log(n)
// }

// printIncreasing(5)

// const printDecrerasingIncreasing = (n) => {
//     if(n==0)return
//     console.log(n)
//     printDecrerasingIncreasing(n-1)
//     console.log(n)
// }

// printDecrerasingIncreasing(5)

// const factorial = (n) => {
//     if(n==1)return 1

//     return n*factorial(n-1)
// }

// console.log(factorial(5))

// const powerLinear = (x,n) => {
//     if(n==0) return 1
//     return x*powerLinear(x,n-1)
// }

// console.log(powerLinear(2,5))

// const powerLogarithmic = (x,n) => {
//     if(n==0)return 1
//     if(n%2==0){
//         return powerLogarithmic(x,Math.floor(n/2))*powerLogarithmic(x,Math.floor(n/2))
//     }else{
//         return x*powerLogarithmic(x,Math.floor(n/2))*powerLogarithmic(x,Math.floor(n/2))
//     }
// }

// console.log(powerLogarithmic(2,5))

// const printZigZag = (n) => {
//     if(n==0){
//         return
//     }
//     console.log(n)
//     printZigZag(n-1)
//     console.log(n)
//     printZigZag(n-1)
//     console.log(n)
// }

// printZigZag(3)

// const toh = (n,a,b,c) => {
//     if(n==0)return

//     toh(n-1,a,c,b)
//     console.log(`${n}[${a} => ${b}]`)
//     toh(n-1,c,b,a)
// } 

// toh(3,'10','11','12')

// Recursion in arrays

// const displayArr = (arr,idx) => {
//     if(idx==arr.length)return

//     console.log(arr[idx])
//     displayArr(arr,idx+1)
// }

// displayArr([1,2,3,4,5],0)

// const displayArrReverse = (arr,idx) => {
//     if(idx==arr.length)return

//     displayArrReverse(arr,idx+1)
//     console.log(arr[idx])
// }

// displayArrReverse([1,2,3,4,5],0)

// const maxOfAnArray = (arr,idx) => {
//     if(idx === arr.length)return -Infinity
//     return Math.max(arr[idx],maxOfAnArray(arr,idx+1))
// }

// console.log(maxOfAnArray([5,8,6,4,9,7,3,2],0))

// const firstIndex = (arr,n,idx) => {
//     if(idx==arr.length)return -1

//     if(arr[idx]==n)return idx
//     return firstIndex(arr,n,idx+1)
// }

// console.log(firstIndex([15,11,40,4,4,9],4,0))

// const lastIndex = (arr,n,idx) => {
//     if(idx==arr.length)return -1

//     let lisa = lastIndex(arr,n,idx+1)
//     if(lisa == -1){
//         if(arr[idx] == n)return idx
//         return -1
//     }
//     return lisa
// }

// console.log(lastIndex([15,11,40,4,4,9],4,0))

// const allIndex = (arr,n,idx) => {
//     if(idx == arr.length)return

//     if(arr[idx]==n){console.log(idx)}
//     allIndex(arr,n,idx+1)
// }

// allIndex([15,11,40,4,4,9],4,0)

// const getSubsequence = (s) => {
//     let arr = []
//     getSubsequenceHelper(s,arr,'')
//     return arr
// }

// const getSubsequenceHelper = (s,arr,asf) => {
//     if(s.length == 0) {
//         arr.push(asf)
//         return
//     }
//     getSubsequenceHelper(s.substring(1),arr,asf+'')
//     getSubsequenceHelper(s.substring(1),arr,asf+s.charAt(0))
// }

// console.log(getSubsequence('abc'))

// const getKeyPadCombination = (s) => {
//     let arr = []
//     getKeyPadCombinationHelper(s,arr,'')
//     return arr
// }

// const getKeyPadCombinationHelper = (s,arr,asf) => {
//     if(s.length==0){
//         arr.push(asf)
//         return
//     }

//     if(s.charAt(0)=='1'){
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'a')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'b')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'c')
//     }
//     else if(s.charAt(0)=='2'){
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'d')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'e')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'f')
//     }
//     else if(s.charAt(0)=='3'){
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'g')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'h')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'i')
//     }
//     else if(s.charAt(0)=='4'){
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'j')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'k')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'l')
//     }
//     else if(s.charAt(0)=='5'){
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'m')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'n')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'o')
//     }
//     else if(s.charAt(0)=='6'){
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'p')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'q')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'r')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'s')
//     }
//     else if(s.charAt(0)=='7'){
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'t')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'u')
//     }
//     else if(s.charAt(0)=='8'){
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'v')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'w')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'x')
//     }
//     else if(s.charAt(0)=='9'){
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'y')
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'z')
//     }
//     else{
//         getKeyPadCombinationHelper(s.substring(1),arr,asf+'.')
//     }
// }

// console.log(getKeyPadCombination('78'))

// const stairCase = (n) => {
//     let arr = []
//     stairCaseHelper(n,arr,'')
//     return arr
// }

// const stairCaseHelper = (n,arr,asf) => {
//     if(n==0){
//         arr.push(asf)
//         return
//     }
//     if(n<0){
//         return
//     }
//     stairCaseHelper(n-1,arr,asf+1)
//     stairCaseHelper(n-2,arr,asf+2)
//     stairCaseHelper(n-3,arr,asf+3)
// }

// console.log(stairCase(3))

// const getMazePath = (m,n) => {
//     let arr = []
//     getMazePathHelper(m,n,arr,1,1,'')
//     return arr
// }

// const getMazePathHelper = (m,n,arr,srcR,srcC,asf) => {
//     if(srcR==m&&srcC==n){
//         arr.push(asf)
//         return
//     }
//     if(srcR>m||srcC>n){
//         return
//     }

//     getMazePathHelper(m,n,arr,srcR+1,srcC,asf+'H')
//     getMazePathHelper(m,n,arr,srcR,srcC+1,asf+'V')
// }

//console.log(getMazePath(3,3))

// const getMazePathWithJumps = (m,n) => {
//     let arr = []
//     getMazePathWithJumpsHelper(m,n,arr,1,1,'',1)
//     return arr
// }

// const getMazePathWithJumpsHelper =(m,n,arr,srcR,srcC,asf,jump) => {
//     console.log(asf)
//     if(srcR==m&&srcC==n){
//         arr.push(asf)
//         return
//     }
//     if(srcR>m||srcC>n){
//         return
//     }

//     getMazePathWithJumpsHelper(m,n,arr,srcR+jump,srcC,asf+'H'+jump,jump)
//     getMazePathWithJumpsHelper(m,n,arr,srcR,srcC+jump,asf+'V'+jump,jump)
//     getMazePathWithJumpsHelper(m,n,arr,srcR+jump,srcC+jump,asf+'D'+jump,jump)
//     jump++
// }

// console.log(getMazePathWithJumps(2,2))

// const printSubsequence = (s) => {
//     printSubsequenceHelper(s,'')
// }

// const printSubsequenceHelper = (s,asf) => {
//     if(s.length == 0) {
//         console.log(asf)
//         return
//     }
//     printSubsequenceHelper(s.substring(1),asf+s.charAt(0))
//     printSubsequenceHelper(s.substring(1),asf+'')
// }

// printSubsequence('yvTA')

// const printEncodings = (s) => {
//     printEncodingsHelper(s,'')
// }

// const printEncodingsHelper = (s,asf) => {
//     if(s.length==0){
//         console.log(asf)
//         return
//     }

//     else if(s.length==1){
//         if(s.charAt(0)==0){
//             return
//         }
//         printEncodingsHelper(s.substring(1),asf+String.fromCharCode(96+Number(s.charAt(0))))
//     }

//     else {
//         if(s.charAt(0)==0){
//             return
//         }
//         printEncodingsHelper(s.substring(1),asf+String.fromCharCode(96+Number(s.charAt(0))))
//         if(Number(s.substring(0,2))<=26&&Number(s.substring(0,2))>=10){
//             printEncodingsHelper(s.substring(2),asf+String.fromCharCode(96+Number(s.substring(0,2))))
//         }
//     }
// }

// printEncodings('013')
















// RECUSRION BACKTRACKING

// const floodFill = (arr) => {
//     let visited = new Array(arr.length)
//     for(let i=0;i<arr.length;i++){
//         visited[i] = new Array(arr[0].length)
//         visited[i].fill(false)
//     }
//     floodFillHelper(arr,0,0,'',visited)
//     console.log(visited)
// }

// const floodFillHelper = (arr,r,c,asf,visited) => {
//     if(r==arr.length-1&&c==arr[0].length-1){
//         console.log(asf)
//         return
//     }
//     if(r<0||r==arr.length||c<0||c==arr[0].length||arr[r][c]==1||visited[r][c]==true){
//         return
//     }
//     visited[r][c]=true
//     floodFillHelper(arr,r,c-1,asf+'l',visited)
//     floodFillHelper(arr,r,c+1,asf+'r',visited)
//     floodFillHelper(arr,r-1,c,asf+'t',visited)
//     floodFillHelper(arr,r+1,c,asf+'d',visited)
//     visited[r][c]=false
// }

// floodFill([[0,0,0],[1,0,1],[0,0,0]])

// const printTargetSum = (arr,n) => {
//     printTargetSumHelper(arr,n,'',0,0)
// }

// const printTargetSumHelper = (arr,n,s,sum,i) => {
//     if(sum==n){
//         console.log(s)
//         return
//     }
//     if(sum>n||i==arr.length)return
//     printTargetSumHelper(arr,n,s+arr[i],sum+arr[i],i+1)
//     printTargetSumHelper(arr,n,s,sum,i+1)
// }

// printTargetSum([10,20,30,40,50],60)

// const nQueen = (n) => {
//     let visited = new Array(n)
//     for(let i=0;i<n;i++){
//         visited[i] = new Array(n)
//         visited[i].fill(false)
//     }
//     console.log(visited)
//     nQueenHelper(n,visited,'',0)
// }

// const nQueenHelper = (n,arr,asf,r) => {
//     if(r==n){
//         console.log(asf)
//         return
//     }
//     for(let col = 0;col<arr.length;col++){
//         if(arr[r][col]==0&&isQueenSafe(arr,r,col)){
//             arr[r][col] = true
//             nQueenHelper(n,arr,asf+r+','+col+'=>',r+1)
//             arr[r][col] = false
//         }
//     }
    
// }

// const isQueenSafe = (arr,row,col) => {
//     //row check
//     for(let i=col-1;i>=0;i--){
//         if(arr[row][i])return false
//     }

//     //col check
//     for(let i=row-1;i>=0;i--){
//         if(arr[i][col])return false
//     }

//     //left diagonal check
//     for(let i=row-1,j=col-1;i>=0&&j>=0;i--,j--){
//         if(arr[i][j])return false
//     }

//     //right diagonal check
//     for(let i=row-1,j=col+1;i>=0&&j<arr.length;i--,j++){
//         if(arr[i][j])return false
//     }

//     return true
// }

// nQueen(4)




