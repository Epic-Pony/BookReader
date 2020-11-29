/*
 * @Description: KEEP CALM AND MAKE EPIC SHIT - PONY ZHANG
 * @Version: 2.0
 * @Autor: PONY ZHANG
 * @Date: 2020-11-29 22:09:49
 * @LastEditors: PONY ZHANG
 * @LastEditTime: 2020-11-29 22:56:14
 */
/**
 * @Epic-Deno
 * @description: 1.引用类型是把数据类型和功能组织到一起的结构，也是对象定义.
 *               2.对象被认为是某个特定引用类型的实例，新的对象通过使用new操作符后跟一个构造函数（constructor）来创建
 */

let now = new Date(); //实例化一个新的Date实例，用now来保存

//5.1 Date 实例化之后不给Date传递参数时候提供了两个辅助函数： Date.parse()和Date.UTC()


//5.1.1 Date.parse()只能接收一个日期字符串参数

let Date1 = Date.parse('11/29/2020'); //MMDDYY字符串

let Date2 = Date.parse('December 01, 2020');// 月 日， 年

let someDate = new Date('December 01, 2020');//等同于 Date2 Date.parse()

//5.1.2 Date.UTC()返回的也是一个日期的毫秒数，不同的是参数不一样参数是 年 月（零开始）日 时（0～23）分 秒 毫秒

let y2k = new Date(Date.UTC(2021,0));//返回的是一个GTM 时间2021年一月一号零点

let allFives = new Date(Date.UTC(2021, 5, 5, 17, 55, 55)); // 返回的是一个GTM 时间2021年5月5号下午5点55分55秒

//5.1.3 Date函数还提供了Date now() 返回的是执行时日期和时间的毫秒数

let Start = Date.now(); //函数开始执行时间

//doSomething();

let end = Date.now(); //函数结束执行的时间


//5.1.4继承方法
/**
 * @Epic-Deno
 * @description 1.Date类型重写了 toLocaleString()、toString()、和valueOf()的方法
 *              2.toLocaleString()方法返回的是与浏览器运行的本地环境一致的日期和时间包含AM（上午）、PM（下午）
 *              3.toString()方法返回带时区信息的日期和时间，时间以24小时制（0～23）表示
 */

let localeDate = new Date().toLocaleString(); // 结果是： 2020/11/29 下午10:43:48

let localeDate1 = new Date().toString(); // 结果是； Sun Nov 29 2020 22:45:34 GMT+0800 (中国标准时间)

/**
 * @Epic-Deno
 * @description: 补充日期函数：
 * toLocaleDateString() // 2020/11/29
 * toDateString() //星期 月 日 年 Sun Nov 29 2020
 * getTime() //返回毫秒数是距离计算机元年的毫秒数
 * getFullYear() //返回当前的年
 * getMonth() //返回当前的月 月份从0开始 正常的显示需要+1 （0～11）
 * getDate() //返回当前的日期 （1～31）
 * getHours() //返回当前的小时 （0～23）
 * getMinutes() //返回时期中的分钟
 * getSeconds() //返回日期中的秒
 */

 