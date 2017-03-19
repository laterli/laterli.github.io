# css的笔记
1.  div:hover{
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
2.  clear:both; 清浮动放在css里，放在浮动元素的后面的元素。
3.  button 为按钮标签
4.  