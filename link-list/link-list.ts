
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
    private isEmpty() {
     return this.head == null;
    }

    
}
const l1 = new LinkList<number>()
l1.addLasOrAdd(50)
l1.addFirst(49)


// l1.removeFirst()
// console.log(l1)
l1.removeLast()
console.log(l1)
// console.log(l1.indexOf(52));
