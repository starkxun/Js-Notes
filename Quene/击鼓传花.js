class Quene{        
    constructor(){
        this.count = 0;
        this.lowesCount = 0;        //追踪第一个元素
        this.items = {};    //使用一个对象来储存元素
    }
    enquene(element){       //向队列插入元素
        this.items[this.count] = element;
        this.count++;
    }
    dequene(){      //删除队列第一个元素
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowesCount];
        delete this.items[this.lowesCount];
        this.lowesCount++;
        return result;
    }
    peek(){     //查看对立第一个元素
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowesCount];
    }
    isEmpty(){      //判断队列是否为空
        return this.count-this.lowesCount===0;
        //也可以改写成下面这样
        // return this.size() === 0;
    }
    size(){     //返回队列的长度
        return this.count-this.lowesCount;
    }
    clear(){       //清空队列
        this.items = {};
        this.count = 0;
        this.lowesCount = 0;
    }
    //在 Stack 类中，我们从索引值为 0 开始迭代 items 中的值。由于 Queue 类中的第一个索引值不一定是 0，我们需要从索引值为 lowestCount 的位置开始迭代队列。
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowesCount]}`;
        for(let i=this.lowesCount+1;i<this.count;i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}


function hotPotato(elementList,num){
    const quene = new Quene();
    const elimitedList = [];
    for(let i=0;i<elementList.length;i++){
        quene.enquene(elementList[i]);
    }
    while(quene.size()>1){
        for(let j=0;j<num;j++){
            quene.enquene(quene.dequene());
        }
        elimitedList.push(quene.dequene());
    }
    return {
        elimited : elimitedList,
        winner : quene.dequene()
    }
}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
const result = hotPotato(names, 7);
result.elimited.forEach(name => {
    console.log(`${name}在击鼓传花游戏中被淘汰。`);
    });
console.log(`胜利者： ${result.winner}`);