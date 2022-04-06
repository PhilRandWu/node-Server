/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-06 21:14:58
 * @LastEditTime: 2022-04-06 21:36:21
 * @LastEditors: PhilRandWu
 */
const student = require('./Instance/student');
const classGrade = require('./Instance/class');

classGrade.hasMany(student);
