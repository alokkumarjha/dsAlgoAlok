// // function power2(n){
// //     if(n<0){
// //         return 0
// //     }else if(n==1){
// //         console.log(1)
// //         return 1
// //     }else{
// //         n/=2
// //         let curr=2*power2(n)
// //         console.log(curr)
// //         return curr

// //     }
// // }

// // console.log(power2(50))
// //string contains unique characters or not
// // function uniqueString(str){
// //     let obj = {};
// //     for(let i=0;i<str.length;i++){
// //         if(obj[str.charAt(i)]){
// //             return false
// //         }
// //         obj[str.charAt(i)]=true
// //     }
// //     return true
// // }

// // console.log(uniqueString('alok'))

// //one string is permutation of other or not
// // function checkPermutation(str1,str2){
// //     if(str1.length!=str2.length){
// //         return false
// //     }
// //     let obj = {};
// //     for(let i=0;i<str1.length;i++){
// //         if(obj[str1.charAt(i)]){
// //             obj[str1.charAt(i)]++
// //         }else{
// //             obj[str1.charAt(i)]=1
// //         }
// //     }
// //     for(let i=0;i<str2.length;i++){
// //         if(obj[str2.charAt(i)]){
// //             obj[str2.charAt(i)]-=1
// //         }
// //         else{
// //             return false
// //         }
// //     }
// //     console.log('obj',obj)
// //     return true
// // }

// // console.log(checkPermutation('abcd','bcda'))

// //urlify
// // function urlify(str){
// //     str= str.replace(/ /g,"%20")
// //     return str
// // }

// // console.log(urlify("asdf klmn yue"))

// //palindromicPermutations
// // function palindromicPermutations(str){
// //     let obj = {}
// //     for(let i=0;i<str.length;i++){
// //         if(obj[str.charAt(i)]){
// //             obj[str.charAt(i)]++
// //         }else{
// //             obj[str.charAt(i)]=1
// //         }
// //     }
// //     let arr = Object.values(obj)
// //     if(str.length%2==0){
// //         for(let i=0;i<arr.length;i++){
// //             if(arr[i]!=2){
// //                 return false
// //             }
// //         }
// //         return true
// //     }else{
// //         let flag1 = 1
// //         for(let i=0;i<arr.length;i++){
// //             if(arr[i]==1 && flag1==1){
// //                 flag1=0;
// //             }
// //             else if(arr[i]==2){
// //                 continue
// //             }
// //             else{
// //                 return false
// //             }
// //         }
// //         return true
// //     }
// // }

// // console.log(palindromicPermutations("tacoatco"))

// // function oneAway(str1,str2){
// //     if(Math.abs(str1.length - str2.length>1)){
// //         return false
// //     }
// //     let flag = 1;
// //     let i = 0
// //     let j = 0
// //     while (i<str1.length && j<str2.length){
// //         if(str1.charAt(i)==str2.charAt(j)){
// //             i++
// //             j++
// //         }
// //         else{
// //             flag-=1
// //             if(flag<0){
// //                 return false
// //             }
// //             if(str1.length<str2.length){
// //                 j++
// //             }
// //             else if(str2.length<str1.length){
// //                 i++
// //             }
// //             else{
// //                 i++
// //                 j++
// //             }
// //         }
// //     }
// //     return true
// // }

// // console.log(oneAway('pale','bake'))

// // function compress(str){
// //     let s = ''
// //     let count = 0
// //     let curr = ''
// //     let prev = ''
// //     for(let i=0;i<str.length;i++){
// //         if(i==0){
// //             curr = str.charAt(i)
// //             prev = str.charAt(i)
// //             count++
// //         }
// //         else{
// //             curr = str.charAt(i)
// //             if(prev!=curr){
// //                 s+=prev+count
// //                 prev=curr
// //                 count=1
// //             }
// //             else{
// //                 count++
// //             }

// //             if(i==str.length-1){
// //                 s+=curr+count
// //             }
// //         }
// //     }
// //     return s.length < str.length ?s:str
// // }

// // console.log(compress("aaaaabccccccddaaa"))

// // class Node {
// //     constructor(element)
// //     {
// //         this.element = element;
// //         this.next = null
// //     }
// // }

// // class LinkedList {
// //     constructor()
// //     {
// //         this.head = null;
// //         this.size = 0;
// //     }

// //     add(element)
// //     {
// //         // creates a new node
// //         var node = new Node(element);

// //         // to store current node
// //         var current;

// //         // if list is Empty add the
// //         // element and make it head
// //         if (this.head == null)
// //             this.head = node;
// //         else {
// //             current = this.head;

// //             // iterate to the end of the
// //             // list
// //             while (current.next) {
// //                 current = current.next;
// //             }

// //             // add node
// //             current.next = node;
// //         }
// //         this.size++;
// //     }

// //     insertAt(element, index)
// //     {
// //         if (index > 0 && index > this.size)
// //             return false;
// //         else {
// //             // creates a new node
// //             var node = new Node(element);
// //             var curr, prev;

// //             curr = this.head;

// //             // add the element to the
// //             // first index
// //             if (index == 0) {
// //                 node.next = this.head;
// //                 this.head = node;
// //             } else {
// //                 curr = this.head;
// //                 var it = 0;

// //                 // iterate over the list to find
// //                 // the position to insert
// //                 while (it < index) {
// //                     it++;
// //                     prev = curr;
// //                     curr = curr.next;
// //                 }

// //                 // adding an element
// //                 node.next = curr;
// //                 prev.next = node;
// //             }
// //             this.size++;
// //         }
// //     }

// //     removeFrom(index)
// //     {
// //         if (index > 0 && index > this.size)
// //             return -1;
// //         else {
// //             var curr, prev, it = 0;
// //             curr = this.head;
// //             prev = curr;

// //             // deleting first element
// //             if (index == 0) {
// //                 this.head = curr.next;
// //             } else {
// //                 // iterate over the list to the
// //                 // position to removce an element
// //                 while (it < index) {
// //                     it++;
// //                     prev = curr;
// //                     curr = curr.next;
// //                 }

// //                 // remove the element
// //                 prev.next = curr.next;
// //             }
// //             this.size--;

// //             // return the remove element
// //             return curr.element;
// //         }
// //     }

// //     removeElement(element)
// //     {
// //         var current = this.head;
// //         var prev = null;

