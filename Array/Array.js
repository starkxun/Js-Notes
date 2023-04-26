// 创建一个数组
a = [4,7,8,9,2,1,0,5,22,10];



// 遍历循环打印这个数组
for(var i=0;i<a.length;i++){
    console.log(a[i]);
}



// 使用split生成数组
x = "fuck everyon,just ruin";
y = x.split(" ");
for(var i=0;i<y.length;i++){
    console.log("y "+i+": "+y[i]);
}



// 浅复制（将一个数组赋值给另一个数组）
b = a;
console.log("b[1] is:"+b[1]);
a[1] = 55;
console.log("b[1] is:"+b[1]);



// 深复制（将一个数组赋值给另一个数组）
function copy(x,y){
    for(var j=0;j<x.length;j++){
        y[j] = x[j];
    }
}
c=[];
copy(a,c);
console.log("c[1] is:"+c[1]);
a[1] = 78;
console.log("c[1] is:"+c[1]);



//在数组末尾添加元素
a[a.length] = 100;      //使用下标添加
a.push(101);            //使用push方法添加
a.push(102,103,104)     //向末尾添加元素102，103，104
console.log(a);



//在数组开头添加元素（先前每个元素都向后移一位）
a.unshift(0,0,0);       //向数组开头添加元素0，0，0
console.log(a);



//在数组的末尾删除元素
a.pop();        //删除数组末尾最后一个元素


//删除数组开头的第一个元素
a.shift();



// 在任意位置添加或删除元素（使用splice方法）
a=[1,2,3,4,5];
a.splice(1,3);      //删除从下标1开始的3个元素
console.log(a);



// 在任意位置添加或删除元素（使用splice方法）
a.splice(1,0,6,6,6);      //从下标1开始，删除元素的个数为0，后面的参数为要添加的元素
console.log(a);



//多维数组
//创建一个二维数组（方法一）
ArrayObj_1 = new Array(new Array(),new Array());    //传递两个Array构造函数到参数中
//创建一个二维数组（方法二）
ArrayObj_2 = new Array([],[]);  //传递两个Array表达式到参数中 
//创建一个二维数组（方法三）
ArrayObj_3 = new Array();
for(var i=0;i<5;i++){
    ArrayObj_3[i] = new Array();    //在每一个数组元素内再定义一个数组 
}
//创建一个二维数组（方法四）
ArrayObj_4 =[[],[]];    //最简单的方法




//数组赋值
//方法一，直接赋值
ArrayObj_4[1][1] = 10;
//方法二（在初始化数组的时候赋值）
ArrayObj_5 = [];
for(let i=0;i<5;i++){
    ArrayObj_5[i] = [];     //需要初始化，否则会报错
    for(let j=0;j<5;j++){
        ArrayObj_5[i][j] = i+j;
    }
}
console.table(ArrayObj_5);




//数组合并（可以使用遍历的方式合并，这里直接使用内置函数）
Array_1 = [1,2,3,4,5];
Array_2 = ['a','b','c','d','e','f'];
Array_3 = Array_1.concat(Array_2);      //合并Array_1和Array_2的内容到Array_3
console.log(Array_3);




//迭代器
//下面两个函数是等价的
const isEven_1 = x => x%2===0;        
function isEven_2(x){
    return x%2 === 0 ? true:false;	//也可以写成 return x%2 === 0;
}




//every迭代器
a = []
for(let i=0;i<10;i++){
    a[i] = i+1;
}
if(!a.every(isEven_1)){
    console.log("No");  //因为第一个数是1,不满足条件，所以结束迭代
}



//some迭代器（some迭代器和every迭代器相反，满足条件时结束迭代）
b = []
for(let i=0;i<10;i++){
    b[i] = i+2;
}
if(b.some(isEven_1)){
    console.log("Yes");  //因为第一个数是2,满足条件，所以结束迭代
}

//forEach迭代器
a = [];
for(let i=0;i<15;i++){
    a[i] = i+1;
}
a.forEach(
    function (item){		//item为下标，可以u自定义名称
        if(a[item]%2===0) console.log(a[item]);
    }
);  


//不换行输出
// process.stdout.write()