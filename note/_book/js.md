###js的笔记
1. 循环语句包括while和for使用方法如下
2. var i = 0;
        while(i<10){        //只能输入布尔值，对或者错
            console.log(i);
            i++;
        }
3. for(var i=0;i<10;1++){   //输入条件，方法
            console.log(i)
        } 
4. 控制语句包括if和switch使用方法如下
5.  num=input(数值)
6.  op=span(+-/*)
6.  num1=input(数值)
    if(op="+"){ 
        console.log(num+num1)
     }else if(op="-"){
        console.log(num-num1)
     }   以此类推
7. num=input
    op=span
    num1=input
    switch(op){
    case:"+"=console.log(num+num1);break
    case:"-"=console.log(num-num1);break
    }           //以此类推
8. 获取或者改变html中的文本使用：文本.innerHTML=改变后的内容
9. 建立一个数组用var 变量=['内容','内容',以此类推]
    使用   变量.length可以获取数组中的数量
10. Math为数学对象Math.floor(Math.random()*n+m)
11.    Math.floor是向下取整，Math.random是在0-1之间取一个随机数
12.    那么Math.floor(Math.random()*n+m)是在m-n之间取一个随机数
13. 日期对象使用var datenow=new Date();构造一个函数new用来构造函数
14.             var date=datenow.gitDate  //日
15.             var date=datenow.gitDay   //星期
16.             var date=datenow.gitFullYear  //年
17.             var date=datenow.gitMonth  //月
18.             console.log(date)//直接输出datenow会显示年月日时分秒详细时间
19. 数据类型包括数字，布尔值，null，字符串，undefined,对象
20. 获取节点用document.querySelector('.选择器')
21. function 形参(n,m){
22.     console.log(n+m)    建立一个函数不输出
    }
    实参(x,y)         输出这个函数，形参和实参是一样的写法
23. 返回值用return
24.     function fun(){
25.     return m            返回m
26.     }
27. setInterval每隔n毫秒动一次
28. audio   是音频标签
    audio:play;   播放音乐
    audio:pause;   暂停音乐
29. video    是视频标签
30. Object  是对象
31. Array   是数组
32. dom   是文档对象模型
33. bom    是浏览器对象模型
34. 三目运算符   n = n === x ? y : z
                变量 变量     ture  flase
35. location.href=' 网址 '   跳转到指定网址
36. onmouserenter    移入事件
37. onmouseleave    移出事件
38. onmousemove      移动事件
39. 函数外部不能访问函数内部的变量，函数内部可以调用外部的函数
40. script下级变量都是全局变量，
41. 如果声明一个函数不用var，那么这个函数就是全句对象
42. if语句没有作用域
43. 引用类型变传参，形参也变
44. // var sty1='hello'
        // var sty2=sty1
        // sty1='world'
        // console.log(sty1)
        // console.log(sty2)   
        //原始类型改变sty1把w覆盖h
45. function fun(){
            x=100;
            return x
        }
        console.log(fun())
        调用返回值
46. !==   不等于
47. dom.parentNode   //获取元素父级
48. dom.children    //获取元素子级
49. arr=str.split(' ')*把str的字符串拆成数组*
50. str=arr.join(' ')*把数组变成字符串*
51. arr.push()  *把括号内的内容添加进arr的数组里*
52. arr.splice(n,m,x)*在第n个元素开始删除m个并替换成x*
53. dom=document.createElement('dom')*添加一个dom*
54. 元素.appentChild() *把括号内内容添加进html的元素里*
55. event  *时间对象*
56. event.target   *操作距离鼠标指针最近的元素*
57. 参数.stopPropagation *阻止事件冒泡*
58. dom.addEventListener('动作'，函数)  *添加一个独立的事件*
59. 