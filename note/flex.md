###flex相关笔记
    设立弹性盒子  display:flex;
                  display:-webkit-flex;两个一起写兼容

    在父级flex-direction:row;主轴
                        row-reverse;主轴反方向
                        column;交叉轴
                        columu-reverse;交叉轴反方向

    在父级flex-wrap:nowrap;不换行(默认)
          flex-wrap:wrap;换行
          flex-wrap:wrap-reverse;反方向

    html,body{
            height: 100%;   可以全屏
        }

    justify-content:center;子级居中
                    flex-start;左
                    flex-end;右
                    space-between;等分
                    space-around;等分再居中

    align-items:stretch;填充
                flex-start;从上开始 
                flex-end;底部开始
                center;中间
                baseline;   内容第一行对齐

                放大倍数    缩小倍数    
    默认：     flex-grow=0  flex-shrint=1  flex-basis=auto(自动)
    flex:1;         1           1               0%
    flex:none;      0           0               auto
    flex:0;         0           0               0%
    非负数         非负数       1               0%
    n%              1           1               n%
    n px            1           1               n px




