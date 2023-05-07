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
   if(a.some(isEven)){	//因为第2个数是1,满足条件，所以结束迭代
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
       function (item){		//item为下标，可以自定义名称
           if(a[item]%2===0) console.log(a[item]);
       }
   );   
   ```

   这样，就会打印数组内所有满足条件的元素值。

   这里的`function`是**回调函数**，这是必须要有的。也可以用ES6的箭头函数来简化代码：

   ```javascript
   a.forEach(
   	x => console.log(x)
   ); 
   ```

   

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





#### 删除数组内的重复元素

给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。然后返回 nums 中唯一元素的个数。（题目来源：leetcode）

示例1：

> 输入：nums = [1,1,2]
> 输出：2, nums = [1,2,_]
> 解释：函数应该返回新的长度 2 ，并且原数组 nums 的前两个元素被修改为 1, 2 。不需要考虑数组中超出新长度后面的元素。

示例2：

> 输入：nums = [0,0,1,1,1,2,2,3,3,4]
> 输出：5, nums = [0,1,2,3,4]
> 解释：函数应该返回新的长度 5 ， 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4 。不需要考虑数组中超出新长度后面的元素。

注：数组已升序排列



题解代码：

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
nums = [1,1,1,2,3,4,5,6,6,7,8,12,12,13];
var removeDuplicates = function(nums) {
    var len = nums.length;
    if(len==0) return 0;
    let i=1;
    for(let j=1;j<len;j++){
        if(nums[j]!==nums[i-1]){
            nums[i]=nums[j];    //当遇到相同的数就会被忽略掉
            i++;
        }
    }
    return i;
};
result = removeDuplicates(nums);
console.log(result);
console.log(nums);
```

双指针方式：一次循环里，用两个角标同时定位两个数组元素来比较







#### 买股票的最佳时机

给你一个整数数组 prices ，其中 prices[i] 表示某支股票第 i 天的价格。

在每一天，你可以决定是否购买和/或出售股票。你在任何时候 最多 只能持有 一股 股票。你也可以先购买，然后在 同一天 出售。

返回 你能获得的 最大 利润 。（题目来源：leetcode）

示例1

> 输入：prices = [7,1,5,3,6,4]
> 输出：7
> 解释：在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
>   随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6 - 3 = 3 。
>   总利润为 4 + 3 = 7 。

示例2

> 输入：prices = [1,2,3,4,5]
> 输出：4
> 解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5 - 1 = 4 。
>   总利润为 4 。

示例3

> 输入：prices = [7,6,4,3,1]
> 输出：0
> 解释：在这种情况下, 交易无法获得正利润，所以不参与交易可以获得最大利润，最大利润为 0 。



题解代码

```javascript
prices = [7,1,5,3,6,4];
var number = 0;
var maxProfit = function(prices) {
    for(let i=0;i<prices.length-1;i++){
        number += Math.max(prices[i+1]-prices[i],0);
    }
    return number;
};
console.log(maxProfit(prices));
```

这里我先前犯了一个错误，就是认为在最低点买入，最高点卖出，就能获取最大收益，但其实在每次都能够获得收益的时候都累加进去，这样的收益才是最大的。所以本题求出所有上升区间的高度和就好了。









#### 旋转数组

给定一个整数数组 `nums`，将数组中的元素向右轮转 `k` 个位置，其中 `k` 是非负数。（题目来源：leetcode）

示例1

> 输入: nums = [1,2,3,4,5,6,7], k = 3
> 输出: [5,6,7,1,2,3,4]
> 解释:
> 向右轮转 1 步: [7,1,2,3,4,5,6]
> 向右轮转 2 步: [6,7,1,2,3,4,5]
> 向右轮转 3 步: [5,6,7,1,2,3,4]

示例2

> 输入：nums = [-1,-100,3,99], k = 2
> 输出：[3,99,-1,-100]
> 解释: 
> 向右轮转 1 步: [99,-1,-100,3]
> 向右轮转 2 步: [3,99,-1,-100]



解法1代码

