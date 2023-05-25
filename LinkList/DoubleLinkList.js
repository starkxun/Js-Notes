
class Node {
    constructor(element, next) {
      this.element = element;
      this.next = next;
    }
}

class DoublyNode extends Node{
    constructor(element,next,prev){
        super(element,next);        //super方法引用父类的方法
        this.prev = prev;       //指向上一个节点
    }
}
function defaultEquals(a, b) {
    return a === b;
}

class LinkedList{
    constructor(equalsFn = defaultEquals){      
        this.count = 0;
        this.head = undefined;  
        this.equalsFn = equalsFn;
    }


    push(element){
        const node = new Node(element);      
        if(this.head == null){      //如果链表为空，直接在头节点插入
            this.head = node;
        }
        else{
            let current = this.head;  
            while(current.next!=null){
                current = current.next;
            }
            current.next =node;
        }
        this.count++;
    }   
    
    
    removeAt_1(index){        //移除指定位置的元素
        if(index >=0 && index < this.count){
            let current = this.head;

        if(index===0){
            this.head = current.next;
        }
        else{
            let previous;
            for(let i=0;i<index;i++){
                previous = current;
                current = current.next;
            }
            // 将 previous 与 current 的下一项链接起来：跳过 current，从而移除它
            previous.next = current.next;
        }
        this.count--;
        return  current.element;
        }
        return undefined;
    }


    getElementAt(index){        //循环迭代到指定位置
        if(index >= 0 && index <= this.count){
            let current = this.head;
            for(let i = 0;i < index && current != null;i++){
                current = current.next;
            }
            return current;
        }
        return undefined;
    }

    removeAt_2(index){
        if(index >=0 && index < this.count){
            let current = this.head;
            if(index === 0){
                this.head = current.next;
            }
            else{
                const previous = this.getElementAt(index-1);    //idnex-1的目的是保证删除的元素是index位置的
                current = previous.next;        //如果要将index-1改成index，可以将这里改写成current = previous
                previous.next = current.next;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

    insert(element,index){          //在任意位置插入元素
        if(index >=0 && index <= this.count){
            const node = new Node(element);
            if(index === 0){        // 如果是在头部插入
                const curren = this.head;
                node.next = curren;f
                this.head = node;
            }
            else{
                const previous = this.getElementAt(index-1);
                const curren = previous.next;
                node.next = curren;
                previous.next = node;
            }
            this.count++;
            return true;
        }
        return false;
    }

    indexOf(element){       //在列表中查找指定元素
        let curren = this.head;
        for(let i=0;i<this.count&&curren!=null;i++){
            if(this.equalsFn(element,curren.element)){return i;}
            curren = curren.next;
        }
        return -1;
    }

    remove(element){        //在列表中删除指定元素
        const index = this.indexOf(element);
        return this.removeAt_2(index);
    }


    dispaly(){      //打印链表所有元素
        if(this.count === 0){
            console.log("The linkList is empty");
            return;
        }
        let current = this.head;
        for(let i=0;i<this.count;i++){
            process.stdout.write(current.element+' ');
            current = current.next;  
        }
    }

    size(){
        return this.count;
    }


    isEmpty(){
        return this.size()===0;
    }


    getHead(){
        return this.head;
    }
    
    toString(){
        if(this.head == null){
            return '';
        }
        let objString = `${this.head.element}`;
        let curren = this.head.next;
        for(let i=1;i<this.size()&&curren!=null;i++){
            objString = `${objString},${curren.element}`;
            curren = curren.next;
        }
        return objString;
    }

}




class DoubleLinkList extends LinkedList{
    constructor(equalsFn = defaultEquals){
        super(equalsFn);    //super方法引用父类的构造方法
        this.tail = undefined;      //尾节点
    }
    insert(element,index){      //在指定位置插入元素
        if(index >= 0&&index <= this.count){
            const node = new DoublyNode(element);
            let current = this.head;
            if(index === 0){        //如果在首部插入
                if(this.head == null){      //如果链表为空
                    this.head = node;
                    this.tail = node;
                }
                else{           //如果不为空
                    node.next = this.head;
                    current.prev = node;
                    this.head = node;
                }
            }
            else if(index === this.count){      //如果在尾部插入
                current = this.tail;
                current.next = node;
                node.prev = current;
                this.tail = node;
            }
            else{       //现在是常规插入
                const previous = this.getElementAt(index-1);        
                current = previous.next;
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this.count++;
            return true;
        }
        return false;
    }

    removeAt(index){
        if(index >= 0&& index <= this.count){
            let current = this.head;
            if(index === 0){        //如果删除头节点
                this.head = current.next;
                if(this.count === 1){
                    this.tail = undefined;
                }
                else{
                    this.head.prev = undefined;     //此时头节点已经指向最后一个元素了，所以尾节点的前一项也要设置为undefined（所有元素都删完了）
                }
            }
            else if(index === this.count-1){        //如果删除尾节点
                current = this.tail;
                this.tail = current.prev;
                this.tail.next = undefined;
            }
            else{       //常规位置删除
                current = this.getElementAt(index);
                const previous = current.prev;
                previous.next = current.next;
                current.next.prev = previous;
            }
            this.count--;
            return current.element;
        }
        return undefined;
    }

}

const DList = new DoubleLinkList;
DList.insert(1,0);
DList.insert(2,1);
DList.dispaly();
DList.removeAt(0);
console.log("");
DList.dispaly();