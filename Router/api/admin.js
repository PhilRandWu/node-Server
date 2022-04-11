/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-11 12:36:08
 * @LastEditTime: 2022-04-11 13:20:32
 * @LastEditors: PhilRandWu
 */
const AdminSer = require('../../Service/adminService');
const express = require('express');
const { asyncHandle } = require('../middleWare/getResultMiddleWare');
const { encrypt } = require('../../Utils/crypt');
const res = require('express/lib/response');
const router = express.Router();

router.post('/login', asyncHandle(async (req, res) => {
    const result = await AdminSer.login(req.body.account, req.body.password);
    return sendToken(result, res);
}))

function sendToken(result, res) {
    if (result) {

        let value = encrypt(result.id.toString());
        // 登录成功
        // 发送 token
        res.cookie('token', value, {
            path: '/',
            domain: 'localhost',
            maxAge: 7 * 24 * 60 * 60 * 1000, // 毫秒 7 天,
        })

        res.header('authorization', value);
        return result;
    }
}

module.exports = router;
