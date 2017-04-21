###echart笔记
    做图表的工具
    根据官方案例原型进行更改，具体操作查文档，有饼状图，线图等

    遍历json里的文件内容$.get("data/mapData.json").done(function(data){
            var arrData = []            data为传入文件内容
            $.each(data,function(i){    便利data
                var grood = geoData[data[i].name];  
                arrData.push({
                    name:data[i].name,
                    value:grood.concat(data[i].value)
                })
                console.log(grood)
            })
            option.series.data = arrData;   把arrData赋值给option的data
            myChart.setOption(option);         这是个地图上标
        })

        symbolSize:设置标记大小，在散点图里的；内部可调用函数