// //         // iterate over the list
// //         while (current != null) {
// //             // comparing element with current
// //             // element if found then remove the
// //             // and return true
// //             if (current.element == element) {
// //                 if (prev == null) {
// //                     this.head = current.next;
// //                 } else {
// //                     prev.next = current.next;
// //                 }
// //                 this.size--;
// //                 return current.element;
// //             }
// //             prev = current;
// //             current = current.next;
// //         }
// //         return -1;
// //     }

// //     indexOf(element)
// //     {
// //         var count = 0;
// //         var current = this.head;

// //         // iterae over the list
// //         while (current != null) {
// //             // compare each element of the list
// //             // with given element
// //             if (current.element == element)
// //                 return count;
// //             count++;
// //             current = current.next;
// //         }

// //         // not found
// //         return -1;
// //     }

// //     isEmpty()
// //     {
// //         return this.size == 0;
// //     }

// //     size()
// //     {
// //         console.log(this.size);
// //     }

// //     printList()
// //     {
// //         var curr = this.head;
// //         var str = "";
// //         while (curr) {
// //             str += curr.element + " ";
// //             curr = curr.next;
// //         }
// //         console.log(str);
// //     }

// //     removeDuplicates(){
// //         let set = new Set();
// //         let curr = this.head
// //         let prev = null
// //         while(curr!=null){
// //             if(set.has(curr.element)){
// //                 prev.next = curr.next
// //             }
// //             else{
// //                 set.add(curr.element)
// //                 prev = curr
// //             }
// //             curr=curr.next
// //         }
// //     }

// //     kthFromLastRecursive(head,k){
// //         if(head==null){
// //             return 0
// //         }
// //         let index = this.kthFromLastRecursive(head.next,k)+1
// //         //console.log(index,head.element)
// //         //console.log(index,k)
// //         if(index == k){
// //             console.log(head.element)
// //         }
// //         return index
// //     }

// //     kthFromLastIterative(k){
// //         let p1 = this.head
// //         let p2 = this.head
// //         let i=0;

// //         while(i<k){
// //             p1=p1.next
// //             i++
// //         }

// //         while(p1!=null){
// //             p1=p1.next
// //             p2=p2.next
// //         }
// //         console.log(p2.element)
// //     }

// //     middle(){
// //         let fast = this.head
// //         let slow = this.head
// //         while(fast.next!=null && fast.next.next!=null){
// //             fast = fast.next.next
// //             slow = slow.next
// //         }
// //         console.log(slow.element)
// //     }

// //     reverse(){
// //         let curr =this.head
// //         let prev = null
// //         let next = null

// //         while(curr!=null){
// //             next = curr.next
// //             curr.next = prev
// //             prev = curr
// //             curr = next
// //         }
// //         this.head = prev
// //     }

// //     stringify(){
// //         let str=''
// //         let l = this.head
// //         while(l!=null){
// //             str+=l.element
// //             l=l.next
// //         }
// //         return str
// //     }

// //     palindrome(){
// //         let fast = this.head
// //         let slow = this.head
// //         let arr = []
// //         while(fast!=null && fast.next!=null){
// //             arr.push(slow.element)
// //             fast = fast.next.next
// //             slow = slow.next
// //         }

// //         if(fast!=null){
// //             slow = slow.next
// //         }
// //         while(slow!=null){
// //             let x = arr.pop()
// //             if(slow.element!=x){
// //                 return false
// //             }
// //             slow = slow.next
// //         }
// //         return true
// //     }
// // }

// // let l = new LinkedList();

// //console.log(l.isEmpty());

// // l.add(10);
// // l.add(20);
// // l.add(30)
// // //l.add(30)
// // l.add(20)
// // l.add(10)

// // console.log(l.palindrome())

// // let l1 = new LinkedList()
// // let l2 = new LinkedList()

// // l1.add(7)
// // l1.add(1)
// // l1.add(6)

// // l2.add(5)
// // l2.add(9)
// // l2.add(2)

// // function sumLists(l1,l2){
// //     l1.reverse()
// //     l2.reverse()
// //     let str1 = l1.stringify()
// //     let str2 = l2.stringify()
// //     console.log(parseInt(str1)+parseInt(str2))
// // }

// // sumLists(l1,l2)
// //l.removeDuplicates()
// //console.log(l.kthFromLastRecursive(l.head,2))
// //l.kthFromLastIterative(2)
// //l.middle()
// // l.printList()
// // l.reverse()
// // l.printList()

// // function nthFiboRecursive(n){
// //     if(n==0)return 0
// //     if(n==1)return 1
// //     return nthFiboRecursive(n-1) + nthFiboRecursive(n-2)
// // }

// // console.log(nthFiboRecursive(60))

// // function nthFiboMemoization(n){
// //     let arr = new Array(n+1)
// //     arr.fill(0)
// //     return fibonacci(n,arr)
// // }

// // function fibonacci(n,memo){
// //     if(n==0 || n==1){
// //         return n
// //     }

// //     if(memo[n]==0){
// //         memo[n] = fibonacci(n-1,memo) + fibonacci(n-2,memo)
// //     }
// //     return memo[n]
// // }

// // console.log(nthFiboMemoization(80))

// // function fiboBottomUp(n){
// //     let arr = []
// //     arr[0]=0
// //     arr[1]=1
// //     for(let i=2;i<=n;i++){
// //         arr[i] = arr[i-1] + arr[i-2]
// //     }
// //     return arr[n]
// // }

// // console.log(fiboBottomUp(1))

// // function fiboMostOptimised(n){
// //     if(n==0||n==1)return n
// //     let first=0
// //     let second=1
// //     for(let i=2;i<n;i++){
// //         let c=first+second
// //         first = second
// //         second = c
// //     }
// //     return first+second
// // }

// // console.log(fiboMostOptimised(3))

// // triple step dp
// //brute force
// // function tripleStepBruteForce(n){
// //     if(n<0){
// //         return 0
// //     }
// //     else if(n==0){
// //         return 1
// //     }
// //     return tripleStepBruteForce(n-1)+tripleStepBruteForce(n-2)+tripleStepBruteForce(n-3)
// // }

// // console.log(tripleStepBruteForce(2))

// // //memoised
// // function tripleStepTopDown(n){
// //     let arr = new Array(n+1)
// //     arr.fill(-1)
// //     return tripleStepHelper(n,arr)
// // }

// // function tripleStepHelper(n,memo){
// //     if(n<0){
// //         return 0
// //     }else if(n==0){
// //         return 1
// //     }else if(memo[n]>-1){
// //         return memo[n]
// //     }else{
// //         memo[n]=tripleStepHelper(n-1,memo)+tripleStepHelper(n-2,memo)+tripleStepHelper(n-3,memo)
// //         return memo[n]
// //     }
// // }

