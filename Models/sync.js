/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-08 21:06:24
 * @LastEditTime: 2022-04-09 19:25:43
 * @LastEditors: PhilRandWu
 */
require('./Instance/admin');
require('./Instance/book');
require('./Instance/classGrade');
require('./Instance/student');

const sequelize = require('./db');
sequelize.sync({ alter: true }).then(() => {
    console.log("所有模型同步完成");
});