```javascript
nums = [1,2,3,4,5,6,7];
var rotate = function(nums, k) {
    for(let i=0;i<k;i++){
        nums.unshift(nums[nums.length-1]);
        nums.pop();
    }
    return nums;
};
console.table(rotate(nums,3));
```

这里直接模拟，使用js的内置函数`unshift()`和`pop()`来向数组头部添加元素和删除尾部元素。效率较低







#### 存在重复元素

给你一个整数数组 `nums` 。如果任一值在数组中出现 **至少两次** ，返回 `true` ；如果数组中每个元素互不相同，返回 `false` 。（题目来源：leetcode）

示例1

> 输入：nums = [1,2,3,1]
> 输出：true

示例2

> 输入：nums = [1,2,3,4]
> 输出：false

示例3

> 输入：nums = [1,1,1,3,3,4,3,2,4,2]
> 输出：true



题解代码

```javascript
// nums = [4,3,2,3,8,9,5,6,8,1];
nums = [1,2,3,4,5,6];
var containsDuplicate = function(nums) {
    nums.sort();
    for(let i=0;i<nums.length-1;i++){
        if(nums[i+1]==nums[i]) return true;
    }
    return false;
};
console.log(containsDuplicate(nums));
```

先排序，然后遍历一遍就好了。





#### 只出现一次的数字

给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。（题目来源：leetcode）

示例1

> 输入：nums = [2,2,1]
> 输出：1

示例2

> 输入：nums = [4,1,2,1,2]
> 输出：4



示例3

> 输入：nums = [1]
> 输出：1





题解代码

```javascript
nums = [4,1,2,1,2];
var singleNumber = function(nums) {
    result = 0;
    for(let i=0;i<nums.length;i++){
        result = result ^ nums[i];
    }
    return result;
};
console.log(singleNumber(nums));
```

使用异或运算，将所有值进行异或
异或运算，相异为真，相同为假，所以 a^a = 0 ，0^a = a
因为异或运算 满足交换律 a\^b^a = a\^a^b = b 所以数组经过异或运算，单独的值就剩下了









#### 两个数组的交集

给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。（题目来源：leetcode）

示例1

> 输入：nums1 = [1,2,2,1], nums2 = [2,2]
> 输出：[2,2]

示例2

> 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
> 输出：[4,9]



题解代码

```javascript
nums1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
nums2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]

var intersect = function(nums1, nums2) {
    // nums1.sort();
    // nums2.sort();
    nums1.sort((a,b)=>{
        return a-b;
    })
    nums2.sort((a,b)=>{
        return a-b;
    })
    let nums3 = [];
    var len1 = nums1.length;
    var len2 = nums2.length;
    let i=0,j=0; 
    while(i<len1 && j<len2){
            if(nums1[i]===nums2[j]){
                nums3.push(nums1[i]);
                i++;
                j++;
            }
            else {
                nums1[i]<nums2[j]?i++:j++;
            }
    }
        return nums3;
};
console.table(intersect(nums1,nums2));
```

使用双指针的方法来解决的。

这里有一个小细节，使用`nums.sort()`和使用 `nums1.sort((a,b)=>{return a-b;})`的返回结果似乎并不一样。











#### 加一

给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。

示例1

> 输入：digits = [1,2,3]
> 输出：[1,2,4]
> 解释：输入数组表示数字 123。

示例2

> 输入：digits = [4,3,2,1]
> 输出：[4,3,2,2]
> 解释：输入数组表示数字 4321。

示例3

> 输入：digits = [0]
> 输出：[1]



题解代码：

```javascript
digits = [9,9,9,9];
var plusOne = function(digits) {
    digits[digits.length-1] += 1;
    for(let i=1;i<digits.length;i++){
        if(digits[digits.length-i]>9){
            digits[digits.length-i]-=10;
            digits[digits.length-i-1]+=1;
        }
    }
    if(digits[0]>9){        //特判，最高位进一
        digits[0]-=10;
        digits.unshift(1);
    }
    return digits;
};
result = plusOne(digits);
console.log(result);
```

