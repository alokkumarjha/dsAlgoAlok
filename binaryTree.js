class Node { 
    constructor(val) { 
        this.val = val
        this.left = null
        this.right = null
    }
}

const a = new Node(5)
const b = new Node(11)
const c = new Node(3)
const d = new Node(4)
const e = new Node(2)
const f = new Node(1)

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

// const dfsIterative = (node) => {
//     let stack = []
//     if(node)stack.push(node)
//     while(stack.length){
//         let topNode = stack.pop()
//         if(topNode.right)stack.push(topNode.right)
//         if(topNode.left)stack.push(topNode.left)
//         console.log(topNode.val)
//     }
// }

// dfsIterative(a)

// const dfsRecursive = (node) => {
//     if(node == null) return
//     console.log(node.val)
//     if(node.left)dfsRecursive(node.left)
//     if(node.right)dfsRecursive(node.right)
// }

// dfsRecursive(null)
// TC for dfs O(n) , SC => O(n)

// const bfsIterative = (node) => {
//     if(node === null) return
//     let queue = [node]
//     while(queue.length){
//         let firstNode = queue.shift()
//         console.log(firstNode.val)
//         if(firstNode.left)queue.push(firstNode.left)
//         if(firstNode.right)queue.push(firstNode.right)
//     }
// }

// bfsIterative(a)
//Tc will be O(n) if we use an optimal way to take first element out  but in this case we use an array so it would not be O(n)
//Sc => O(n)

// const findNode = (node,x) => {
//     if(node==null)return false
//     if(node.val==x)return true

//     return findNode(node.left,x) || findNode(node.right,x)
// }

// console.log(findNode(a,'g'))
//Recursive code will always be dfs
//TC => O(n) SC will be the space of recursion

// const treeSum = (node) => {
//     if(node === null) return 0
//     return node.val + treeSum(node.left) + treeSum(node.right)
// }
//TC => O(n) SC => O(n) => call stack
//console.log(treeSum(null))

// const minValue = (node) => {
//     if(node == null) return Infinity
//     let leftMin = minValue(node.left)
//     let rightMin = minValue(node.right)
//     return Math.min(node.val,leftMin,rightMin)
// }

// console.log(minValue(a))

// const maxPathSum = (node) => {
//     if(node===null)return -Infinity
//     if(node.left ==null && node.right==null)return node.val
//     let leftPathMaxSum = maxPathSum(node.left)
//     let rightPathMaxSum = maxPathSum(node.right)
//     return leftPathMaxSum>rightPathMaxSum?node.val+leftPathMaxSum:node.val+rightPathMaxSum
// }

// console.log(maxPathSum(a))
//TC => O(n) , SC => O(n)

// const preorder = (node) => {
//     if(node===null)return
//     console.log(node.val)
//     preorder(node.left)
//     preorder(node.right)
// }

// preorder(a)

// const inorder = (node) => {
//     if(node===null)return
//     inorder(node.left)
//     console.log(node.val)
//     inorder(node.right)
// }

// inorder(a)

// const postorder = (node) => {
//     if(node===null)return
//     postorder(node.left)
//     postorder(node.right)
//     console.log(node.val)
// }

// postorder(a)

// const nodeToRootPath = (node,x) => {
//     let s = ''
//     nodeToRootPathHelper(node,x,s)
// }

// const nodeToRootPathHelper = (node,x,s) => {
//     if(node==null)return 
//     if(node.val==x){
//         s=s+node.val
//         console.log(s)
//         return
//     }
//     nodeToRootPathHelper(node.left,x,s+node.val)
//     nodeToRootPathHelper(node.right,x,s+node.val)
// }

// nodeToRootPath(a,4)

const printKLevelsDown = (node,k) => {
    if(node==null)return 
    if(k==0){
        console.log(node.val)
        return
    }

    printKLevelsDown(node.left,k-1)
    printKLevelsDown(node.right,k-1)
}

printKLevelsDown(a,1)


