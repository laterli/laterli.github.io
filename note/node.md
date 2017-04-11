###node的相关笔记
1. npm install -g http-server  *下载的是全局模块 -g是全局环境的意思*
2. 访问本地用127.0.0.1
3. module.exports=函数*暴露接口*
4. var 变量=require('/要引入的文件名')
5. req   是客户端给服务器的请求。
6. res   是服务器给客户端的响应。
7. send  发送 *res.send(内容)  给浏览器发送响应*
9. npm install express  *下载局部模块  一下为局部模块的应用*
10.  node 文件名  *启动服务器*
11. 每次改变服务器内容都要重启服务器才可以在页面中显示
12. var express=require('express') *调用外部局部模块*
13. var app=express() *使用这个模块*
14. app.get('/',function(rep,res){
15.       res.send('内容')
17.    })       *响应客户端请求给客户端发送内容*
14. app.listen(8080) *给服务器取名，访问输入此数字*
15. npm install --save-dev express   把下载的文件在package.json中显示，
16. package.json  文件夹管理项目依赖，里边装的都是项目，
17. .gitignore   文件写要忽略的文件。
18. 路由----请求方法get或post
19.     ----路径（url）
20. url://ip:端口?参数#锚点
21. http://192.168.3.99:8080?username..?id
22. ajxa----在不刷新页面的情况下加载部分网页的内容
23. get的请求参数写在url里，再浏览器能直接看到
24. post的请求参数不写在url里，适合有在注册登录账号等
25. 在jade中的标签中加入method=“ ”变更get活在post的请求
26. public  文件夹放静态文件：html，css，图片，等
27. views   文件夹放jade的文件，视图，
28. 为jade加需要在server文件夹中加入app.set('view engine','jade')
29. app.render(' ')渲染的内容
30. npm init 建立一个package.json文件
31. var bodyparser=require("body-parsser") *这行代码是引入*
32. app.use(bodyparser.urlencoded({extended:false}))
        *这行代码使用bodyParser*
33. block content 继承或使用继承
34. extends 被继承的页面 成为它的子页
35. 在jade里写入-后边可以写js
36. each 变量 in 内容  jade里的循环