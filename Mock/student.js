/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-07 17:58:21
 * @LastEditTime: 2022-04-08 21:38:03
 * @LastEditors: PhilRandWu
 */
const Mock = require('mockjs');

const result = Mock.mock({
    "data|16": [
        {
            "id|+1": 1,
            "name": "@cname()",
            "sex|1": Boolean,
            "birthday": "@date",
            "phone": /1\d{10}/,
            "classID|1-16": 0
        }
    ]
}).data;
const Student = require('../Models/Instance/student');
Student.bulkCreate(result);
