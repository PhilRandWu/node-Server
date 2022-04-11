const { getErr } = require("./getResultMiddleWare");
const { pathToRegexp } = require('path-to-regexp');
const { decrypt } = require('../../Utils/crypt');
/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-11 12:11:29
 * @LastEditTime: 2022-04-11 13:16:00
 * @LastEditors: PhilRandWu
 */
const needTokenAPi = [
    { method: 'POST', path: '/api/student' },
    { method: 'GET', path: '/api/student' },
    { method: 'GET', path: '/api/student/:id' },
];

module.exports = (req,res,next) => {
    // 得到是否需要认证
    const apis = needTokenAPi.filter(api => {
        return api.method === req.method && pathToRegexp(api.path).test(req.path);
    });
    if(apis.length === 0) {
        next();
        return;
    }
    // 有认证的目标
    let token = req.cookies.token;
    if(!token) {
        // 如果 cookie 中没有则从 请求头中取
        token = req.headers.authorization;
    }
    if(!token) {
        // 表示都没有 token
        noTokenHandle(req,res,next);
        return;
    }
    const userID = decrypt(token);
    req.userID = userID;
    next();
}

function noTokenHandle(req, res, next) {
    res.status(403).send(getErr(403, 'you dont have any token to access the api'))
};