// // console.log(tripleStepTopDown(100))

// //magic index
// // function magicIndex(arr){
// //     return magicIndexHelper(arr,0,arr.length-1)
// // }

// // function magicIndexHelper(arr,start,end){
// //     if(start>end){
// //         return -1
// //     }
// //     let mid = (start+end)/2
// //     if(arr[mid]==mid)return mid
// //     else if(arr[mid]<mid)return  magicIndexHelper(arr,mid+1,end)
// //     else return magicIndexHelper(arr,start,mid-1)
// // }

// // console.log(magicIndex([-10,-2,2,9,15]))

// //power set
// // function powerSet(str){
// //     powerSetHelper(str,0,"")
// // }

// // function powerSetHelper(str,index,curr){
// //     if(index == str.length){
// //         console.log(curr)
// //         return
// //     }
// //     powerSetHelper(str,index+1,curr+str.charAt(index))
// //     powerSetHelper(str,index+1,curr)
// // }

// // powerSet('abcd')

// //multiply without * operator
// // function multiplyRecursive(a,b){
// //     let small = a<b?a:b
// //     let big = a>b?a:b
// //     return multiplyRecursiveHelper(small,big)
// // }

// // function multiplyRecursiveHelper(small,big){
// //     if(small==0)return 0
// //     if(small==1)return big
// //     let s = small>>1
// //     console.log(s)
// //     let halfprod = multiplyRecursiveHelper(s,big)
// //     if(small%2==0)return halfprod+halfprod
// //     else return halfprod+halfprod+big
// // }

// // console.log(multiplyRecursive(5,3))

// //Tower of Hanoi
// // function toh(n,src,buffer,dest){
// //     if(n==1){
// //         console.log(`move disc 1 from ${src} to ${dest}`)
// //         return
// //     }
// //     toh(n-1,src,dest,buffer)
// //     console.log(`move disc ${n} from ${src} to ${dest}`)
// //     toh(n-1,buffer,src,dest)
// // }

// // toh(3,'A','B','C')

// //permutation of a string
// // function generatePermutation(str) {
// //   if (str.length == 0) return "";
// //   if (str.length == 1) return str;
// //   let result = [];
// //   for (let i = 0; i < str.length; i++) {
// //     // this condition checks for duplicacy
// //     if (str.indexOf(str[i]) !=i) {
// //         continue;
// //     }
// //     let tempWord = str.slice(0, i) + str.slice(i + 1, str.length);
// //     for (let perm of generatePermutation(tempWord)) {
// //       result.push(str.charAt(i) + perm);
// //     }
// //   }
// //   return result;
// // }

// // console.log(generatePermutation("aaa"));

// // function stairCaseTabular(n){
// //     let arr = new Array(n+1)
// //     arr.fill(-1);
// //     arr[0]=1;
// //     arr[1]=1;
// //     arr[2]=2
// //     for(let i=3;i<=n;i++){
// //         arr[i] = arr[i-1]+arr[i-2]+arr[i-3]
// //     }
// //     return arr[n]
// // }

// // console.log(stairCaseTabular(6))

// function create2DArray(m, n) {
//   let arr = new Array(m);
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = new Array(n);
//     arr[i].fill(0);
//   }
//   return arr;
// }
// //mincost
// // function minCostPath(arr){
// //     let dp = create2DArray(arr.length,arr[0].length)
// //     for(let i=arr.length-1;i>=0;i--){
// //         for(let j=arr[i].length-1;j>=0;j--){
// //             if(i==arr.length-1 && j==arr[0].length-1){
// //                 dp[i][j] = arr[i][j]
// //             }
// //             else if(i== arr.length-1){
// //                 dp[i][j] = arr[i][j]+dp[i][j+1]
// //             }else if(j==arr[0].length-1){
// //                 dp[i][j] = arr[i][j]+dp[i+1][j]
// //             }else {
// //                 dp[i][j] = arr[i][j]+Math.min(dp[i+1][j],dp[i][j+1])
// //             }
// //         }
// //     }
// //     console.log(dp[0][0])
// // }

// // minCostPath([
// //     [4,3,1,1],
// //     [1,8,9,1],
// //     [2,8,0,1]
// // ])

// //maximum gold
// // function maxGold(arr){
// //     let dp = create2DArray(arr.length,arr[0].length)
// //     for(let j=arr[0].length-1;j>=0;j--){
// //         for(let i=0;i<arr.length;i++){
// //             if(j==arr.length-1){
// //                 dp[i][j] = arr[i][j]
// //             }else if(i==0){
// //                 dp[i][j] = arr[i][j] + Math.max(dp[i][j+1],dp[i+1][j+1])
// //             }else if(i==arr.length-1){
// //                 dp[i][j] = arr[i][j] + Math.max(dp[i][j+1],dp[i-1][j+1])
// //             }else{
// //                 dp[i][j] = arr[i][j] + Math.max(dp[i][j+1],dp[i-1][j+1],dp[i+1][j+1])
// //             }
// //         }
// //     }
// //     let firstCol = []
// //     for(let i=0;i<arr.length;i++){
// //         firstCol.push(dp[i][0])
// //     }
// //     console.log(Math.max(...firstCol))
// // }

// // maxGold([
// //     [4,3,1,1],
// //     [1,8,9,1],
// //     [2,8,0,1]
// // ])

// //targetsum
// // function targetSum(arr,n){
// //     let dp = create2DArray(arr.length+1,n+1)
// //     for(let i=0;i<dp.length;i++){
// //         for(let j=0;j<dp[0].length;j++){
// //             if(i==0 && j==0){
// //                 dp[i][j]=true
// //             }else if(i==0){
// //                 dp[i][j]=false
// //             }else if(j==0){
// //                 dp[i][j]=true
// //             }else{
// //                 if(dp[i-1][j]==true){
// //                     dp[i][j]=true
// //                 }
// //                 else{
// //                     let temp = arr[i-1]
// //                     if(j>=temp){
// //                         if(dp[i-1][j-temp]==true){
// //                             dp[i][j]=true
// //                         }
// //                     }
// //                 }
// //             }
// //         }
// //     }
// //     console.log(dp[arr.length][n])
// // }

// // targetSum([4,2,3,1,7],100)

