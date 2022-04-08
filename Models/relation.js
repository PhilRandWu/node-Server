/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-06 21:14:58
 * @LastEditTime: 2022-04-08 21:17:29
 * @LastEditors: PhilRandWu
 */
const student = require('./Instance/student');
const classGrade = require('./Instance/classGrade');

classGrade.hasMany(student);
student.belongsTo(classGrade);
