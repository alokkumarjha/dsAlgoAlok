// class MaxHeap {
//   constructor() {
//     this.data = [];
//   }

//   getParentIndex(i) {
//     return Math.floor((i - 1) / 2);
//   }

//   getLeftChildIndex(i) {
//     return i * 2 + 1;
//   }

//   getRightChildIndex(i) {
//     return i * 2 + 2;
//   }

//   swap(i, j) {
//     let temp = this.data[i];
//     this.data[i] = this.data[j];
//     this.data[j] = temp;
//   }

//   add(key) {
//     this.data[this.data.length] = key;
//     this.heapifyUp();
//   }

//   heapifyUp() {
//     let currIdx = this.data.length - 1;
//     while (this.data[currIdx] > this.data[this.getParentIndex(currIdx)]) {
//       this.swap(currIdx, this.getParentIndex(currIdx));
//       currIdx = this.getParentIndex(currIdx);
//     }
//   }

//   remove() {
//     let max = this.data[0];
//     this.data[0] = this.data[this.data.length - 1];
//     this.data.length--;

//     this.heapifyDown();
//     return max;
//   }

//   heapifyDown() {
//     let currIdx = 0;
//     while (this.data[this.getLeftChildIndex(currIdx)]) {
//       let currBigIndex=this.getLeftChildIndex(currIdx)
//       if (
//         this.data[this.getRightChildIndex(currIdx)] &&
//         this.data[this.getRightChildIndex(currIdx)] >
//         this.data[this.getLeftChildIndex(currIdx)]
//       ) {
//           currBigIndex=this.getRightChildIndex(currIdx)
//       }

//       if(this.data[currBigIndex]>this.data[currIdx]){
//           this.swap(currIdx,currBigIndex)
//       }else{
//           return
//       }
//     }
//   }
// }

// const heap = new MaxHeap()
// console.log(heap)
// heap.add(25)
// heap.add(5)
// heap.add(40)
// heap.add(70)
// heap.add(90)
// heap.add(44)

//  console.log(heap)

// let a = []
// a.push(heap.remove())
// a.push(heap.remove())
// a.push(heap.remove())
// a.push(heap.remove())
// console.log(a)


class MinHeap {
    constructor() {
      this.data = [];
    }
  
    getParentIndex(i) {
      return Math.floor((i - 1) / 2)>0?Math.floor((i - 1) / 2):0;
    }
  
    getLeftChildIndex(i) {
      return i * 2 + 1;
    }
  
    getRightChildIndex(i) {
      return i * 2 + 2;
    }
  
    swap(i, j) {
      let temp = this.data[i];
      this.data[i] = this.data[j];
      this.data[j] = temp;
    }
  
    add(key) {
      this.data[this.data.length] = key;
      console.log(this.data)
      this.heapifyUp();
    }
  
    heapifyUp() {
        console.log(this.data.length)
      let currIdx = this.data.length - 1;
      console.log(this.getParentIndex(currIdx))
      while (this.data[currIdx].val < this.data[this.getParentIndex(currIdx)].val) {
        this.swap(currIdx, this.getParentIndex(currIdx));
        currIdx = this.getParentIndex(currIdx);
      }
    }
  
    remove() {
      let max = this.data[0];
      this.data[0] = this.data[this.data.length - 1];
      this.data.length--;
  
      this.heapifyDown();
      return max;
    }
  
    heapifyDown() {
      let currIdx = 0;
      while (this.data[this.getLeftChildIndex(currIdx)]) {
        let currBigIndex=this.getLeftChildIndex(currIdx)
        if (
          this.data[this.getRightChildIndex(currIdx)] &&
          this.data[this.getRightChildIndex(currIdx)].val <
          this.data[this.getLeftChildIndex(currIdx)].val
        ) {
            currBigIndex=this.getRightChildIndex(currIdx)
        }
  
        if(this.data[currBigIndex].val<this.data[currIdx].val){
            this.swap(currIdx,currBigIndex)
        }else{
            return
        }
      }
    }
  }

const heap = new MinHeap()
console.log(heap)
heap.add({row:3,val:2})
heap.add({row:0,val:2})
heap.add({row:1,val:3})
heap.add({row:2,val:1})


console.log(heap)

let a = []
a.push(heap.remove())
a.push(heap.remove())
a.push(heap.remove())
console.log(a)