// //coinchangecombination
// // function coinChangeComb(cost,amount){
// //     let amountArr = new Array(amount+1)
// //     amountArr.fill(0)
// //     amountArr[0]=1
// //     for(let i=0;i<cost.length;i++){
// //         for(let j=cost[i];j<amountArr.length;j++){
// //             amountArr[j] += amountArr[j-cost[i]]
// //         }
// //     }
// //     //console.log(amountArr)
// //     console.log(amountArr[amount])
// // }

// // coinChangeComb([1,2,5],11)

// //coinChangePerm
// // function coinChangePerm(cost,amt){
// //     let dp = new Array(amt+1)
// //     dp.fill(0)
// //     dp[0]=1
// //     for(let i=1;i<dp.length;i++){
// //         for(let j=0;j<cost.length;j++){
// //             if(i>=cost[j]){
// //                 dp[i] += dp[i-cost[j]]
// //             }
// //         }
// //     }
// //     //console.log(dp)
// //     console.log(dp[amt])
// // }

// // coinChangePerm([1,2,5],11)

// //0-1 knapsack
// // function knapsack_0_1(wt,cost,maxwt){
// //     let dp = create2DArray(wt.length+1,maxwt+1)
// //     for(let i=0;i<dp.length;i++){
// //         for(let j=0;j<=maxwt;j++){
// //             if(i==0 || j==0){
// //                 dp[i][j]=0
// //             }else{
// //                 if(j>=wt[i-1]){
// //                     dp[i][j] = Math.max(dp[i-1][j],dp[i-1][j-wt[i-1]]+cost[i-1])
// //                 }
// //                 else{
// //                     dp[i][j] = dp[i-1][j]
// //                 }
// //             }
// //         }
// //     }
// //     console.log(dp[wt.length][maxwt])
// // }

// // knapsack_0_1([2,5,1,3,4],[15,14,10,45,30],7)

// // function knapsackUnbound(wt,cost,maxwt){
// //     let dp = new Array(maxwt+1)
// //     dp.fill(0)
// //     for(let i=0;i<wt.length;i++){
// //         for(let j=1;j<dp.length;j++){
// //             if(j>=wt[i]){
// //                 dp[j] = Math.max(dp[j],cost[i]+dp[j-wt[i]])
// //             }
// //         }
// //     }
// //     console.log(dp)
// //     console.log(dp[maxwt])
// // }

// // knapsackUnbound([2,5,1,3,4],[15,14,10,45,30],7)

// // function binaryStrNonAdjacent0(n){
// //     let prev0=0;
// //     let prev1=0;
// //     let curr0=1;
// //     let curr1=1
// //     for(let i=2;i<=n;i++){
// //         prev0=curr0;
// //         prev1=curr1;
// //         curr0=curr1;
// //         curr1=prev0+prev1
// //     }
// //     console.log(curr0+curr1)
// // }

// // binaryStrNonAdjacent0(6)

// // function arrangeBuilding(n){
// //     let prevB=0;
// //     let prevS=0;
// //     let currB=1;
// //     let currS=1
// //     for(let i=2;i<=n;i++){
// //         prevB=currB;
// //         prevS=currS;
// //         currB=currS;
// //         currS=prevB+prevS
// //     }
// //     console.log((currS+currB)*(currS+currB))
// // }

// // arrangeBuilding(6)

// // function subsequenceABC(str){
// //     let a=0
// //     let ab=0
// //     let abc=0
// //     for(let i=0;i<str.length;i++){
// //         if(str.charAt(i)=='a'){
// //             a = 2*a+1
// //         }else if(str.charAt(i)=='b'){
// //             ab=2*ab+a
// //         }else{
// //             abc=2*abc+ab
// //         }
// //     }
// //     console.log(abc)
// // }

// // subsequenceABC('abcabc')

// // function maxSubSequence(arr){
// //     let dp = new Array(arr.length)
// //     dp.fill(0)
// //     dp[0]=arr[0];
// //     for(let i=1;i<arr.length;i++){
// //         for(let j=0;j<i;j++){
// //             if(arr[i]>arr[j]&&dp[i]<dp[j]+arr[i]){
// //                 dp[i]=dp[j]+arr[i]
// //             }
// //         }
// //     }
// //     console.log(Math.max(...dp))
// // }
// // maxSubSequence([10,22,9,33,21,50,41,60,80,1])

// // function LIS(nums) {
// //     if(nums.length==0){
// //         return 0
// //     }
// //     let dp = new Array(nums.length)
// //     dp.fill(1)
// //     for(let i=1;i<nums.length;i++){
// //         for(let j=0;j<i;j++){
// //             if(nums[j]<nums[i] && dp[i]<=dp[j]){
// //                 dp[i] = dp[j]+1
// //             }
// //         }
// //     }
// //     //console.log(dp)
// //     return dp
// // };

// // function bitonic(arr){
// //     let dpInc = LIS(arr)
// //     //console.log(dpInc)
// //     arr = arr.reverse()
// //     let dpDec = LIS(arr)
// //     //console.log(dpDec)
// //     let max = 0;
// //     for(let i=0;i<arr.length;i++){
// //         if(max<dpInc[i]+dpDec[arr.length-i]){
// //             max=dpInc[i]+dpDec[arr.length-i]
// //         }
// //     }
// //     console.log(max-1)
// // }

// // bitonic([10,22,9,33,21,50,41,60,80,1])

// // function minOperation(n){
// //     if(n==1 || n==2 || n==0){
// //         return n
// //     }
// //     if(n%2==0){
// //         return minOperation(Math.floor(n/2))+1
// //     }else{
// //         return minOperation(Math.floor(n/2))+2
// //     }
// // }

// // console.log(minOperation(8))

// // function maximeizeCuts(n,x,y,z){
// //     let arr = new Array(n+1)
// //     arr.fill(0)
// //     return maximizeCutsHelper(arr,n,x,y,z)
// // }

// // function maximizeCutsHelper(memo,n,x,y,z){
// //     if(n<0){
// //         return -1
// //     }else if(n==0){
// //         return 0
// //     }else if(memo[n]!=0){
// //         return memo[n]
// //     }else{
// //         memo[n] =1+Math.max(maximizeCutsHelper(memo,n-x,x,y,z),maximizeCutsHelper(memo,n-y,x,y,z),maximizeCutsHelper(memo,n-z,x,y,z))
// //         return memo[n]
// //     }
// // }

// // console.log(maximeizeCuts(4,2,1,1))

// // function maxHops(n){
// //     if(n==0 || n==1){
// //         return 1
// //     }else if(n==2){
// //         return 2
// //     }else if(n==3){
// //         return 3
// //     }else{
// //         return (maxHops(n-1)+maxHops(n-2)+maxHops(n-3))+1
// //     }
// // }
// // console.log(maxHops(4))

