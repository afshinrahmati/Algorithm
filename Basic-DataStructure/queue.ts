
class Queue<T> {
    private item:T[] = [];

    enqueue(elelment:T){
        this.item.push(elelment);
    }
    
    dequeue():T | undefined {
        if(this.isEmpty()) {
            return undefined
        }
        return this.item.shift()
    }   

    peek() {
        if(this.isEmpty()) {
            return undefined
        }
        return this.item[0]
    }
    size(): number {
        return this.item.length;
    }
      clear(): void {
        this.item = [];
    }
    isEmpty():boolean {
        return this.item.length > 0 ? false:true
    }
}

// Example usage:
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.dequeue()); // 10
console.log(queue.peek());    // 20
console.log(queue.size());    // 2