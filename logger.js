/*
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-10 13:25:31
 * @LastEditTime: 2022-04-10 13:35:31
 * @LastEditors: PhilRandWu
 */
const log4js = require('log4js');
const path = require('path');

log4js.configure({
    appenders: {
        default: {
            type: "stdout"
        },
        sql: {
            type: "dateFile",
            filename: path.resolve(__dirname, './Logs','sql','logger.js'),
            maxLogSize: 1024 * 1024 * 10,
            keepFileExt: true,
            layout: {
				type: "pattern",
				pattern: "%c [%d{yyyy-MM-dd hh:mm:ss}] [%p]: %m%n",
			},
        }
    },
    categories: {
        default: {
            appenders: ["default"],
            level: "all"
        },
        sql: {
            appenders: ["sql"],
            level: "all"
        }
    }
})

process.on('exit',() => {
    log4js.shutdown();
})

exports.logger = log4js.getLogger();
exports.sqlLogger = log4js.getLogger('sql');
