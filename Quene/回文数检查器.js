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
        this.count--;       //提前减一（下标从0计算，count统计的是队列的元素个数）
        const result = this.items[this.count];
        delete this.items[this.count];
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

function palindromeChecker(aString){
    if(aString===undefined||aString===null||(aString!==null&&aString.length===0)){
        return false;
    }
    const deque = new Deque();
    const lowerString = aString.toLocaleLowerCase().split(' ').join('');        //删除字符串内的空格
    let isEqual = true;
    let firstChar,lastChar;
    for(let i=0;i<lowerString.length;i++){
        deque.addBack(lowerString.charAt(i));
    }
    while(deque.size()>1 && isEqual){       //只有一个字符一定是回文数
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if(firstChar!==lastChar){
            console.log(firstChar);
            console.log(lastChar);
             isEqual=false;
        }
    }
    return isEqual;
}

console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a caror a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));