// const fiboDp = (n) => {
//   let a = 0,b=1,c=1,i=2;
//   if(n==0)return 0
//   if(n<=2)return 1
//   while(i<n){
//     a=b
//     b=c
//     c=a+b
//     i++
//   }
//   return c
// }

// console.log(fiboDp(3))

// const fiboMemo = (n) => {
//   let arr = new Array(n+1)
//   let nth = fiboMemoHelper(n,arr)
//   console.log(nth)
// }

// const fiboMemoHelper = (n,arr) => {
//   if(n<0)return 0
//   if(n==0||n==1)return n
//   if(arr[n])return arr[n]
//   arr[n] = fiboMemoHelper(n-1,arr)+fiboMemoHelper(n-2,arr)
//   return arr[n]
// }

// fiboMemo(45)

// const stairCaseDP = (n) => {
//   let arr = new Array(n+1)
//   let ans = stairCaseDpHelper(n,arr)
//   return ans
// }

// const stairCaseDpHelper = (n,arr) => {
//   if(n<0)return 0
//   if(n==0)return 1
//   if(arr[n])return arr[n]
//   arr[n] = stairCaseDpHelper(n-1,arr)+stairCaseDpHelper(n-2,arr)+stairCaseDpHelper(n-3,arr)
//   return arr[n]
// }

// stairCaseDP(4)

const stairCaseWithJump = (n,arr) => {
  let dp = new Array(n+1)
  dp.fill(0)
  dp[n]=1
  //console.log(dp)
  let ans = stairCaseWithJumpHelper(n,arr,dp)
  console.log(ans)
  console.log(ans[0])
}

const stairCaseWithJumpHelper = (n,arr,dp) => {
  for(let i=n-1;i>=0;i--){
    let min  = Infinity
    for(let j=1;j<=arr[i]&&i+j<dp.length;j++){
      if(dp[i+j]!=null){
        min=Math.min(min,dp[i+j])
      }
      if(min!=Infinity){
        dp[i]=min+1
      }
    }

  }
  return dp
}

stairCaseWithJump(10,[1,5,15,60])

// const stairCaseWithJumpMinSteps = (n,arr) => {
//   let dp = new Array(n+1)
//   dp.fill(Infinity)
//   dp[n]=0
//   console.log(dp)
//   let ans = stairCaseWithMinStepsJumpHelper(n,arr,dp)
//   console.log(ans)
// }

// const stairCaseWithMinStepsJumpHelper = (n,arr,dp) => {
//   for(let i=n-1;i>=0;i--){
//     let min = Infinity
//     for(let j=1;j<=arr[i]&&i+j<=arr.length;j++){
//       min = min>dp[i+j]?dp[i+j]:min
//     }
//     dp[i]=min+1
//   }
//   return dp[0]
// }

// stairCaseWithJumpMinSteps(10,[3,2,4,2,0,2,3,1,2,2])

// const minCostMazeTraversal = (arr) => {
//   let dp = create2DArray(arr.length,arr[0].length)
//   dp[0][0] = arr[0][0]
//   for(let i=1;i<arr.length;i++){
//     dp[i][0] = dp[i-1][0]+arr[i][0] 
//   }
//   for(let i=1;i<arr[0].length;i++){
//     dp[0][i] = dp[0][i-1]+arr[0][i]
//   }

//   for(let i=1;i<arr.length;i++){
//     for(let j=1;j<arr[0].length;j++){
//       dp[i][j] = Math.min(dp[i-1][j],dp[i][j-1])+arr[i][j]
//     }
//   }

//   console.log(dp)
// }

// minCostMazeTraversal([[1,2,1],[2,1,2]])

