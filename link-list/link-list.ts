
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

    addLast(val:T) {
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

        const newNode = new NodeListt(val)
        if(this.head == null) {
            this.head = newNode
        }else {
            let current = this.head
            while(current.next == null) {
                
            }
        }
    }
}
// const l1 = new LinkList<number>()
// l1.addLast(50)
// l1.addLast(51)
// l1.addLast(52)
