// likedList is a type of data structure user for storing collection of the data.
// data is stored in nodes and each of contains a data field abd rederebce lint to the nexr node in the sequence

//1.store:
// linklist store in separate memory locations and are linked together using pointers,each node conatains the element and a refrence to the next node.
// 2.fast==> array is faster than linkedlist
// to access an element you need to traverese the list from the begining to the end.O(n)
// 3. memory useage
//  non-continguous ==>   with each node containing extra memory for pointers.

// when is good:
// When the Size of the Data is Dynamic or Unpredictable
//  When Frequent Insertions and Deletions are Needed
//When You Need Efficient Memory Usage for Sparse Data
//When You Don’t Need Fast Random Access


// 1. Music Playlist (Dynamic Playlist)
// Use Case: Imagine an app like Spotify or Apple Music, where users can dynamically add or remove songs from their playlist, and reorder them at will.
// Why Linked List?: In a linked list, each song can be represented as a node. Songs can be added or removed from the playlist in constant time 
// 𝑂(n)
// O(1), without the need to shift other elements. Reordering the playlist (like moving a song to a different position) is also more efficient with a linked list compared to an array.

// 2. Undo/Redo Functionality in Text Editors
class NodeListt<T> {
    value:T;
    next: NodeListt<T> | null;

    constructor(val:T){
        this.value = val;
        this.next = null
    }
}

class LinkList<T> {
    head: NodeListt<T> | null = null

    addLasOrAdd(val:T) {
        const newNode = new NodeListt(val);
        // the first itema
        if(this.head == null) {
            this.head = newNode;
        }else {
            let current = this.head;
            // check current.next  if null in head newNode else 
            while(current.next !== null) {
                // until go next you found 50 not come there just gt 51 because 50 next is null 
                // 51 , 52 ,.....
                current = current.next
            }
            // now if 51 is current so save 52 in next ,.....
            current.next = newNode
        }

    }
    // the first node was now it come in next new node
    addFirst(val:T) {
    // first create node
    const newNode = new NodeListt(val)

    if(this.isEmpty()) {
        this.head = newNode;
    }else {
        newNode.next = this.head;
        this.head = newNode;
    }
    }

    indexOf(val:string | number) {
        let current = this.head;
        let i = 0;
        while(current?.next != null){
            if(current?.value == val) return i;
            current = current?.next;
            i++;
        }
        return -1;
    }


    contains(val:number) {
        return this.indexOf(val) != -1;
    }


    removeFirst() {

        if(this.isEmpty()) {
            return "no item"
        }
        if(this.head?.next == null){
            this.head = null;
            return
        }
        const second =  this.head?.next;
        this.head.next = null;
        this.head = second;
        
    }
    removeLast() {
        let current = this.head
        while(current?.next != null) {
           
            if(current.next.next == null){
                current.next = null;
            }
            current = current.next
        }
    }

    size() {
        let i = 0;

        let current = this.head;
        while(current != null){
            i++;
            current = current.next
        }
        return i
    }
    private isEmpty() {
     return this.head == null;
    }

    
}
const l1 = new LinkList<number>()
// l1.addLasOrAdd(50)س
// l1.addFirst(49)


// l1.removeFirst()
// console.log(l1)
// l1.removeLast()
console.log(l1.size())
// console.log(l1.indexOf(52));
