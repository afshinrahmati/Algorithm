
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySerachTree {

    constructor(val) {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if (this.root == null) {
            this.root = newNode;
        } else {
            let current = this.root;
            while (true) {


            }
        }
    }
}