/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-11 21:30:36
 * @LastEditTime: 2022-04-11 21:40:03
 * @LastEditors: PhilRandWu
 */
const allowOrigin = ['http://127.0.0.1:5500', null];

module.exports = (req, res, next) => {
    // 处理预检请求
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', req.headers['access-control-allow-methods']);
        res.header('Access-Control-Allow-Headers', req.headers['access-control-allow-headers']);
    }

    // 处理简单请求
    if ("origin" in req.headers && allowOrigin.includes(req.headers.origin)) {
        res.header('access-control-allow-origin', req.headers.origin);
    }
    next();
}
