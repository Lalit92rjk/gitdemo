class Node {
    constructor(value) {
        this.val = value;
        this.leftChild = null;
        this.rightChild = null;
    }

}

class BinarySearchTree {
    constructor(rootValue) {
        this.root = new Node(rootValue);
    }

    insert(currentNode, newValue) {
        if (currentNode === null) {
            currentNode = new Node(newValue);
        } else if (newValue < currentNode.val) {
            currentNode.leftChild = this.insert(currentNode.leftChild, newValue);
        } else {
            currentNode.rightChild = this.insert(currentNode.rightChild, newValue);
        }
        return currentNode;
    }

    insertBST(newValue) {
        if(this.root==null){
            this.root=new Node(newValue);
            return;
        }
        this.insert(this.root, newValue);
    }

    preOrder(currentNode) {
        if (currentNode!==null) {
            console.log(currentNode.val);
            this.preOrder(currentNode.leftChild);
            this.preOrder(currentNode.rightChild);
        }

    }

}

var BST = new BinarySearchTree(6);
console.log("The root val for BST : ", BST.root.val)
BST.insertBST(4);
BST.insertBST(9);
BST.insertBST(5);
BST.insertBST(2);
BST.insertBST(8);
BST.insertBST(12);
BST.insertBST(10);
BST.insertBST(14);

BST.preOrder(BST.root);


// Recursive method
class node{
	constructor(value){
		this.left = null
		this.right = null
		this.val = value
	}
}

// A function to do preorder tree traversal
function Preorder(root){

	if(root){

		// First print the data of node
		console.log(root.val," ")

		// Then recur on left child
		Preorder(root.left)

		// Finally recur on right child
		Preorder(root.right)
	}
}

// Driver code
let root = new node(1)
root.left = new node(2)
root.right = new node(3)
root.left.left = new node(4)
root.left.right = new node(5)

Preorder(root)