// const goldmine = (arr) => {
//   let dp = create2DArray(arr.length,arr[0].length)
//   for(let i=0;i<arr[0].length;i++){
//     for(let j=0;j<arr.length;j++){
//       if(i==0){
//         dp[j][i] = arr[j][i]
//       }else{
//         if(j==0){
//           dp[j][i] = Math.max(dp[j][i-1],dp[j+1][i-1])+arr[j][i]
//         }else if(j==arr.length-1){
//           dp[j][i] = Math.max(dp[j][i-1],dp[j-1][i-1])+arr[j][i]
//         }else{
//           dp[j][i] = Math.max(dp[j][i-1],dp[j+1][i-1],dp[j-1][i-1])+arr[j][i]
//         }
//       }
//     }
//   }
//   let max= -Infinity
//   for(let i=0;i<arr.length;i++){
//     max = Math.max(dp[i][arr[0].length-1],max)
//   }
//   console.log(dp)
// }

// goldmine([[0,6,0],[5,8,7],[0,9,0]])

//targetsum
// function targetSum(arr,n){
//     let dp = create2DArray(arr.length+1,n+1)
//     for(let i=0;i<dp.length;i++){
//         for(let j=0;j<dp[0].length;j++){
//             if(i==0 && j==0){
//                 dp[i][j]=true
//             }else if(i==0){
//                 dp[i][j]=false
//             }else if(j==0){
//                 dp[i][j]=true
//             }else{
//                 if(dp[i-1][j]==true){
//                     dp[i][j]=true
//                 }
//                 else{
//                     let temp = arr[i-1]
//                     if(j>=temp){
//                         if(dp[i-1][j-temp]==true){
//                             dp[i][j]=true
//                         }
//                     }
//                 }
//             }
//         }
//     }
//     console.log(dp[arr.length][n])
// }

// targetSum([4,2,3,1,7],10)

//coinchangecombination
// function coinChangeComb(cost,amount){
//     let amountArr = new Array(amount+1)
//     amountArr.fill(0)
//     amountArr[0]=1
//     for(let i=0;i<cost.length;i++){
//         for(let j=cost[i];j<amountArr.length;j++){
//             amountArr[j] += amountArr[j-cost[i]]
//         }
//     }
//     //console.log(amountArr)
//     console.log(amountArr[amount])
// }

// coinChangeComb([1,2,5],11)

//coinChangePerm
// function coinChangePerm(cost,amt){
//     let dp = new Array(amt+1)
//     dp.fill(0)
//     dp[0]=1
//     for(let i=1;i<dp.length;i++){
//         for(let j=0;j<cost.length;j++){
//             if(i>=cost[j]){
//                 dp[i] += dp[i-cost[j]]
//             }
//         }
//     }
//     //console.log(dp)
//     console.log(dp[amt])
// }

// coinChangePerm([1,2,5],11)


//0-1 knapsack
// function knapsack_0_1(wt,cost,maxwt){
//     let dp = create2DArray(wt.length+1,maxwt+1)
//     for(let i=0;i<dp.length;i++){
//         for(let j=0;j<=maxwt;j++){
//             if(i==0 || j==0){
//                 dp[i][j]=0
//             }else{
//                 if(j>=wt[i-1]){
//                     dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-wt[i-1]]+cost[i-1])
//                 }
//                 else{
//                     dp[i][j] = dp[i-1][j]
//                 }
//             }
//         }
//     }
//     console.log(dp[wt.length][maxwt])
// }

// knapsack_0_1([2,5,1,3,4],[15,14,10,45,30],7)

// function knapsackUnbound(wt,cost,maxwt){
//     let dp = new Array(maxwt+1)
//     dp.fill(0)
//     for(let i=0;i<wt.length;i++){
//         for(let j=1;j<dp.length;j++){
//             if(j>=wt[i]){
//                 dp[j] = Math.max(dp[j],cost[i]+dp[j-wt[i]])
//             }
//         }
//     }
//     console.log(dp)
//     console.log(dp[maxwt])
// }

// knapsackUnbound([2,5,1,3,4],[15,14,10,45,30],7)

