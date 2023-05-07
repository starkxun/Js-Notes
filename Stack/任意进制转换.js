class Stack{
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
        delete this.items[this.count];
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

decimalToBinary = function(decimaNum,base){
    const remStack = new Stack();
    let num = decimaNum;
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let rem;
    let binaryString = '';
    if (!(base >= 2 && base <= 36)) {       //不在转换范围内，退出
        return '';
    }
    while(num>0){
        rem = num%base;
        remStack.push(rem);
        num = parseInt(num/base);
    }
    while(!remStack.isEmpty()){
        binaryString += digits[remStack.pop()];
    }
    return binaryString;
}
result = decimalToBinary(1000,16);
console.log(result);