###sass相关笔记
    sass文件目录必须英文父级，祖先级也是

    sass内设置变量要用$如：$color:red,blue,green;

    在文件夹中建立文件夹sass和style  sass里放scss文件  style里放css文件

    在命令符内输入：
    sass sass/文件.scss style/文件.css   把scss文件与css文件链接并且生成css文件
    sass --watch sass/文件.scss:style/文件.css  监视sass与css文件
    --style extended    css文件扩展
    --style compressed   css文件压缩

     font:{
        size：20px；
        width：100；
    }

    sass是种弱语言
    在加入逻辑语句时要加@符号
    for $i form 1 through 5{
        选择器#{$i}{
            color:nth($color,$i);      nth($变量,n)可以用变量里的第n元素
        }
    }

    &:hover{
        bgc:red;        &可以找到它的父级
    }

    宏
    @mixin 变量(default){
        属性：属性值；
    }               建立宏
    @include 变量(default);   引用宏
    同时变量了可以加入参数进行传参
    @mixin default($width){
        color:red;
        font-size:$width;       设置参数和js中函数   
    }
    @include default(50px)       调用并传入参数

    继承：
    .box{
        color:red;              父级设置box的属性 把.box换成%box可以节省代码量
    }
    button{
        @extend .box;           继承box的属性   同时这边也要换成%box
    }

    其他与css区别不大；