这题的思路和高精度一样，模拟进位就可以了。











#### 移动零

给定一个数组 `nums`，编写一个函数将所有 `0` 移动到数组的末尾，同时保持非零元素的相对顺序。

**请注意** ，必须在不复制数组的情况下原地对数组进行操作。

示例1

> 输入: nums = [0,1,0,3,12]
> 输出: [1,3,12,0,0]

示例2

> 输入: nums = [0]
> 输出: [0]





题解代码

```javascript
nums = [0,0,1];
var moveZeroes = function(nums) {       //不能够正着扫，会出现漏扫的情况，例如[0,0,1]
    for(let i=nums.length-1;i>=0;i--){
        if(nums[i]===0){
            nums.splice(i,1);
            nums.push(0);
        }
    }
    return nums;
};
result = moveZeroes(nums);
console.log(result);
```

这里直接模即可，扫一遍，把0删除，然后在末尾插入。全部使用js的内置函数。需要注意不能正着扫，会出现漏扫的情况，例如[0,0,1]这种就会出现错误，输出结果是[0,1,0]。









#### 两数之和

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

示例1

> 输入：nums = [2,7,11,15], target = 9
> 输出：[0,1]
> 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

示例2

> 输入：nums = [3,2,4], target = 6
> 输出：[1,2]

示例3

> 输入：nums = [3,3], target = 6
> 输出：[0,1]



题解代码1

```javascript
nums = [3,2,4];
target = 6;
var twoSum = function(nums, target) {
    result = [];
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
            result.push(i);
            result.push(j);
            return result;
        }
    }
}
}
result = twoSum(nums,target);
console.log(result);
```

这是使用两遍for循环暴力解的，效率很低。







#### 旋转图像

给定一个 n × n 的二维矩阵 matrix 表示一个图像。请你将图像顺时针旋转 90 度。

你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。

示例1

![img](https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg)

> 输入：matrix = [[1,2,3],[4,5,6],[7,8,9]]
> 输出：[[7,4,1],[8,5,2],[9,6,3]]



示例2

![](https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg)

> 输入：matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
> 输出：[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]



题解代码：

```javascript
matrix = [[1,2,3],[4,5,6],[7,8,9]];
var rotate = function(matrix) {
    //先上下交换
    for(let i=0;i<matrix.length/2;i++){
        temp = matrix[i];
        matrix[i] = matrix[matrix.length-i-1];
        matrix[matrix.length-i-1] = temp;
    }
    //再对角线交换
    for(let i=0;i<matrix.length;++i){
        for(let j=i+1;j<matrix.length;++j){
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;

        }
    }
    return matrix;
}

result = rotate(matrix);
console.log(result);
```

解题思路就是先上下交换，然后再对角线交换。有点找规律的感觉。当然也可以模拟。具体图示见leetcode











### 字符串



#### 反转字符串

编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。

不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。

示例1

> 输入：s = ["h","e","l","l","o"]
> 输出：["o","l","l","e","h"]

示例2

> 输入：s = ["H","a","n","n","a","h"]
> 输出：["h","a","n","n","a","H"]

题解代码

```javascript
let s = "abcdefg";
var reverseString = function(s) {
    let len = s.length;
    let left = 0, right = len - 1;
    while(left < right) {
      [s[left++], s[right--]] = [s[right], s[left]]
    }
  };
```

采用双指针的方法交换赋值。





#### 整数反转

给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。

如果反转后整数超过 32 位的有符号整数的范围 [−231,  231 − 1] ，就返回 0。

假设环境不允许存储 64 位整数（有符号或无符号）。

示例1

> 输入：x = 123
> 输出：321

示例2

> 输入：x = -123
> 输出：-321

示例3

> 输入：x = 120
> 输出：21

示例4

> 输入：x = 0
> 输出：0



题解代码：

```javascript
let x = 1563847412;
var reverseNum = function(x){
    let res = 0;
    let maxValue = Math.pow(2,31)-1;
    let minValue = maxValue * (-1);
    while (x!=0){
        res = res *  10 + parseInt(x%10);
        if(res>maxValue||res<minValue) return 0;
        x = parseInt(x/10);		//这里使用parseInt是因为js的除法默认会保留小数
    }
    return res;
}
let result = reverseNum(x);
console.log(result);
```









