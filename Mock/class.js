/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-07 17:48:56
 * @LastEditTime: 2022-04-08 21:17:30
 * @LastEditors: PhilRandWu
 */
const Mock = require('mockjs');

const result = Mock.mock({
    "data|16": [
        {
            "id|+1": 1,
            "name": "前端第 @id 期",
            "openClass": "@date"
        }
    ]
}).data;

const Class = require('../Models/Instance/classGrade');
Class.bulkCreate(result);