// // function uniquePath(m,n){
// //     let dp = create2DArray(m,n)
// //     for(let i=0;i<dp.length;i++){
// //         for(let j=0;j<dp[0].length;j++){
// //             if(i==0&&j==0){
// //                 dp[i][j]=1
// //             }else if(i==0){
// //                 dp[i][j]=dp[i][j-1]
// //             }else if(j==0){
// //                 dp[i][j]=dp[i-1][j]
// //             }else{
// //                 dp[i][j]=dp[i-1][j]+dp[i][j-1]
// //             }
// //         }
// //     }
// //     console.log(dp)
// //     return dp[m-1][n-1]
// // }

// // console.log(uniquePath(2,2))

// // function reachGivenScore(n){
// //     let dp =new Array(n+1)
// //     dp.fill(0)
// //     dp[0]=1
// //     let score = [3,5,10]
// //     for(let i=0;i<score.length;i++){
// //         for(let j=score[i];j<dp.length;j++){
// //             dp[j] = dp[j]+dp[j-score[i]]
// //         }
// //     }
// //     console.log(dp)
// //     return dp[n]
// // }

// // console.log(reachGivenScore(13))

// // function stairNonRepeat(n){
// //     let dp =new Array(n+1)
// //     dp.fill(0)
// //     dp[0]=1
// //     let step = [1,2]
// //     for(let i=0;i<step.length;i++){
// //         for(let j=step[i];j<dp.length;j++){
// //             dp[j] = dp[j]+dp[j-step[i]]
// //         }
// //     }
// //     console.log(dp)
// //     return dp[n]
// // }

// // console.log(stairNonRepeat(5))

// //RECURSION
// /**
//  * R
//  * E
//  * C
//  * R
//  * S
//  * I
//  * O
//  * N
//  */

// // function printIncreasing(n){
// //     if(n==0){
// //         return
// //     }
// //     printIncreasing(n-1)
// //     console.log(n)
// // }

// // printIncreasing(5)

// function printDecreasingIncreasing(n){
//     if(n==0){
//         return
//     }
//     console.log(n)
//     printDecreasingIncreasing(n-1)
//     console.log(n)
// }

// printDecreasingIncreasing(5)

// // function factorial(n){
// //     if(n==1){
// //         return 1
// //     }
// //     return n*factorial(n-1)
// // }
// // console.log(factorial(5))

// // function xPowerN(x,n){
// //     if(n==0){
// //         return 1
// //     }
// //     if(n%2==0){
// //         return xPowerN(x,n/2)*xPowerN(x,n/2)
// //     }else{
// //         return xPowerN(x,Math.floor(n/2))*xPowerN(x,Math.floor(n/2))*x
// //     }
// // }

// // console.log(xPowerN(2,4))

// // function printArrayElements(arr,n){
// //     if(n==arr.length){
// //         return
// //     }
// //     console.log(arr[n])
// //     printArrayElements(arr,n+1)
// // }
// // printArrayElements([1,2,3,4,5],0)

// function printArrayElementsReverse(arr,n){
//     if(n==arr.length){
//         return
//     }
//     printArrayElementsReverse(arr,n+1)
//     console.log(arr[n])
// }
// printArrayElementsReverse([1,2,3,4,5],0)

// // function maxElement(arr,n){
// //     let max = -Infinity
// //     return maxElementHelper(arr,n,max)
// // }

// // function maxElementHelper(arr,n,max){
// //     if(n==arr.length){
// //         return max
// //     }
// //     if(arr[n]>max){
// //         max = arr[n]
// //     }
// //     return maxElementHelper(arr,n+1,max)
// // }

// // console.log(maxElement([1,2,3,5,1,9,0],0))

// // function firstOccurence(arr,n,x){
// //     if(n==arr.length){
// //         return -1
// //     }
// //     if(arr[n]==x){
// //         return n
// //     }
// //     return firstOccurence(arr,n+1,x)
// // }

// // console.log(firstOccurence([2,3,1,4,6,2],0,2))

// // function lastOccurence(arr,n,x){
// //     if(n==arr.length){
// //         return -1
// //     }
// //     let li = lastOccurence(arr,n+1,x)
// //     if(li!=-1){
// //         return li
// //     }
// //     return arr[n]==x?n:-1
// // }
// // console.log(lastOccurence([2,3,1,4,6,2],0,2))

// // function allOccurence(arr,n,x,newArr){
// //     if(n==arr.length){
// //         return
// //     }
// //     if(arr[n]==x){
// //         newArr.push(n)
// //     }
// //     allOccurence(arr,n+1,x,newArr)
// //     if(n==0){
// //         console.log(newArr)
// //         return
// //     }
// // }
// // allOccurence([2,3,1,4,6,2],0,2,[])
// let arr = []
// function subsequence(str){
//    subsequenceHelper(str,'')
//    console.log(arr)
// }

// function subsequenceHelper(str,ans){
//     //console.log(typeof arr)
//     if(str.length==0){
//         arr.push(ans)
//         return
//     }
//     subsequenceHelper(str.substring(1),ans+str.charAt(0))
//     subsequenceHelper(str.substring(1),ans)
// }

// subsequence('abc')

// // function printsubsequence(str){
// //     printSubsequenceHelper(str,'')
// // }

// // function printSubsequenceHelper(str,ans){
// //     //console.log(typeof arr)
// //     if(str.length==0){
// //         console.log(ans)
// //         return
// //     }
// //     printSubsequenceHelper(str.substring(1),ans+str.charAt(0))
// //     printSubsequenceHelper(str.substring(1),ans)
// // }

// // printsubsequence('abc')

// function printPermutations(str){
//     printPermutationsHelper(str,'')
// }

// function printPermutationsHelper(str,ans){
//     if(str.length==0){
//         console.log(ans)
//         return
//     }
//     for(let i=0;i<str.length;i++){
//         printPermutationsHelper(str.substring(0,i)+str.substring(i+1),ans+str.charAt(i))
//     }
// }
// printPermutations('abc')

// // function printEncodings(str){
// //     printEncodingsHelper(str,'')
// // }

