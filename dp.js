function create2DArray(m, n) {
  let arr = new Array(m);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(n);
    arr[i].fill(0);
  }
  return arr;
}

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

const allConstruct = (str, words,memo={}) => {
  if(str in memo) return memo[str]
  if (str == "") return [[]];

  const result = []
  for (let word of words) {
    if (str.indexOf(word) == 0) {
      const rem = str.slice(word.length);
      const remWays = allConstruct(rem, words);
      const targetWays = remWays.map(way=>[word,...way])
      result.push(...targetWays)
    }
  }
  memo[str] = result
  return result
};
//TC =>n^m(No better solution than this)
console.log(allConstruct('purple',['purp','p','ur','le','purpl']))
