const express = require("express");
const { asyncHandle } = require("../middleWare/getResultMiddleWare");
const studentSrv = require('../../Service/studentService');
const { query } = require("express");

/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-10 14:12:51
 * @LastEditTime: 2022-04-10 14:36:58
 * @LastEditors: PhilRandWu
 */
const router = express.Router();

router.get('/:id', asyncHandle(async (req, res) => {
    return await studentSrv.getStudentById(req.params.id);
}))

router.get('/', asyncHandle(async (req, res) => {
    console.log(req.query)
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const sex = req.query.sex || -1
    const name = req.query.name || '';
    return await studentSrv.getStudents(page,limit,sex,name);
}))

module.exports = router;
