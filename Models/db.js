/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-06 14:56:17
 * @LastEditTime: 2022-04-06 17:49:11
 * @LastEditors: PhilRandWu
 */
const { Sequelize } = require('sequelize');

// setInterval(() => {
//     sqlLogger.debug('one debug service');
// }, 100)

const sequelize = new Sequelize('schoolmanage', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});


async function test() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

test();