#### 字符串中的第一个唯一字符

给定一个字符串 `s` ，找到 *它的第一个不重复的字符，并返回它的索引* 。如果不存在，则返回 `-1` 。

 示例1

> 输入: s = "leetcode"
> 输出: 0

示例2

> 输入: s = "loveleetcode"
> 输出: 2

示例3

> 输入: s = "aabb"
> 输出: -1



题解代码

```javascript
s = "loveleetcode";
var firstUniqChar = function(s) {
    for(let i=0;i<s.length;i++){
        if(s.indexOf(s[i])===s.lastIndexOf(s[i]))
            return i;
    }
    return -1;
};
result = firstUniqChar(s);
console.log(result);
```

JavaScript 解法
只要第一个和最后一个的索引一致，那肯定是只有这个是对的了







#### 有效的字母异位词

有效的字母异位词
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

示例1

> 输入: s = "anagram", t = "nagaram"
> 输出: true

示例2

> 输入: s = "rat", t = "car"
> 输出: false



题解代码：

```javascript
s = "rat";
t = "car";
var isAnagram = function(s, t) {
    let Slen = s.length;
    let Tlen = t.length;
    if(Slen!==Tlen){;return false;}
    for(let i=0;i<Tlen;i++){
      t=t.replace(s[i],'');
    }
    if(t.length==0) {;return true;}
    return  false;
};
result = isAnagram(s,t);
console.log(result);
```

这里使用了一个简单的方法，先统计长度，如果长度不同，那一定不等。然后使用`repalce`方法排除相同的字符，如果最后长度归0，那么满足条件。









#### 验证回文串

如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。

字母和数字都属于字母数字字符。

给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。

示例1

> 输入: s = "A man, a plan, a canal: Panama"
> 输出：true
> 解释："amanaplanacanalpanama" 是回文串。

示例2

> 输入：s = "race a car"
> 输出：false
> 解释："raceacar" 不是回文串。

示例3

> 输入：s = " "
> 输出：true
> 解释：在移除非字母数字字符之后，s 是一个空字符串 "" 。
> 由于空字符串正着反着读都一样，所以是回文串。



题解代码：

```javascript
s = "A man, a plan, a canal: Panama";
var isPalindrome = function(s) {
    let format = s.replace(/[^A-Za-z0-9]/gi,'').toLowerCase().split('');
    return format.join('') === format.reverse().join('')
};
result = isPalindrome(s);
console.log(result);
```

先匹配出数组里的字母然后转换成小写，然后使用`join()`方法将数组转换成字符串，判断是否相等。

这里贴一些`join`方法：

> **作用：**
> 用于把数组中的所有元素放入一个字符串中，元素通过指定的分隔符进行分割。
> arrayObject.join(separator);默认是用逗号做分隔符

> **返回值：**
> 返回一个字符串，该字符串是通过把arrayObject的每个元素转换为字符串，然后把这些字符串连接起来，在两个元素之间插入separator字母串而生成的。

示例

```javascript
var arr = new Array(3);
arr[0] = "George"
arr[1] = "John"
arr[2] = "Thomas"

document.write(arr.join()); // George,John,Thomas

document.write(arr.join("."));	//George.John.Thomas
```











#### 字符串转整数

请你来实现一个 myAtoi(string s) 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 atoi 函数）。

函数 myAtoi(string s) 的算法如下：

读入字符串并丢弃无用的前导空格
检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。
读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。
将前面步骤读入的这些数字转换为整数（即，"123" -> 123， "0032" -> 32）。如果没有读入数字，则整数为 0 。必要时更改符号（从步骤 2 开始）。
如果整数数超过 32 位有符号整数范围 [−231,  231 − 1] ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 −231 的整数应该被固定为 −231 ，大于 231 − 1 的整数应该被固定为 231 − 1 。
返回整数作为最终结果。
注意：

