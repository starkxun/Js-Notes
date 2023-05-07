class Stack{
    constructor(){
        this.items = [];
    }
    push(element){      //向栈顶添加元素
        return this.items.push(element);
    }
    pop(){      //从栈顶移除元素
        return this.items.pop();
    }
    peek(){     //查看栈顶元素
        return this.items[this.items.length-1];
    }
    isEmpty(){      //检查栈是否为空
        return this.items.length===0;
    }
    clear(){        //清空栈
        this.items = [];
    }
    size(){     //统计栈的长度
        return this.items.length;
    }
}

const stack = new Stack();      //初始化栈
console.log(stack.isEmpty());     //判断是否为空
stack.push(8);      //向栈内插入元素8
stack.push(5);      //向栈内插入元素5
console.log(stack.peek());      //查看栈顶元素
stack.push(56);     //向栈内插入元素56
console.log(stack.size());      //统计栈的元素个数
stack.clear();      //清空栈
console.log(stack.isEmpty());      