// // function printEncodingsHelper(str,ans){
// //     if(str.length==0){
// //         console.log(ans)
// //         return
// //     }else if(str.length==1){
// //         if(str.charAt(0)==0){
// //             return
// //         }else{
// //             printEncodingsHelper(str.substring(1),ans+str.fromCharCode(97 + Number(str.charAt(0))))
// //         }
// //     }else{
// //         if(str.charAt(0)==0){
// //             return
// //         }else{
// //             printEncodingsHelper(str.substring(1),ans+str.charCodeAt(0)-97+1)
// //             if(str.substring(0,2)<=26){
// //                 printEncodingsHelper(str.substring(2),ans+str.fromCharCode(97 + Number(str.substring(0,2))))
// //             }
// //         }
// //     }
// // }

// // printEncodings('123')

// // let arr=[]
// // function stairCase(num){
// //     staircaseHelper(num,'')
// //     console.log(arr)
// // }

// // function staircaseHelper(num,rem){
// //     if(num<0){
// //         return
// //     }
// //     if(num==0){
// //         arr.push(rem)
// //         return
// //     }
// //     staircaseHelper(num-1,rem+1)
// //     staircaseHelper(num-2,rem+2)
// //     staircaseHelper(num-3,rem+3)
// // }

// // stairCase(2)
// // let arr = []
// // function mazePath(startRow,startCol,endRow,endCol){
// //     mazePathHelper(startRow,startCol,endRow,endCol,'')
// //     console.log(arr)
// // }

// // function mazePathHelper(startRow,startCol,endRow,endCol,ans){
// //     if(startRow>endRow || startCol>endCol){
// //         return
// //     }
// //     else if(startRow==endRow&&startCol==endCol){
// //         arr.push(ans)
// //         return
// //     }
// //     else{
// //         mazePathHelper(startRow+1,startCol,endRow,endCol,ans+'V')
// //         mazePathHelper(startRow,startCol+1,endRow,endCol,ans+'H')
// //     }
// // }

// // mazePath(1,1,3,3)
// // let arr=[]
// // function mazePathJump(startRow,startCol,endRow,endCol){
// //     mazePathJumpHelper(startRow,startCol,endRow,endCol,'')
// //     console.log(arr)
// // }

// // function mazePathJumpHelper(startRow,startCol,endRow,endCol,ans){
// //     if(startRow>endRow || startCol>endCol){
// //         return
// //     }
// //     else if(startRow==endRow&&startCol==endCol){
// //         arr.push(ans)
// //         return
// //     }else{
// //         mazePathJumpHelper(startRow+1,startCol,endRow,endCol,ans+'v1')
// //         mazePathJumpHelper(startRow,startCol+1,endRow,endCol,ans+'h1')
// //         mazePathJumpHelper(startRow+2,startCol,endRow,endCol,ans+'v2')
// //         mazePathJumpHelper(startRow,startCol+2,endRow,endCol,ans+'h2')
// //         mazePathJumpHelper(startRow+3,startCol,endRow,endCol,ans+'v3')
// //         mazePathJumpHelper(startRow,startCol+3,endRow,endCol,ans+'h3')
// //         mazePathJumpHelper(startRow+1,startCol+1,endRow,endCol,ans+'d1')
// //         mazePathJumpHelper(startRow+2,startCol+2,endRow,endCol,ans+'d2')
// //         mazePathJumpHelper(startRow+3,startCol+3,endRow,endCol,ans+'d3')
// //     }
// // }

// // mazePathJump(1,1,3,3)

// // let arr=[]
// // function keypad(str){
// //     keyPadHelper(str,'')
// //     console.log(arr)
// // }

// // function keyPadHelper(str,rem){
// //     if(str.length==0){
// //         arr.push(rem)
// //         return
// //     }
// //     let char = str.charAt(0);
// //     if(char==1){
// //         keyPadHelper(str.substring(1),rem+'a')
// //         keyPadHelper(str.substring(1),rem+'b')
// //         keyPadHelper(str.substring(1),rem+'c')
// //     }else if(char==2){
// //         keyPadHelper(str.substring(1),rem+'d')
// //         keyPadHelper(str.substring(1),rem+'e')
// //         keyPadHelper(str.substring(1),rem+'f')
// //     }else if(char==3){
// //         keyPadHelper(str.substring(1),rem+'g')
// //         keyPadHelper(str.substring(1),rem+'h')
// //         keyPadHelper(str.substring(1),rem+'i')
// //     }
// //     else if(char==4){
// //         keyPadHelper(str.substring(1),rem+'j')
// //         keyPadHelper(str.substring(1),rem+'k')
// //         keyPadHelper(str.substring(1),rem+'l')
// //     }else if(char==5){
// //         keyPadHelper(str.substring(1),rem+'m')
// //         keyPadHelper(str.substring(1),rem+'n')
// //         keyPadHelper(str.substring(1),rem+'o')
// //         keyPadHelper(str.substring(1),rem+'p')
// //     }else if(char==6){
// //         keyPadHelper(str.substring(1),rem+'q')
// //         keyPadHelper(str.substring(1),rem+'r')
// //         keyPadHelper(str.substring(1),rem+'s')
// //         keyPadHelper(str.substring(1),rem+'t')
// //     }else if(char==7){
// //         keyPadHelper(str.substring(1),rem+'u')
// //         keyPadHelper(str.substring(1),rem+'v')
// //     }else if(char==8){
// //         keyPadHelper(str.substring(1),rem+'w')
// //         keyPadHelper(str.substring(1),rem+'x')
// //         keyPadHelper(str.substring(1),rem+'y')
// //         keyPadHelper(str.substring(1),rem+'z')
// //     }else if(char==9){
// //         keyPadHelper(str.substring(1),rem+'.')
// //         keyPadHelper(str.substring(1),rem+',')
// //     }else if(char==0){
// //         keyPadHelper(str.substring(1),rem+'?')
// //         keyPadHelper(str.substring(1),rem+'!')
// //     }

// // }

// // keypad("573")

// // function floodFill(arr){
// //     floodFillHelper(arr,0,0,'')
// // }

// // function floodFillHelper(arr,row,col,ans){
// //     if(row==arr.length-1&&col==arr[0].length-1){
// //         console.log(ans)
// //         return
// //     }
// //     else if(row==arr.length-1){
// //         if(arr[row][col]==1){
// //             return
// //         }else{
// //             floodFillHelper(arr,row,col+1,ans+'r')
// //         }
// //     }
// //     else if(col==arr[0].length-1){
// //         if(arr[row][col]==1){
// //             return
// //         }else{
// //             floodFillHelper(arr,row+1,col,ans+'d')
// //         }
// //     }else{
// //         if(arr[row][col]==1){
// //             return
// //         }
// //         else{
// //             floodFillHelper(arr,row+1,col,ans+'d')
// //             floodFillHelper(arr,row,col+1,ans+'r')

