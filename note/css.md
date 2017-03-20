# css的笔记
1.  div:hover{      hover为伪类选择器；鼠标悬浮所表现的状态
        animation-play-state: paused;
     } 设置鼠标悬停
    @keyframes turn{
        from{
            transform: translateX(0px);(这里可以改变为ratate动画效果为转圈
        }                               改为scale动画效果为缩放)
        to{
            transform: translateX(5222px); (from to 可以设置为百分比)
        }
     }
     div{
        animation: turn 20s linear infinite;
     }设置动画从0的位置到5222位置，时间为20s linear为匀速 infinite为无限循环
     turn为动画名字可以随便取
2.  clear:both; 清浮动放在css里，放在浮动元素的后面的元素。
3.  button 为按钮标签     
4.  树状结构html--head----meate+tital
5.                body----header
6.                    ----banner
7.                    ----container
8.                    ----footer
9.          nav 菜单， inner女儿
10.         块元素会占父元素的100%
11. 水平居中text-align：center;
12. 垂直居中line-height：npx；
13. --pasition-relative;    原来的位置--相对于自身进行定位
14. --left:npx; right:npx;  不脱离文档流--他的位置还在
15. ==pasition-absolute;  绝对定位从网页的（0.0）开始
16. ==left:npx; top:npx;  脱离文档流
17. ++pasition:fixed;    固定定位相对于窗口
18. ++left:npx; top:npx; 脱离文档流
19. z-index  锤子堆叠顺序
20. 在没有position等位时不允许用z-index
21. 父元素定位position:relative;
22. 子元素定位position:absolute;
23. 3d效果{
24.        在父子集中加入persepective:npx;视觉距离
25.        在父子集中加入transform-style:preserve-3d给子集一个3d效果}
26.        在子集中加入backface-visibility:hidden;当在背面时隐藏
27. transform-origin:center;定圆心居中 或者center可以为(npx npx）的形式
28. 访问本地电脑{127.0.0.1:4000} 
29. 表单标签input 会出现一个可以编写的输入框
30.         placeholder="内容"此中内容为虚的字
31. list-style:none; 去除ul>li中的点
32. float:left;向左浮动 浮动式不占位的
33.         在要其下边的盒子里加入clear：both；可以清除上边的浮动
34. background-repeat:no-repeat; 可以让背景图片不重复
35. margin:0px auto;  块状元素的居中