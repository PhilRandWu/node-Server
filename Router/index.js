/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-02 22:28:11
 * @LastEditTime: 2022-04-11 21:53:22
 * @LastEditors: PhilRandWu
 */
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// 静态资源
const staticRoot = path.resolve(__dirname, '../Public');
app.use(express.static(staticRoot));

// cors 跨域
// app.use(require('./middleWare/corsMiddleWare')); // 手写

// 第三方库
const whiteList = ['http://127.0.0.1:5500', 'null'];
app.use(cors({
    origin(origin, callback) {
        if (whiteList.includes(origin)) {
            callback(null, origin);
        } else {
            callback(new Error("not allowed"));
        }
    }
}))

// 加入cookie-parser 中间件
// 加入之后，会在req对象中注入cookies属性，用于获取所有请求传递过来的cookie
// 加入之后，会在res对象中注入cookie方法，用于设置cookie
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// 应用token中间件
app.use(require('./middleWare/tokenMiddleware'));

// 处理请求体
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('hello!');
})

// api
app.use('/api/student', require('./api/student'));
app.use('/api/admin', require('./api/admin'));

// 错误处理中间件
app.use(require('./middleWare/errorMiddleWare'));

const port = 5005;
app.listen(port, () => {
    console.log(`Server listen on ${port}`)
})