// const countEncodings = (str) => {
//   let dp = new Array(str.length)
//   if(str.charAt(0)=='0')return 'Invalid String'
//   dp[0] = 1
//   for(let i=1;i<dp.length;i++){
//     if(str.charAt(i)==0){
//       if(Number(str.charAt(i-1))>2||Number(str.charAt(i-1))==0)return 0
//       dp[i] = dp[i-1]
//     }else{
//       if(Number(str.charAt(i-1))==0){
//         dp[i] = dp[i-1]
//       }else if(Number(str.charAt(i-1))==1 || (Number(str.charAt(i-1))==2&&Number(str.charAt(i))<=6)){
//         if(i-2>=0&&str.charAt(i-2)=='0'){
//           dp[i] = dp[i-1]*2
//         }else{
//           dp[i] = dp[i-1]+1
//         }
//       }else{
//         dp[i] = dp[i-1]
//       }
//     }
//   }
//   return dp
// }

// console.log(countEncodings('231011'))

// greedy problems

// const maximumSumNonAdjacentElements = (arr) => {
//   let inc = arr[0]
//   let exc =0

//   for(let i=1;i<arr.length;i++){
//     let ninc = arr[i]+exc
//     let nexc = Math.max(inc,exc)

//     inc = ninc
//     exc = nexc
//   }

//   return Math.max(inc,exc)
// }

// console.log(maximumSumNonAdjacentElements([5,10,10,100,5]))

// const paintHouse = (n,arr) => {
//   let rdp = new Array(n)
//   let bdp = new Array(n)
//   let gdp = new Array(n)

//   rdp[0] = arr[0][0],bdp[0]=arr[0][1],gdp[0]=arr[0][2]
//   for(let i=1;i<n;i++){
//     rdp[i] = arr[i][0] + Math.min(bdp[i-1],gdp[i-1])
//     bdp[i] = arr[i][1] + Math.min(rdp[i-1],gdp[i-1])
//     gdp[i] = arr[i][2] + Math.min(bdp[i-1],rdp[i-1])
//   }
//   console.log(rdp,bdp,gdp)
//   let min  = Math.min(rdp[n-1],bdp[n-1],gdp[n-1])
//   console.log(min)
// }

// paintHouse(4,[[1,5,7],[5,8,4],[3,2,9],[1,2,4]])

// const paintHouseManyColours = (arr) => {
//   let dp = create2DArray(arr.length,arr[0].length)
//   for(let buldings = 0;buldings<arr.length;buldings++){
//     for(let colors = 0;colors<arr[0].length;colors++){
//       if(buldings==0){
//         dp[buldings][colors]=arr[buldings][colors]
//       }else{
//         let min = Infinity
//         for(let prevRow=0;prevRow<arr[0].length;prevRow++){
//           if(prevRow==colors)continue
//           else{
//             min = dp[buldings-1][prevRow]<min?dp[buldings-1][prevRow]:min
//           }
//         }
//         dp[buldings][colors] = arr[buldings][colors] + min
//       }
//     }
//   }
//   console.log(dp)
//   console.log(Math.min(...dp[arr.length-1]))
// }

// paintHouseManyColours([[1,5,7],[5,8,4],[3,2,9],[1,2,4]])

// const paintFence = (n,k) => {
//   // will not run for n=1 because we have condition for 2 consecutive building
//   let same = k
//   let diff = k*(k-1)
//   let total = same+diff
//   for(let i=3;i<=n;i++){
//     same = diff
//     diff = total*(k-1)
//     total = same+diff
//   }
//   return total
// }

//console.log(paintFence(8,3))

// const tile_2_1 = (n) => {
//   if(n<=2)return n
//   let f = 1,s=2,t=f+s
//   for(let i=3;i<=n;i++){
//     f=s
//     s=t
//     t=f+s
//   }
//   return s
// }
// console.log(tile_2_1(8))

// const tile_m_1 = (m,n) => {
//   //m is width
//   let dp = new Array(n+1)
//   dp[0]=1
//   for(let i=1;i<dp.length;i++){
//     if(i<m){
//       dp[i]=1
//     }else if(i==m){ // we can place tiles in 2 ways both horizantally and vertically
//       dp[i]=2
//     }else{
//       dp[i] = dp[i-1]+dp[i-m]
//     }
//   }
//   console.log(dp[n])
// }

// tile_m_1(16,39)

