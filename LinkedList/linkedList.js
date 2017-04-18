
function LinkedList() {
    this.head = null;
}

LinkedList.prototype.add = function(val) {
    let current = this.head,
        node = {
            value: val,
            next: null
        };
    
    if (current === null) {
        this.head = node;
    }
    else {
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }
};

LinkedList.prototype.delete = function(val) {
    let current = this.head;
    
    if (current.value === val) {
        this.head = current.next;
    }
    else {
        let previous = current;
        
        while (current.next !== null) {
            if (current.value === val) {
                previous.next = current.next;
                break;
            }
            previous = current;
            current = current.next;
        }
    }
};

// First make sure I copy all values to a new Array. Next create a reversedSLL 
function reverseSll(sll) {
    let current = sll.head,
        nodes = [],
        reversedSLL = new LinkedList();
    
    while (current !== null) {
        nodes.push(current);
        current = current.next;
    }
    
    reversedSLL.head = nodes.pop();
    current = reversedSLL.head;
    
    let node = array.pop();
    
    while(node !== null) {
        node.next = null;
        current.next = node;
        current = current.next;
        node = nodes.pop();
    }
    
    return reversedSLL;
}
         
function findKthElement(sll, kth) {
    let current = sll.head,
        idx = 1,
        kthElement;
    
    while(current !== null) {
        if (idx === k) kthElement = sll.head;
        
        else if (idx - k > 0) kthElement = kthElement.next;
        idx++;
        current = current.next;
            
    }
    
    return kthElement;
}

function deleteKthElement(sll, kth) {
    let current = sll.head,
        idx = 1,
        kthElement,
        prevElement;
    
    while(current !== null) {
        if (idx === k) kthElement = sll.head;
        
        else if (idx - k > 0) {
            prevElement = kthElement;
            kthElement = kthElement.next;
        }
        
        idx++;
        current = current.next;
    }
    
    if (prevElement === null) {
        sll.head = sll.head.next;
    }
    else {
        prevElement.next = kthElement.next
    }
    return sll;
}


function detectLoop(sll) {
    let slowPointer = sll.head,
        fastPointer = sll.head;
        
    while(slowPointer && fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        
        if (slowPointer === fastPointer) {
            return true;
        }
    }
    return false;
}

function isPalendromeLL(sll) {
    let slowPointer = sll.head,
        fastPointer = sll.head,
        nodeValues = [];
    
    while(fastPointer !== null && fastPointer.next !== null) {
        nodeValues.push(slowPointer.value);
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
    }
    //If its odd skip middle element.
    while(fastPointer !== null) {
        slowPointer = slowPointer.next;
    }
    
    while(slowPointer) {
        if (nodeValues.pop() !== slowPointer.value) {
            return false;
        }
        slowPointer = slowPointer.next;
    }
    return true;
}

var sll = new LinkedList();
sll.push(2);
sll.push(3);
sll.push(4);


sll.remove(3); 
sll.remove(1); 

