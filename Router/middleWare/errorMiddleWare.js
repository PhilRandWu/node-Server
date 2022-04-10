
/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-10 13:39:35
 * @LastEditTime: 2022-04-10 13:43:12
 * @LastEditors: PhilRandWu
 */
module.exports = (err,req,res,next) => {
    if(err) {
        const errObj = {
            code: 500,
            msg: err instanceof Error ? err.message : err
        }
        res.status(500),send(errObj);
        return;
    }
    next();
}