// function create2DArray(m, n) {
//   let arr = new Array(m);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = new Array(n);
//     arr[i].fill(0);
//   }
//   return arr;
// }

// function gridTraveller(m,n,memo={}){
//     let key = m + ',' + n
//     if(memo[key])return memo[key]
//     if(n==1&&m==1)return 1
//     if(n==0 || m==0)return 0
//     memo[key] = gridTraveller(m-1,n,memo)+gridTraveller(m,n-1,memo)
//     console.log(memo)
//     return memo[key]
// }
//TC => n*m

// console.log(gridTraveller(3,3))

// const canSum = (n,arr,memo={}) => {
//     if(n in memo)return memo[n]
//     if(n==0)return true
//     if(n<0)return false
//     for(let num of arr){
//         if(canSum(n-num,arr,memo)==true){
//             memo[n]=true
//             return true
//         }
//     }
//     memo[n]=false
//     return false
// }
// TC=> m*n

// console.log(canSum(300,[7,14]))

// const howSum = (n,arr,memo={}) => {
//     if(n in memo)return memo[n]
//     if(n==0)return []
//     if(n<0)return null
//     for(let num of arr){
//         const res = howSum(n-num,arr,memo)
//         if(res!=null){
//             memo[n] = [...res,num]
//             return memo[n]
//         }
//     }
//     memo[n]=null
//     return null
// }
//TC => n*m*m
// console.log(howSum(1000,[7,14]))

// const bestSum = (n,arr,memo={}) => {
//     if(n in memo)return memo[n]
//     if(n==0)return []
//     if(n<0)return null
//     let shortestComb=null
//     for(let num of arr){
//         const rem = bestSum(n-num,arr,memo)
//         if(rem!=null){
//             const comb = [...rem,num]
//             if(shortestComb==null||comb.length<shortestComb.length){
//                 shortestComb = comb
//             }
//         }
//     }

//     memo[n] = shortestComb
//     return shortestComb
// }
// //TC => n*m*m

// console.log(bestSum(100,[1,2,5,25]))

// const canConstruct = (str,words,memo={}) => {
//     if(str in memo)return memo[str]
//     if(str=='')return true

//     for(let word of words){
//         if(str.indexOf(word)==0){
//             const rem = str.slice(word.length)
//             if(canConstruct(rem,words,memo)){
//                 memo[str] = true
//                 return true
//             }
//         }
//     }
//     memo[str] = false
//     return false
// }
// //TC =>n*m*m
// console.log(canConstruct('abcdef',['ab','abc','cd','def','abcd']))

// const countConstruct = (str,words,memo={}) => {
//     if(str in memo)return memo[str]
//     if(str=='')return 1

//     let count = 0
//     for(let word of words){
//         if(str.indexOf(word)==0){
//             const rem = str.slice(word.length)
//             const numOfWaysForRest = countConstruct(rem,words,memo)
//             count+=numOfWaysForRest
//         }
//     }

//     memo[str] = count
//     return count
// }
// //TC => n*m*m
// console.log(countConstruct('abcdef',['ab','abc','cd','def','abcd']))

// const allConstruct = (str, words,memo={}) => {
//   if(str in memo) return memo[str]
//   if (str == "") return [[]];

//   const result = []
//   for (let word of words) {
//     if (str.indexOf(word) == 0) {
//       const rem = str.slice(word.length);
//       const remWays = allConstruct(rem, words);
//       const targetWays = remWays.map(way=>[word,...way])
//       result.push(...targetWays)
//     }
//   }
//   memo[str] = result
//   return result
// };
// //TC =>n^m(No better solution than this)
// console.log(allConstruct('purple',['purp','p','ur','le','purpl']))

function dfs(time,memo={}){
  //console.log(time)
  if(time<0)return 
  if(time==1 ||time==5||time==15||time==60)return 1
  if(!memo[time]){
      memo[time]= Math.min(dfs(time-1,memo),dfs(time-5,memo),dfs(time-15,memo),dfs(time-60,memo))
  }
  return memo[time]
}

console.log(dfs(125))