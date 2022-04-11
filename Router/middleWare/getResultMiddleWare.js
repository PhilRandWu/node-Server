

/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-10 14:06:16
 * @LastEditTime: 2022-04-10 14:12:26
 * @LastEditors: PhilRandWu
 */
exports.getErr = (errCode = 500, errMsg = 'server internal error') => {
    return {
        code: errCode,
        mag: errMsg
    }
}

exports.getResult = (data) => {
    return {
        code: 0,
        mag: '',
        data
    }
}

exports.asyncHandle = (handle) => {
    return async (req, res, next) => {
        try {
            const result = await handle(req,res,next);
            res.send(exports.getResult(result));
        } catch (error) {
            next(error) // 直接交给错误处理中间件处理即可
        }
    }
}
