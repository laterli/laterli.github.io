###cookie
    1 cookie是记录登陆状态的同时可及保持登陆状态 写在浏览器安全性较低 cookie-parser

    2 session写在服务器，浏览器中看不见，express-session
     app.use(session({
        secret:'string', <!-- 设置保密 -->
        cookie:{
            expires:new Date('2017/4/16')
            maxAge:n*1000--n秒后
        }
    }))