// //         }
// //     }
// // }

// // floodFill([[0,0,0],[0,0,0],[0,0,0]])

// function targetSum(arr,target){
//     targetSumHelper(arr,target,0,'')
// }

// function targetSumHelper(arr,target,idx,psf){
//     if(idx==arr.length){
//         if(target==0){
//             console.log(psf)
//         }
//         return
//     }
//     if(target<0){
//         return
//     }else if(target==0){
//         console.log(psf)
//         return
//     }else{
//         targetSumHelper(arr,target-arr[idx],idx+1,psf+arr[idx])
//         targetSumHelper(arr,target,idx+1,psf)
//     }
// }

// targetSum([10,20,30,40,50],60)

// // function sudoku(arr, i, j) {
// //   if (j == arr[0].length - 1) {
// //     i += 1;
// //     j = 0;
// //   } else {
// //     j += 1;
// //   }

// //   if (i == arr.length) {
// //     console.log(i,j)
// //     console.log(arr);
// //     return;
// //   } else {
// //       //console.log(i,j)
// //     if (arr[i][j] != 0) {
// //       sudoku(arr, i, j);
// //     } else {
// //       for (let po = 1; po <= 9; po++) {
// //         if (isValid(arr, i, j, po)) {
// //           arr[i][j] = po;
// //           sudoku(arr, i, j, po);
// //           arr[i][j] = 0;
// //         }
// //       }
// //     }
// //   }
// // }

// // function isValid(arr, x, y, po) {
// //   for (let j = 0; j < arr[0].length; j++) {
// //     if (arr[x][j] == po) {
// //       return false;
// //     }
// //   }

// //   for (let i = 0; i < arr.length; i++) {
// //     if (arr[i][y] == po) {
// //       return false;
// //     }
// //   }

// //   let submX = Math.floor(x / 3) * 3;
// //   let submY = Math.floor(y / 3) * 3;

// //   for (let i = 0; i < 3; i++) {
// //     for (let j = 0; j < 3; j++) {
// //       if (arr[submX + i][submY + j] == po) {
// //         return false;
// //       }
// //     }
// //   }

// //   return true;
// // }

// // sudoku(
// //   [
// //     [3, 0, 6, 5, 0, 8, 4, 0, 0],
// //     [5, 2, 0, 0, 0, 0, 0, 0, 0],
// //     [0, 8, 7, 0, 0, 0, 0, 3, 1],
// //     [0, 0, 3, 0, 1, 0, 0, 8, 0],
// //     [9, 0, 0, 8, 6, 3, 0, 0, 5],
// //     [0, 5, 0, 0, 9, 0, 6, 0, 0],
// //     [1, 3, 0, 0, 0, 0, 2, 5, 0],
// //     [0, 0, 0, 0, 0, 0, 0, 7, 4],
// //     [0, 0, 5, 2, 0, 6, 3, 0, 0],
// //   ],
// //   0,
// //   -1
// // );

// // function abbreviation(str,asf,count,idx){
// //     if(idx==str.length){
// //         if(count==0){
// //             console.log(asf)
// //         }else{
// //             console.log(asf+count)
// //         }
// //         return
// //     }
// //     if(count>0){
// //         abbreviation(str,asf+count+str.charAt(0),0,idx+1)
// //     }else{
// //         abbreviation(str,asf+str.charAt(0),0,idx+1)
// //     }
// //     abbreviation(str,asf,count+1,idx+1)
// // }

// // abbreviation('pep','',0,0)

// // function nqueenBackTracking(board,row,cols,nDiag,rDiag,asf){
// //   if(row==board.length){
// //     console.log(asf)
// //     return
// //   }
// //   for(let col=0;col<cols.length;col++){
// //     if(cols[col]==false&&nDiag[row+col]==false&&rDiag[row-col+board.length-1]==false){
// //       cols[col]=true
// //       nDiag[row+col]=true
// //       rDiag[row-col+board.length-1]=true
// //       board[row][col]=true
// //       nqueenBackTracking(board,row+1,cols,nDiag,rDiag,asf+row+'-'+col+',')
// //       cols[col]=false
// //       nDiag[row+col]=false
// //       rDiag[row-col+board.length-1]=false
// //       board[row][col]=false
// //     }
// //   }
// // }

// // let board = create2DArray(4,4)
// // let cols = new Array(4)
// // cols.fill(false)
// // let nDiag = new Array(2*4-1)
// // nDiag.fill(false)
// // let rDiag = new Array(2*4-1)
// // rDiag.fill(false)

// // nqueenBackTracking(board,0,cols,nDiag,rDiag,'')

// // function josephus(n,k){
// //   if(n==1){
// //     return 0
// //   }
// //   let x = josephus(n-1,k)
// //   let y = (x+k)%n
// //   return y
// // }

// // console.log(josephus(5,3))

// function wordBreak(dictionary, str, asf) {
//   if (str.length == 0) {
//     console.log(asf);
//     return;
//   }

//   for (let i = 0; i < str.length; i++) {
//     let left = str.substring(0, i + 1);
//     if (dictionary.has(left)) {
//       let right = str.substring(i + 1);
//       wordBreak(dictionary, right, asf + left + " ");
//     }
//   }
// }
// let dictionary = new Set([
//   "i",
//   "like",
//   "sam",
//   "sung",
//   "samsung",
//   "mobile",
//   "ice",
//   "and",
//   "cream",
//   "icecream",
//   "man",
//   "go",
//   "mango",
// ]);
// wordBreak(dictionary, "ilikeicecreamandmango", "");

// /**
//  * B
//  * I
//  * T
//  *
//  * M
//  * A
//  * N
//  * U
//  * P
//  * U
//  * L
//  * A
//  * T
//  * I
//  * O
//  * N
//  */

// // function basicOperations(n,x){
// //   let onMask =(1<<x)
// //   let ofMask = ~(1<<x)
// //   let toggleMask = (1<<x)
// //   let checkMask = (1<<x)

// //   console.log(n | onMask)
// //   console.log(n & ofMask)
// //   console.log(n ^ toggleMask)
// //   console.log((n & checkMask)==0?0:1)
// // }

// // basicOperations(10,3)

// // function rsb(x){
// //   return (x & -x)
// // }

// // console.log(rsb(3))

// // function countSetBits(n){
// //   let count=0
// //   while(n>0){
// //     n = n - (n & -n)
// //     count++
// //   }
// //   console.log(count)
// // }

