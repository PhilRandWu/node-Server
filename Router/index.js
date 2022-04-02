/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-02 22:28:11
 * @LastEditTime: 2022-04-02 22:33:18
 * @LastEditors: PhilRandWu
 */
const express = require('express');
const path = require('path');

const app = express();

// 静态资源
const staticRoot = path.resolve(__dirname, '../Public');
app.use(express.static(staticRoot));


const port = 5005;
app.listen(port, () => {
    console.log(`Server listen on ${port}`)
})
