class stack{
    constructor(){
        this.count = 0;
        this.items = {};
    }
    push(element){
        this.items[this.count] = element;
        this.count++;
    }
    peek(){
        if(this.isEmpty()){     //先判断栈是否为空
            return undefined;
        }
        return this.items[this.count-1];
    }
    size(){     //返回栈的大小
        return this.count;
    }
    isEmpty(){
        return  this.count === 0;
    }
    pop(){
        if(this.isEmpty()){     //先判断栈是否为空
            return undefined;
        }
        this.count--;       //提前减一
        const result = this.items[this.count];      //保存被弹出的元素，用于返回
        delete this,this.items[this.count];
        return result;
    }
    clear_1(){      //清空栈,直接复原
        this.items = {};
        this.count = 0;
    }
    clear_2(){      //清空栈，模拟弹出所有元素
        while(!this.isEmpty()){
            this.pop();
        }
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[0]}`;
        for(let i=1;i<this.count;i++){
            objString = `${objString},${this.items[i]}`;
        }
       return objString; 
    }
}
const my_stack = new stack;
my_stack.push(6);
my_stack.push(8);
console.log("The top element is:"+my_stack.peek());
console.log("stack size is: "+my_stack.size());
console.log("The delete element is: "+my_stack.pop());
console.log("stack size is: "+my_stack.size());
console.log("The top element is:"+my_stack.peek());
my_stack.push(6);
my_stack.push(8);
console.log("num to string is: "+typeof(my_stack.toString()));
console.log("num to string is: "+my_stack.toString());
my_stack.clear_2();
console.log("stack size is: "+my_stack.size());

