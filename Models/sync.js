/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-08 21:06:24
 * @LastEditTime: 2022-04-08 21:16:32
 * @LastEditors: PhilRandWu
 */
require('./Instance/admin');
require('./Instance/book');
require('./Instance/student');
require('./Instance/classGrade');

const sequelize = require('./db');
sequelize.sync({ force: true }).then(() => {
    console.log("所有模型同步完成");
});

