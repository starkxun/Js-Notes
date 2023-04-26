---
title: 数据结构JavaScript语言描述
---

### 编成环境

本次学习使用的环境是JavaScript shell， 安装方式如下：

1. 安装`node`。（如果已经安装过忽略）

   ```shell
   sudo apt install npm
   ```

2. 安装`JavaScript shell`

   ```shell
   sudo npm i -g zx
   ```

   tips: 安装`shell`要求`node`的版本大于14,如果版本过低， 可能会导致安装失败。升级`node`的方法如下：

   ```shell
   sudo npm install -g n
   sudo n stable	#(升级node.js到最新版) stable #（升级node.js到最新稳定版）
   ```

   安装完成后，在终端输入`js`，进入`shell`交互模式，命令行会出现`js>`提示符，这时就可以输入`JavaScript`表达式和语句了。例：

   ```shell
   js> 1
   1
   js> 1+2
   3
   js> var num = 1;
   js> num*124
   123
   js> for(var i=1;i<6;++i){
   	console.log(i);
   }
   1
   2
   3
   4
   5
   ```

可以按`Ctrl+X`退出shell。

`console.log()`打印的结果是自动换行的，如果不需要换行， 可以使用`process.stdout.write()`





### 数组

#### 创建数组

1. 使用`[]`操作符声明一个数组变量：

   ```javascript
   var numbers = [];		//也可以使用let，例如：let numbers[]；
   ```

   这样得到一个长度为0的数组。可以在声明的时候放入一组元素：

   ```javascript
   var numbers = [1,2,3,4,5,6,7];
   ```

   打印数组：

   ```javascript
   var number = [1,2,3,4,5，6,7];
   for(var i=0;i<=6;i++){
       console.log(number[i]);
   }
   console.log("The length is: "+number.length);
   ```

   还可以通过`Array`的构造函数创建数组：

   ```javascript
   var numbers = new Array();
   console.log(nubmers.length);	//输出0
   ```

   可以在`Array`中传入一组元素作为数组的初始值：

   ```javascript
   var numbers = new Array(1,2,3,4,4,5,6,7);
   console.log(numbers.length);	//输出7
   ```

   如果`Array`中只传入一个数字，那么这个数字就会被当作数组的长度：

   ```javascript
   var numbers = new Array(10);
   console.log(numbers.length);	//输出10
   ```

   在脚本语言里很常见的一个特性是，数组中的元素不必是同一种数据类型，例：

   ```javascript
   var objects = [1,"Joe",true,null];
   for(var i=0;i<a.length;i++){
       console.log(a[i]);
   }
   ////////////////////////////打印结果//////////////////////////
   1
   Joe
   true
   null
   ```

   

#### 读写数组

读写操作和其他语言类似





#### 由字符串生成数组

调用字符串对象的`split()`方法也可以生成数组。

该方法可通过一些常见的风格符（如空格），将一个字符串分成几部分，并将每部分作为一个新元素保存于一个新建的数组中。

例：

```javascript
var x = "Fuck everyone, just ruin!";
var a = x.split(" ");
for(var i=0;i<a.length;i++){
    console.log("a "+i+": "+a[i]);
}
////////////////////////////打印结果//////////////////////////
a 0: Fuck
a 1: everyone,
a 2: just
a 3: ruin!
```





#### 对数组的整体性操作

1. 浅复制

   将一个数组赋值给另一个数组:

   ```javascript
   var a =[];
   for(var i=0;i<10;i++){
       a[i] = i+1;
   }
   var b = a;
   console.log("b[1] is: "+b[1]);
   a[1] = 10;
   console.log("b[1] is: "+b[1]);
   ////////////////////////////打印结果//////////////////////////
   b[1] is: 2
   b[1] is: 10
   ```

   可以看到,当把数组复制给另一个数组时,只是为被赋值的数组增加了一个新的引用.当修改数组`a`的值的时候,

   `b`的值也随之发生变化.

   这种行为被成为**浅复制**,新数组依然指向原来的数组.

2. 深复制

   将原数组中的每一个元素都复制一份到新数组中,可以写一个函数,用循环来复制来每一个值:

   ```javascript
   function copy(x,y){
       for(var j=0;j<x.length;j++){
           y[j] = x[j];
       }
   }
   ```

   完整代码:

   ```javascript
   var a =[];
   for(var i=0;i<10;i++){
       a[i] = i+1;
   }
   var b = [];
   copy(a,b);
   console.log("b[1] is: "+b[1]);
   a[1] = 10;
   console.log("b[1] is: "+b[1]);
   
   function copy(x,y){
       for(var j=0;j<x.length;j++){
           y[j] = x[j];
       }
   }
   ////////////////////////////打印结果//////////////////////////
   b[1] is: 2
   b[1] is: 2
   ```

   





#### 添加元素

