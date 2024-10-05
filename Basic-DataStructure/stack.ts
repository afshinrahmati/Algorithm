// a stack is a liner data structure that follows 
// stack is a powerful datastructure <Last In First Out>
// : 1) implement the undo feature
// :2) stack look like the bunch of books that mean we can only view or remove the top book,
// and if we want to bottom book we have to remove all the books one by one

// :3) stack has 3 operation O(1):
// push(item) add item in the last
// pop() Remove and return the top element from the stack.
// peek() Return the top element without removing it.
// isEmpty() Check if the stack is empty.

class Stack<T> {
    private items:T[] = [];

    public push(iteam:T):void {
        this.items.push(iteam)
    }
    public pop() {
       return this.items.pop();
    }
    public peek() {
        if(!this.isEmpty()) {
            throw new Error("Stack is Empty");
        }
        return this.items[this.items.length - 1];
    }
    public isEmpty(): boolean {
        if(this.items.length > 0) return true
        return false;
    }
    public size() {
        return this.items.length
    }
    public clear() {
        return this.items = [];
    }
}

// Example usage:
const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());  // Output: 30
console.log(stack.pop());   // Output: 30
console.log(stack.size());  // Output: 2
console.log(stack.isEmpty()); // Output: false