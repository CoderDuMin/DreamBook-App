const i = '-'
const j = ':'
const p = (n) => n < 10 ? '0' + n : n//小于10加'0'
const year = (a) => a.getFullYear()//获取年份
const month = (a) => a.getMonth() +1//获取月份
const day = (a) => a.getDate()//获取天数
const hour = (a) => a.getHours()//获取小时
const minute = (a) => a.getMinutes()//获取分钟
const seconds = (a) => a.getSeconds()//获取秒数
const millisecond = (a) => a.getMilliseconds()//获取毫秒
/**
 * @description: 获取当前日期
 * @param {Date} date
 */
const nowDate = (date = new Date()) =>{
    return year(date) + i + p(month(date)) + i + p(day(date))
}
/**
 * @description: 获取当前日期时间
 * @param {Date} time
 */
const nowTime = (time = new Date()) =>{
    // let time = new Date()
    return nowDate(time) + ' ' + p(hour(time)) + j + p(minute(time)) + j + p(seconds(time))
}
/**
 * @description: 对比时间大小
 * @param {Date} b
 * @param {Date} s
 */
const compareTime = (b,s = new Date()) =>{
    let bTime:number = b.getTime()
    let sTime:number = s.getTime()
    return bTime >= sTime
}
/**
 * @description: 将时间转化为时间戳
 * @param {string} time
 */
const parseDate = (time = nowTime()) => {
    return Date.parse(time)
}
/**
 * @description: 计算两个时间间隔（秒）
 * @param {string} end
 * @param {string} start
 */
const timeDifference = (end,start) => {
   return (parseDate(end) - parseDate(start))/1000
}
export {nowDate,nowTime,compareTime,parseDate,timeDifference}