本题中的空白字符只包括空格字符 ' ' 。
除前导空格或数字后的其余字符串外，请勿忽略 任何其他字符。

示例1

> 输入：s = "42"
> 输出：42
> 解释：加粗的字符串为已经读入的字符，插入符号是当前读取的字符。
> 第 1 步："42"（当前没有读入字符，因为没有前导空格）
>       ^
> 第 2 步："42"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
>       ^
> 第 3 步："42"（读入 "42"）
>         ^
> 解析得到整数 42 。
> 由于 "42" 在范围 [-231, 231 - 1] 内，最终结果为 42 。

示例2

> 输入：s = "   -42"
> 输出：-42
> 解释：
> 第 1 步："   -42"（读入前导空格，但忽视掉）
>          ^
> 第 2 步："   -42"（读入 '-' 字符，所以结果应该是负数）
>           ^
> 第 3 步："   -42"（读入 "42"）
>             ^
> 解析得到整数 -42 。
> 由于 "-42" 在范围 [-231, 231 - 1] 内，最终结果为 -42 。

示例3

> 输入：s = "4193 with words"
> 输出：4193
> 解释：
> 第 1 步："4193 with words"（当前没有读入字符，因为没有前导空格）
>       ^
> 第 2 步："4193 with words"（当前没有读入字符，因为这里不存在 '-' 或者 '+'）
>       ^
> 第 3 步："4193 with words"（读入 "4193"；由于下一个字符不是一个数字，所以读入停止）
>           ^
> 解析得到整数 4193 。
> 由于 "4193" 在范围 [-231, 231 - 1] 内，最终结果为 4193 。



题解代码：

```javascript
s = " -4193 with words";
var myAtoi = function(s) {
    let maxValue = Math.pow(2,31)-1;
    let minValue = maxValue*(-1)-1;
    if(isNaN(Number.parseInt(s))){
        return 0;
    }
    else{
        let temp = Number.parseInt(s);
        if(temp>maxValue) return maxValue;
        else if(temp<minValue){
            return minValue;
        }
        return temp;
    }
};
result = myAtoi(s);
console.log(result);
```

