class Node{
    constructor(data,left=null,right=null){

        this.data = data;
        this.left =  left;
        this.right =  right;
    }
}

class BST{
    constructor(){
        this.root =  null;
    }
    add(data){
        const node =this.root;
        if(node==null){
            this.root =  new Node(data);
            return;
        }else{
            const searchTree =  function(node){
                if(data<node.data){
                    if(node.left==null){
                        node.left = new Node(data);
                        return;
                    }else if(node.left!==null){
                        return searchTree(node.left);
                    }
                    else if(data>node.data){
                        if(node.right==null){
                            node.right= new Node(data);
                            return;
                        }else if(node.right!==null){
                            return searchTree(node.right);
                        }
                    }else{
                        return null;
                    }
                };
                return searchTree(node);
            }
        }
    }
    isPresent(data){
        let current = this.root;
        while(current){
            if(data==current.data){
                return true;
            }
            if(data<current.data){
                current = current.left;
            }else {
                current = current.right;
            }
        }
        return false;
    }
}


const bst = new BST()

bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);

console.log(bst.isPresent(4));
