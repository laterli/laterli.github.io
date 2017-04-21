###canvas相关笔记
    在body里加入标签canvas class可以设置边框等，不能设置画布大小以及里边的内容
    var canvas=document.querySelector('canvas')
    convas.width=n;
    convas.height=m;设置画布大小，
    var context=canvas.getContext('2d')设置成2d或3d

    绘制直线用context.moveTo(m,n)移动光标到m,n的位置
        context.lineTo(x,y)从m,n到x,y画一条直线
        context.lineWidth=5;设置线宽
        context.strokeStyle='red';设置线条颜色
        context.storke();渲染

    闭合context.beginPath();
    context.moveTo(100,100);
    context.lineTo(100,300);
    context.lineTo(300,300);
    context.fillStyle=#f00;填充颜色
    context.stroke();
    context.closePath();

    矩形context.rect(x,y,width,height)矩形
    context.fillRect(x,y,width,height) 不能加边框
    context.strokeRect(x,y,width,height)只有边框

    园context.arc(500,500,500,0,Math.PI*2,true)园
    (x,y,r,0,PI,方向(顺时针或逆时针))
    PI=(Math.PI)半圆

    渐变色 var grd=context.createLinearGradient(0,0,800,800)直线渐变色方向
    grd.addColorStop(0.0,'red')开始颜色
    grd.addColorStop(1.0,'green')结束颜色
    canvas.fillStyle=grd;   填充渐变颜色
    context.fillRect(0,0,900,900)矩形大小

    径向渐变色var grd=
    context.createRadialGradient(400(x),400(y),0(r),400(x),400(y),400(r))
    grd.addColorStop(0.0,'red')开始颜色
    grd.addColorStop(1.0,'green')结束颜色
    canvas.fillStyle=grd;   填充渐变颜色
    context.fillRect(0,0,900,900)矩形边框大小
 
     插入图片：var bgi=new Image();
    bgi.src="路径";
    bgi.onload=function(){
        context.fillStyle=context.createPattern(bgi,'repeat(重复)或者no-repeat(不重复)')填充背景图片
        context.fillRect(0,0,800,800)设置矩形大小
    }

    用for循环制作100个大小不一的园时所有样式都要在循环里这样才能保证每个都不一样

    context.font='bold 50px Airal'(粗体 50像素 字体)
    context.fillStyle=grd(设置渐变色文字)
    context.fillstyle=pattern(设置图片文字)
    context.fillText('文字',x,y)填写文字以及文字位置
    fillText是实体颜色文字
    strokeText是空心文字
    italic 斜体
    small-caps 英文文字变成大写，都写在bold前

    弧线：arcTo:moveTo()移动光标到一个点
    arcTo(x,y,x,y,r)关键点，终止点，半径

    文字排版：textAlign='right'||textAlign='center'||textAlign='left'
            fillText('text',x,y)x不变y变
            textBaseline='top'|| textBaseline='middle'|| textBaseline='bottom'
            fillText('text',x,y)x不变y变

    非零环绕原则：不等于零在内部，等于零在外部；

    阴影：shadowColor='颜色'；
    shadowOffsetX=n;    X轴移动
    shadowOffsetY=n;    Y轴移动
    shadowBlur=m;设置阴影模糊程度

    移动:碰撞条件，if语句，碰到Y轴的墙以后y不变继续加，x的递加变成负的
    碰到X轴的墙以后x不变继续加，y的递加变成负的

    clip()以后写的内容都会覆盖只露出clip到beginPath之间的内部的内容
    例如探照灯原理

    获取键盘按键,addEventListener('keydown',参数)//获取按键编号
    function num(){
        console.log(e.chich||e.keyCode)
    }               谷歌      IE

    Math.pow(底数，指数)底数的指数次幂
    rotate旋转
    addEventListener()获取时间监听

    function 变量(e){
        var x=e.clientX;            在后边加canvas.getBoundingClientRect().left
        var y=e.clientY;                                                  .top
        console.log(x,y)输出的是鼠标屏幕左上为0,0的坐标   画布左上为0,0的坐标
    }

    isPointInPath(x,y)坐标(x,y)在路径内返回true否则返回false

    