这题没有采用复杂的解法，直接使用了`js`的内置函数`parseInt`来解决。parseInt() 函数可解析一个字符串，并返回一个整数。具体方法可以参考这里：[JavaScript parseInt() 函数 | 菜鸟教程 (runoob.com)](https://www.runoob.com/jsref/jsref-parseint.html)。

后续就是对返回的内容进行判断了。





#### 实现strStr()

给你两个字符串 haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。如果 needle 不是 haystack 的一部分，则返回  -1 。

示例1

> 输入：haystack = "sadbutsad", needle = "sad"
> 输出：0
> 解释："sad" 在下标 0 和 6 处匹配。
> 第一个匹配项的下标是 0 ，所以返回 0 。

示例2

> 输入：haystack = "leetcode", needle = "leeto"
> 输出：-1
> 解释："leeto" 没有在 "leetcode" 中出现，所以返回 -1 。



题解代码

```javascript
haystack = "leetcode";
needle = "leeto";
var strStr = function(haystack, needle) {
    return haystack.search(needle);
};
result = strStr(haystack,needle);
console.log(result);
```

本题的官方推荐解法是使用KMP算法，这里先不用，直接使用js的`search`方法来解决。

search() 方法用于检索字符串中指定的子字符串，或检索与正则表达式相匹配的子字符串。返回匹配对象在检索字符串中的起始位置，如果没有找到任何匹配的子串，则返回 -1。







#### 最长公共前缀

编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 `""`。

示例1

> 输入：strs = ["flower","flow","flight"]
> 输出："fl"

示例2

> 输入：strs = ["dog","racecar","car"]
> 输出：""
> 解释：输入不存在公共前缀。



题解代码：

```javascript
strs = ["flower","flow","flight"];
var longestCommonPrefix = function(strs) {
    if (strs == null || strs.length == 0)
        return "";
    //默认第一个字符串是他们的公共前缀
    let pre = strs[0];
    let i = 1;
    while(i<strs.length){
        //不断的截取
        while(strs[i].indexOf(pre)!==0){
            pre = pre.substr(0,pre.length-1);
        }
        i++;
    }
    return pre;
};
result = longestCommonPrefix(strs);
console.log(result);
```

先取第一个字符串当做他们的公共前缀

然后找出他和第2个字符串的公共前缀，然后再用这个找出的公共前缀分别和第3个，第4个……判断





















### 栈

#### 一个简单的栈结构

栈是一个先进后出的的一个结构。下面是一个用数组模拟的简单的栈结构：

```javascript
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

```

注意第二行的`constructor()`方法。

constructor() 方法是一种特殊的方法(构造方法)，用于创建和初始化在类中创建的对象。

创建对象时会自动调用构造方法 constructor()。

如果没有显式指定构造方法，则会添加默认的 constructor 方法。

如果不指定一个构造函数 (constructor) 方法，则使用一个默认的构造函数 (constructor)。

在一个构造方法中可以使用 super 关键字来调用一个父类的构造方法。







#### JavaScript对象的Stack类

这里改版并不大，只是在上面的stack类基础上添加了一个`count`元素统计栈元素的个数。`Stack`类结构如下：

```javascript
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
```

在数组版本中，我们不需要关心 toString 方法的实现，因为数据结构可以直接使用数组已经提供的 toString 方法。对于使用对象的版本，我们将创建一个 toString 方法来像数组一样打印出栈的内容。

如果栈是空的，我们只需返回一个空字符串即可。如果它不是空的，就需要用它底部的第一个元素作为字符串的初始值（行{1}），然后迭代整个栈的键（行{2}），一直到栈顶，添加一个逗号（,）以及下一个元素（行{3}）。如果栈只包含一个元素，行{2}和行{3}的代码将不会执行。





#### 十进制转二进制

借助栈结构，可以轻松的实现这一功能（不过个人觉得把计算完之后把数组倒着输出也差不多）。

```javascript
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

decimalToBinary = function(decimaNum){
    const remStack = new Stack();
    let num = decimaNum;
    let rem;
    let binaryString = '';
    while(num>0){
        rem = num%2;
        remStack.push(rem);
        num = parseInt(num/2);
    }
    while(!remStack.isEmpty()){
        binaryString += remStack.pop().toString();
    }
    return binaryString;
}
result = decimalToBinary(1000);
console.log(result);
```





#### 任意进制转换

可以将输入的值转换成指定进制，只需要在原来代码上修改少许代码即可

```javascript
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
```

在将十进制转成二进制时，余数是 0 或 1；在将十进制转成八进制时，余数是 0～7；但是将十进制转成十六进制时，余数是 0～9 加上 A、B、C、D、E 和 F（对应 10、11、12、13、14 和 15）。因此，我们需要对栈中的数字做个转化才以。因此，从十一进制开始，字母表中的每个字母将表示相应的基数。字母 A 代表基数 11，B 代表基数 12，以此类推。









### 队列

一个简单的队列结构

队列是遵循先进先出（FIFO，也称为先来先服务）原则的一组有序的项。队列在尾部添加新元素，并从顶部移除元素。最新添加的元素必须排在队列的末尾。

下面是创建一个简单的队列结构并使用。

```javascript
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

const quene = new Quene();
console.log(quene.isEmpty());
quene.enquene('John');
quene.enquene('Jack');
console.log(quene.toString()); // John,Jack
quene.enquene('Camila');
console.log(quene.toString()); // John, Jack, Camila
console.log(quene.size()); // 输出 3
console.log(quene.isEmpty()); // 输出 false
quene.dequene(); // 移除 John
quene.dequene(); // 移除 Jack
console.log(quene.toString()); // Camila
```

 第39行的`toString`函数，在 Stack 类中，我们从索引值为 0 开始迭代 items 中的值。由于 Queue 类中的第一个索引值不一定是 0，我们需要从索引值为 lowestCount 的位置开始迭代队列。
