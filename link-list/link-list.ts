
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

    add(val:T) {
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
}
// const l1 = new LinkList<number>()
// l1.add(50)
// l1.add(51)
// l1.add(52)