// // countSetBits(57)

// // function josephusBitMap(n){
// //   let i=1
// //   while(i*2<=n){
// //     i=i*2
// //   }
// //   let l = n-i
// //   console.log(2*l+1)
// // }

// // josephusBitMap(3)

// // function greyCode(n){
// //   if(n==1){
// //     let bArr = []
// //     bArr.push('0')
// //     bArr.push('1')
// //     return bArr
// //   }
// //   let rArr = greyCode(n-1)
// //   let mArr = []
// //   for(let i=0;i<rArr.length;i++){
// //     mArr.push('0'+rArr[i])
// //   }
// //   for(let i=rArr.length-1;i>=0;i--){
// //     mArr.push('1'+rArr[i])
// //   }
// //   return mArr
// // }

// // console.log(greyCode(3))

// // function allRepeatingExceptTwo(arr){
// //   let xxory=0
// //   let first=0
// //   let second=0
// //   for(let i=0;i<arr.length;i++){
// //     xxory=(xxory^arr[i])
// //   }

// //   console.log(xxory)
// //   let rsb = (xxory & -xxory)
// //   for(let i=0;i<arr.length;i++){
// //     if((rsb & arr[i])==0){
// //       console.log(arr[i])
// //       first=(first^arr[i])
// //     }else{
// //       second = (second^arr[i])
// //     }
// //   }
// //   return [first,second]
// // }

// // console.log(allRepeatingExceptTwo([36,50,24,56,36,24,42,50]))

// // function abbreviationBitManipuation(str){
// //   for(let i=0;i<(1<<str.length);i++){
// //     let count=0;
// //     let s=''
// //     for(let j=0;j<str.length;j++){
// //       let b=str.length-1-j
// //       let ch = str.charAt(j)
// //       if((i & (1<<b))==0){
// //         if(count!=0){
// //           s+=count
// //           s+=ch
// //           count=0
// //         }else{
// //           s+=ch
// //         }
// //       }else{
// //         count++
// //       }
// //     }
// //     if(count>0){
// //       s+=count
// //     }
// //     console.log(s)
// //   }
// // }

// // abbreviationBitManipuation('pep')

// /**
//  * D
//  * P
//  *
//  * P
//  * R
//  * A
//  * C
//  * T
//  * I
//  * C
//  * E
//  */

// // function longestCommonSubstring(s1,s2){
// //   let dp = create2DArray(s1.length+1,s2.length+1)
// //   let max=0
// //   for(let i=0;i<dp.length;i++){
// //     for(let j=0;j<dp[0].length;j++){
// //       if(i==0||j==0){
// //         dp[i][j]=0
// //       }
// //       else{
// //         if(s1.charAt(i-1)==s2.charAt(j-1)){
// //           dp[i][j]=dp[i-1][j-1]+1
// //           if(max<dp[i][j]){
// //             max=dp[i][j]
// //           }
// //         }
// //         // else{
// //         //   dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])
// //         // }
// //       }
// //     }
// //   }
// //   console.log(dp)
// //   console.log(max)
// // }

// // longestCommonSubstring('ABC','AC')

// // function longestCommonSubsequence(s1,s2){
// //   let dp = create2DArray(s1.length+1,s2.length+1)
// //   for(let i=0;i<dp.length;i++){
// //     for(let j=0;j<dp[0].length;j++){
// //       if(i==0||j==0){
// //         dp[i][j]=0
// //       }
// //       else{
// //         if(s1.charAt(i-1)==s2.charAt(j-1)){
// //           dp[i][j]=dp[i-1][j-1]+1
// //         }
// //         else{
// //           dp[i][j]=Math.max(dp[i-1][j],dp[i][j-1],dp[i-1][j-1])
// //         }
// //       }
// //     }
// //   }
// //   console.log(dp[s1.length][s2.length])
// // }

// // longestCommonSubsequence('ABC','AC')

// // function longestIncreasingSubsequence(arr){
// //   let dp=new Array(arr.length)
// //   dp.fill(1)
// //   for(let i=0;i<arr.length;i++){
// //     for(let j=i-1;j>=0;j--){
// //       if(arr[i]>arr[j]&&dp[i]<=dp[j]){
// //         dp[i]=dp[j]+1
// //       }
// //     }
// //   }
// //   console.log(dp[dp.length-1])
// // }

// // longestIncreasingSubsequence([0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15])

// // function maxSumIS(arr){
// //   let dp = [...arr]
// //   for(let i=0;i<arr.length;i++){
// //     for(let j=i-1;j>=0;j--){
// //       if(arr[i]>arr[j]){
// //         dp[i]+=arr[j]
// //       }
// //     }
// //   }
// //   console.log(Math.max(...dp))
// //   console.log(dp)
// // }

// // maxSumIS([1, 2, 3])

// function coinChangePractice(arr, n) {
//   let dp = new Array(n + 1);
//   dp.fill(0);
//   dp[0] = 1;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = arr[i]; j < dp.length; j++) {
//       dp[j] += dp[j-arr[i]]
//     }
//   }
//   console.log(dp);
// }

// coinChangePractice([1, 2, 3], 10);

// // function maximizeCuts(n,x,y,z){
// //   let arr=new Array(n+1)
// //   arr.fill(0)
// //   return helper(n,x,y,z,arr)
// // }

// // function helper(n,x,y,z,dp){
// //   if(n==0){
// //     return 0
// //   }
// //   else if(n<0){
// //     return -1
// //   }
// //   else if(dp[n]>0){
// //     return dp[n]
// //   }
// //   else{
// //     dp[n]=Math.max(helper(n-x,x,y,z,dp),helper(n-y,x,y,z,dp),helper(n-z,x,y,z,dp))+1
// //   }
// //   console.log(dp)
// //   return dp[n]
// // }

// // console.log(maximizeCuts(5,5,3,2))

// function editDistance(a,b){
//   let dp=create2DArray(a.length+1,b.length+1)
//   for(let i=0;i<dp[0].length;i++){
//     dp[0][i]=i
//   }
//   for(let i=0;i<dp.length;i++){
//     dp[i][0]=i
//   }
//   for(let i=1;i<dp.length;i++){
//     for(let j=1;j<dp[0].length;j++){
//       if(a.charAt(i-1)==b.charAt(j-1)){
//         dp[i][j]=dp[i-1][j-1]
//       }else{
//         dp[i][j]=Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1])+1
//       }
//     }
//   }
//   console.log(dp[a.length][b.length])
// }

// editDistance('benyam','ephnem')

//console.log(arguments)