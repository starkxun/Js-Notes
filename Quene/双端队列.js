class Deque{
    constructor(){
        this.count = 0;
        this.lowCount = 0;
        this.items = {};
    }
    addFront(element){      //在队列头部添加元素
        if(this.isEmpty()){
            this.addBack(element);
        }
        else if(this.lowCount>0){
            this.lowCount--;
            this.items[this.lowCount] = element;
        }
        else{
            for(let i=this.count;i>0;i--){
                this.items[i] = this.items[i-1];
            }
            this.count++;
            this.lowCount = 0;
            this.items[0] = element;
        }
    }
    addBack(element){       //在队列尾部添加元素
        this.items[this.count] = element;
        this.count++;
    }
    removeFront(){      //移除队列首部第一个元素
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowCount];
        delete this.items[this.lowCount];
        this.lowCount++;
        return result;
    }
    removeBack(){       //移除队列最后一个元素
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.count];
        delete this.items[this.count];
        this.count--;
        return result;
    }
    peekFront(){        //返回队列首部第一个元素
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowCount];
    }
    peekBack(){     //返回队列尾部第一个元素
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count];
    }
    isEmpty(){
        return this.count - this.lowCount === 0;
    }
    size(){
        return this.count - this.lowCount;
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowCount]}`;
        for(let i=this.lowCount+1;i<this.count;i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}

const deque = new Deque();
console.log(deque.isEmpty()); // 输出 true
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString()); // John, Jack
deque.addBack('Camila');
console.log(deque.toString()); // John, Jack, Camila
console.log(deque.size()); // 输出 3
console.log(deque.isEmpty()); // 输出 false
deque.removeFront(); // 移除 John
console.log(deque.toString()); // Jack, Camila
deque.removeBack(); // Camila 决定离开
console.log(deque.toString()); // Jack
deque.addFront('John'); // John 回来询问一些信息
console.log(deque.toString()); // John, Jack