1. 在数组的末尾添加元素

   只需把值赋值给数组末尾的最后一体个空元素即可

   ```javascript
   a = [1,2,3,4,5,6];
   a[a.length] = [7];
   ```

   也可以使用`push`方法：

   ```javascript
   a = [1,2,3,4,5,6];
   a.push(7);	//数组末尾添加元素7
   a.push(8,9,10);	//数组末尾添加元素8,9,10
   ```

2. 在数组开头插入元素

   在数组的开头插入元素，那么后面的每个元素都要向后面移动一位。可以使用`unshift()`方法。该函数就是根据这个原理设计的：

   ```javascript
   a = [1,2,3,4,5,6];
   a.unshift(0,0,0);	//数组变为[0,0,0,1,2,3,4,5,6]
   ```





#### 删除元素

1. 从数组末尾删除元素

   使用`pop`方法：

   ```javascript
   a = [1,2,3,4,5,6];
   a.pop();	//数组变为[1,2,3,4,5]
   ```

2. 从数组的开头删除元素

   使用`shift()`方法可以实现从数组的开头删除元素：

   ```javascript
   a = [1,2,3,4,5,6];
   a.shift();		//数组变为2,3,4,5,6
   ```

   其实现的原理就是数组的每一位都向前移一位，将第一位的元素覆盖掉：

   ```javascript
   a = [1,2,3,4,5,6];
   b = [];		//创建一个新数组，存储移动后的元素，这样可以避免存储到undefined元素
   for(var i=0;i<a.length-1;i++){
       a[i] = a[i+1];
       if(a[i]!=undefined)
       b.push(a[i]);
   }
   console.log(b);		
   console.log(b.length);
   ```

   

#### 在任意位置添加或删除元素

使用`splice`方法，简单的通过指定位置/缩索引，就可以删除相应位置上指定数量的元素。

```javascript
a = [1,2,3,4,5,6];
a.splice(1,3);	//数组变为[1,5,6]
```

如果想往数组指定位置插入元素，也用`splice`方法。例如想把`2,3,4`插入到数组里，可以这么写：

```javascript
a = [1,5,6];
a.splice(1,0,2,3,4);	//数组变为[1,2,3,4,5,6]
```

`splice`方法接受的第一个参数，表示想要删除或插入的元素的索引值。

第二个参数是删除元素的个数（这个例子里是插入元素，所以传入0）

第三个参数往后，就是要添加到数组里的值。





#### 多维数组

1. 创建一个二维数组（其他多维数组类似）

   ```javascript
   //第一种方式：传递两个Array构造函数到参数中
   var ArrayObj = new  Array(new  Array(),new  Array());
    
   //第二种方式：传递两个Array表达式到参数中
   var ArrayObj = new  Array([],[]);
    
   //第三种方式：通过for循环为其添加Array构造函数
   var ArrayObj = new Array();    //创建数组对象
   for (var i = 0; i < length; i++) {
       ArrayObj[i] = new Array();    //在每一个数组元素内再定义一个数组
   }
   
   //第四种方式，这种方式也更加简洁
   Array = [[],[]];	//这样就创建好了一个二维数组
   ```

   2. 向数组内添加值

      可以直接指定下标然后赋值，类似于下面的写法：

   ```javascript
   Array[0][0] = 72;
   ```

   这样，该位置就被赋值为72。

   也可以用循环语句来初始化并给数组赋值：

   ```javascript
   a = []；	//声明一个一维数组
   for(let i=0;i<8;i++){
       a[i] = [];	//初始化每个数组，不初始化的话会报错
       for(let j=0;j<8;j++){
           a[i][j] = i+j;	//对每个位置进行赋值
       }
   }    
   console.table(a);	//使用console.table会更加友好的打印数组
   ```





#### 数组合并

当有多个数组需要合并到一个数组的时候，可以考虑迭代数组的每个元素，然后加入到新的数组中。JS中也用现成的方法可供使用，就是`concat`,例如：

```javascript
a = [1,2,3,4];
b = ["Tom","Jary","Cindy","Anna"];
c = a.concat(b);		//c现在为[ 1, 2, 3, 4, 'Tom', 'Jary', 'Cindy', 'Anna' ]
```





#### 迭代器函数

若想迭代数组内的元素，可以使用for循环，例如下面的例子是判断数组内的元素是否可以被2整除：

```javascript
a = [];
for(let i=0;i<15;i++){
    a[i] = i+1;
}
function isEven(x){
    return x%2 === 0 ? true:false;	//也可以写成 return x%2 === 0;
}
for(let j=0;j<15;j++){
    if(isEven(a[j])) console.log(a[j]);		//如果能被2整除，就输出这个数
}
```

JavaScript内部也提供了一些迭代器可供使用：

1. every迭代器

   `every`方法会返回迭代数组中的每个元素，直到返回`false`。

   在看例子之前，可以先把上面的`isEven`函数改写一下：

   ```javascript
   function isEven(x){
       return x%2 === 0 ? true:false;	//也可以写成 return x%2 === 0;
   }
   //改写
   const isEven = x => x%2 === 0; 
   ```

   使用`every`迭代器：

   ```javascript
   a = [];
   for(let i=0;i<15;i++){
       a[i] = i+1;
   }
   const isEven = x => x%2 === 0;
   if(!a.every(isEven)){	//因为第一个数是1,不满足条件，所以结束迭代
       console.log("No");
   }
   ```

