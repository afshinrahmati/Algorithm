
class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {

    constructor() {
        this.root = null;
    }
    // alll the time inset with the number max and mim in the code
    insert(value) {
        const newNode = new Node(value);

        if (this.root == null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        console.log("thereeeeeee", value, current.value, "thereeeeeee")
        while (true) {
            if (value < current.value) {
                // if no create new
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                //  if yes; current equal left if exist beacuse it on the while true
                current = current.left;
            } else if (value > current.value) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            } else {
                // Duplicate values are not allowed
                return this;
            }
        }
    }
    search(value) {
        let current = this.root;
        if (!current) {
            return false;
        }
        while (current) {
            if (current.value == value) {
                return true;
            }
            if (value < current.value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
    // the value on the right will become parent search on the net
    delete(value, node = this.root, parent = null) {
        if (!node) {
            return false;
        }
        if (value < node.value) {
            return this.delete(value, node.left, node);
        } else if (value > node.value) { 
            return this.delete(value,node.right,node);
        } else if(value == node.value) {
            // if it is parent
            if(node.left && node.right) {
                return this.delete(value,)
            }
        }
    }
}


const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(3);
bst.insert(7);
bst.insert(18);

const find = bst.search(85);
console.log(find)
