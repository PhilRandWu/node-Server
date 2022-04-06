/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-02 22:28:11
 * @LastEditTime: 2022-04-06 14:54:05
 * @LastEditors: PhilRandWu
 */
const express = require('express');
const path = require('path');

const app = express();

// 静态资源
const staticRoot = path.resolve(__dirname, '../Public');
app.use(express.static(staticRoot));

app.get('/', (req, res) => {
    res.send('hello!');
})

const port = 5005;
app.listen(port, () => {
    console.log(`Server listen on ${port}`)
})
