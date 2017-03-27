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
29. video    是视频标签