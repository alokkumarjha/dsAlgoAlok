const graph = {
    a : ['b','c'],
    b : ['d'],
    c : ['e'],
    d : ['f'],
    e : [],
    f : []
}
const depthFirstPrintGraph = (graph,source) => {
    let stack = [source]
    while(stack.length){
        let curr = stack.pop()
        console.log(curr)
        while(graph[curr].length){
            stack.push(graph[curr].pop())
        }
    }
}
//depthFirstPrintGraph(graph,'a')

const depthFirstPrintRecursive = (graph,source) => {
    console.log(source)
    for(let neighbour of graph[source]){
        depthFirstPrintRecursive(graph,neighbour)
    }
}
//depthFirstPrintRecursive(graph,'a')

const breadthFirstPrint = (graph,source) => {
    let queue = [source]
    while(queue.length){
        let curr = queue.shift()
        console.log(curr)
        for(let neighbour of graph[curr]){
            queue.push(neighbour)
        }
    }
}

//breadthFirstPrint(graph,'a')

const hasPath = (graph,src,dest) => {
    if(src==dest)return true
    for(let neighbour of graph[src]){
       return hasPath(graph,neighbour,dest)
    }
    return false
}

//console.log(hasPath(graph,'a','g'))

const convertEdgesToAdjacencyList = (list) => {
    let obj = {}
    for(let i=0;i<list.length;i++){
        if(obj[list[i][0]])obj[list[i][0]].push(list[i][1])
        else obj[list[i][0]] = [list[i][1]]

        if(obj[list[i][1]])obj[list[i][1]].push(list[i][0])
        else obj[list[i][1]] = [list[i][0]]
    }
    return obj
}

let undirectedGraph = convertEdgesToAdjacencyList([['i','j'],['k','i'],['m','k'],['k','l'],['o','n']])

const hasPathUndirected=(undirectedGraph,src,dest,obj)=>{
    if(obj[src])return false
    if(src==dest)return true

    obj[src]=true
    for(let neighbour of undirectedGraph[src]){
        if(hasPathUndirected(undirectedGraph,neighbour,dest,obj)){
            return true
        }
    }
    return false
}

//console.log(hasPathUndirected(undirectedGraph,'i','o',{}))

// const connectedComponentsCount = (graph) => {
//     let set = new Set(),c=0

//     for(let node in graph){
//         console.log(set)
//         if(explore(graph,node,set))c++
//     }
//     return c
// }

// const explore =(graph,node,visited) => {
//     if(visited.has(Number(node)))return 

//     visited.add(Number(node))
//     for(let neighbour of graph[node]){
//         explore(graph,neighbour,visited)
//     }
//     return true
// }

// console.log(connectedComponentsCount({
//     0:[8,1,5],
//     1:[0],
//     5:[0,8],
//     8:[0,5],
//     2:[3,4],
//     3:[2,4],
//     4:[3,2]
// }))

// const largestConnectedComponents = (graph) => {
//     let set = new Set(),max = -Infinity

//     for(let node in graph){
//         let c = explore(graph,node,set)
//         if(c>max)max =c
//     }
//     return max
// }

// const explore =(graph,node,visited) => {
//     if(visited.has(Number(node)))return 0
//     visited.add(Number(node))
//     let size =1
//     for(let neighbour of graph[node]){
//         size+=explore(graph,neighbour,visited)
//     }
//     return size
// }

// console.log(largestConnectedComponents({
//     0:[8,1,5],
//     1:[0],
//     5:[0,8],
//     8:[0,5],
//     2:[3,4],
//     3:[2,4],
//     4:[3,2]
// }))

// const shortestPath = (edges,src,dest) => {
//     let graph = convertEdgesToAdjacencyList(edges)
//     let set = new Set([src])
//     let queue = [[src,0]]
//     while(queue){
//         let [current,dist] = queue.shift()
//         if(current==dest)return dist
//         for(let node of graph[current]){
//             if(!set.has(node))queue.push([node,1+dist])
//         }
//     }
//     return -1
// }

// console.log(shortestPath([['w','x'],['x','y'],['z','y'],['z','v'],['w','v']],'w','z'))


// const islandCount = (grid) => {
//     let set =new Set(),c=0
//     for(let i=0;i<grid.length;i++){
//         for(let j=0;j<grid[0].length;j++){
//             if(exploreGrid(grid,i,j,set))c++
//         }
//     }
//     return c
// }

// const exploreGrid = (grid,r,c,set) => {
//     let rowBound = 0<=r&&r<grid.length
//     let colBound = 0<=c&&c<grid[0].length
//     if(!rowBound||!colBound)return false

//     if(grid[r][c]=='w')return false

//     let pos = `${r},${c}`
//     if(set.has(pos))return false

//     set.add(pos)
//     exploreGrid(grid,r-1,c,set)
//     exploreGrid(grid,r+1,c,set)
//     exploreGrid(grid,r,c-1,set)
//     exploreGrid(grid,r,c+1,set)
//     return true
// }

// console.log(islandCount([
//     ['w','l','w','w','w'],
//     ['w','l','w','w','w'],
//     ['w','w','w','l','w'],
//     ['w','w','l','l','w'],
//     ['l','w','w','l','l'],
//     ['l','l','w','w','w']
// ]))

const minIsland = (grid) => {
    let set =new Set(),min = Infinity
    for(let i=0;i<grid.length;i++){
        for(let j=0;j<grid[0].length;j++){
            let c = exploreGrid(grid,i,j,set)
            if(c>0&&c<min)min=c
        }
    }
    return min
}

const exploreGrid = (grid,r,c,set) => {
    let rowBound = 0<=r&&r<grid.length
    let colBound = 0<=c&&c<grid[0].length
    if(!rowBound||!colBound)return 0

    if(grid[r][c]=='w')return 0

    let pos = `${r},${c}`
    if(set.has(pos))return 0

    set.add(pos)
    let size=1
    size+=exploreGrid(grid,r-1,c,set)
    size+=exploreGrid(grid,r+1,c,set)
    size+=exploreGrid(grid,r,c-1,set)
    size+=exploreGrid(grid,r,c+1,set)
    
    return size
}

console.log(minIsland([
    ['w','l','w','w','w'],
    ['w','l','w','w','w'],
    ['w','w','w','l','w'],
    ['w','w','l','l','w'],
    ['l','w','w','l','l'],
    ['l','l','w','w','w']
]))