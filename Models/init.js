/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-06 15:09:19
 * @LastEditTime: 2022-04-06 21:15:15
 * @LastEditors: PhilRandWu
 */
const sequelize = require('./db');
require('./Instance/admin');
require('./Instance/book');
require('./Instance/class');
require('./Instance/student');
require('./relation');
sequelize.sync({ alter: true }).then(() => {
    console.log('所有模型同步完成！');
})
