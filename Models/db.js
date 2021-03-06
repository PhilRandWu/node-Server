/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-06 14:56:17
 * @LastEditTime: 2022-04-10 13:34:12
 * @LastEditors: PhilRandWu
 */
const { Sequelize } = require('sequelize');
const { sqlLogger } = require('../logger');

// setInterval(() => {
//     sqlLogger.debug('one debug service');
// }, 100)

const sequelize = new Sequelize('schoolmanage', 'root', '123123', {
    host: 'localhost',
    dialect: 'mysql',
    logging: msg => {
        sqlLogger.debug(msg);
    }
});

/**
 * @description: 测试数据库连接
 * @param {*}
 * @return {*}
 */
async function test() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = sequelize;