2. some迭代器

   `some`迭代器和`every`迭代器刚好相反，当遇到判断结果是`true`的时候结束迭代：

   ```javascript
   a = [];
   for(let i=0;i<15;i++){
       a[i] = i+1;
   }
   const isEven = x => x%2 === 0;
   if(!a.every(isEven)){	//因为第2个数是1,满足条件，所以结束迭代
       console.log("Yes");
   }
   ```

3. forEach迭代器

   `forEach`迭代器遍历数组中的每个元素，下面是示例：

   ```javascript
   a = [];
   for(let i=0;i<15;i++){
       a[i] = i+1;
   }
   a.forEach(
       function (item){		//item为下标，可以u自定义名称
           if(a[item]%2===0) console.log(a[item]);
       }
   );   
   ```

   这样，就会打印数组内所有满足条件的元素值。

4. map和filter方法

   `map`方法迭代后会返回一个新的数组：

   ```javascript
   a = [];
   for(let i=0;i<15;i++){
       a[i] = i+1;
   }
   const isEven = x => x%2 === 0;
   const myMap = a.map(isEven);
   console.table(myMap);		//打印结果为true和flase
   ```

   `myMap`就是返回的新的数组，里面包含的结果都是`true`和`false`。

   `filter`方法也会返回一个新的数组，但是结果不是`true`和`false`，而是数组内满足条件的元素值。

   ```javascript
   a = [];
   for(let i=0;i<15;i++){
       a[i] = i+1;
   }
   const isEven = x => x%2 === 0;
   const myfilter = a.filter(isEven);
   console.table(myfilter);	//打印结果为满足条件的元素值
   ```

5. reduce方法

   语法：

   ```javascript
   arr.reduce(callback,[initialValue])
   ```

   reduce 为数组中的每一个元素依次执行回调函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：初始值（或者上一次回调函数的返回值），当前元素值，当前索引，调用 reduce 的数组。

   ```javascript
   callback （执行数组中每个值的函数，包含四个参数）
   
       1、previousValue （上一次调用回调返回的值，或者是提供的初始值（initialValue））
       2、currentValue （数组中当前被处理的元素）
       3、index （当前元素在数组中的索引）
       4、array （调用 reduce 的数组）
   
   initialValue （作为第一次调用 callback 的第一个参数。）
   ```

   先看第一个例子：

   ```javascript
   var arr = [1, 2, 3, 4];
   var sum = arr.reduce(function(prev, cur, index, arr) {
       console.log(prev, cur, index);
       return prev + cur;
   })
   console.log(arr, sum);
   ```

   打印结果：

   ```
   1 2 1
   3 3 2
   6 4 3
   [1, 2, 3, 4] 10
   ```

   这里可以看出，上面的例子`index`是从1开始的，第一次的`prev`的值是数组的第一个值。数组长度是4，但是`reduce`函数循环3次。

   再看第二个例子：

   ```javascript
   var  arr = [1, 2, 3, 4];
   var sum = arr.reduce(function(prev, cur, index, arr) {
       console.log(prev, cur, index);
       return prev + cur;
   }，0) //注意这里设置了初始值
   console.log(arr, sum);
   ```

   打印结果：

   ```
   0 1 0
   1 2 1
   3 3 2
   6 4 3
   [1, 2, 3, 4] 10
   ```

   这个例子`index`是从0开始的，第一次的prev的值是我们设置的初始值0，数组长度是4，`reduce`函数循环4次。

   结论：如果没有提供`initialValue`，`reduce` 会从索引1的地方开始执行 `callback` 方法，跳过第一个索引。如果提供`initialValue`，从索引0开始。





### 栈

#### 一个简单的栈结构

栈是一个先进后出的的一个结构。下面是一个用数组模拟的简单的栈结构：

```javascript
class Stack{
    constructor(){
        this.items = [];
    }
    push(element){      //向栈顶添加元素
        this.items.push(element);
    }  
    pop(){      //从栈顶移除元素
        return this.items.pop();
    }
    peek(){     //输出栈顶元素（查看栈顶元素）
        return this.items[this.items.length-1];
    }
    isEmpty(){      //检查栈是否为空
        return this.items.length === 0;
    }
    size(){     //返回栈的长度
        return this.items.length;
    }
    clear(){        //清空栈内元素
        this.items = [];
    }
    
}

const stack = new Stack();
stack.push(78);
stack.push(98);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
stack.clear();
console.log(stack.size());
```





#### JavaScript对象的Stack类

这里改版并不大，只是在上面的stack类基础上添加了一个`count`元素统计栈元素的个数。`Stack`类结构如下：

```javascript
class stack{	
    constructor(){
        this.count = 0;		//统计栈元素的个数
        this.items = {};	
    }
}
```

