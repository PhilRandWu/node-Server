/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-02 22:28:11
 * @LastEditTime: 2022-04-10 14:02:03
 * @LastEditors: PhilRandWu
 */
const express = require('express');
const path = require('path');

const app = express();

// 静态资源
const staticRoot = path.resolve(__dirname, '../Public');
app.use(express.static(staticRoot));

// 处理请求体
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) => {
    res.send('hello!');
})

app.get('/err',(req,res,next) => {
    next(new Error('123'))
})

// 错误处理中间件
app.use(require('./middleWare/errorMiddleWare'));

const port = 5005;
app.listen(port, () => {
    console.log(`Server listen on ${port}`)
})
