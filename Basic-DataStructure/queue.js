var Queue = /** @class */ (function () {
    function Queue() {
        this.item = [];
    }
    Queue.prototype.enqueue = function (elelment) {
        this.item.push(elelment);
    };
    Queue.prototype.dequeue = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.item.shift();
    };
    Queue.prototype.peek = function () {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.item[0];
    };
    Queue.prototype.size = function () {
        return this.item.length;
    };
    Queue.prototype.clear = function () {
        this.item = [];
    };
    Queue.prototype.isEmpty = function () {
        return this.item.length > 0 ? false : true;
    };
    return Queue;
}());
// Example usage:
var queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.dequeue()); // 10
console.log(queue.peek()); // 20
console.log(queue.size()); // 2
