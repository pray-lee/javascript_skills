// javascript技巧...

// 数组去重
let arr = [...new Set([1, 1, 2, 2, 3, 4, 4, 5])]
console.log(arr) // [1,2,3,4,5]

// 过滤空值
let result = [1, 0, undefined, null, '', false].filter(Boolean)
console.log(result) // [1]

// 创建空对象
const obj = Object.create(null)

// 合并对象
const A = { a: 1 }
const B = { b: 1 }
const C = { c: 1 }
const D = {...A, ...B, ...C }
console.log(D) // {a: 1, b: 1, c: 1}

//参数非空检测
const isRequired = function() { throw new Error('param is required') }
const test = function(param = isRequired()) {
        console.log('success')
    }
    //test() // Error: param is required
    //test('haha') // success

// 结构添加别名
const object = { x: 1 }
const { x: o } = object
console.log(o) // 1


// 获取查询字符串参数
var urlParams = new URLSearchParams('?a=1&b=2')
console.log(urlParams.has('a')); // true
console.log(urlParams.get('a')); // "edit"
console.log(urlParams.getAll('b')); // ["edit"]
console.log(urlParams.toString()); // "?a=1&b=2
console.log(urlParams.append('c', '3')); // "?a=1&b=2&c=3

// 生成一个有长度的空数组
let arr = new Array(3).join('.').split('.')
console.log(arr) // ['', '', '']
let arr1 = [1, 2, 3, 4, 5, 6, 7].fill('')
console.log(arr1) // ['', '', '', '', '', '', '']


// debounce
function debounce(fn, delay) {
    let time
    return function() {
        const context = this
        const args = arguments
        if (time) {
            clearTimeout(time)
        }
        time = setTimeout(function() {
            fn.apply(context, args)
        }, delay)
    }
}
// document.addEventListener('keyup', debounce(function () {
//   // do some thing...
// }, 300))

// throttle
function throttle(fn, threshold) {
    let time
    let start = new Date()
    const threshold = threshold || 160 // 默认160毫秒执行一次
    return function() {
        if (time) {
            clearTimeout(time)
        }
        const context = this
        const args = arguments
        let curr = new Date()
        if (curr - start > threshold) { // 如果时间间隔大于等于设定的值，才会执行
            fn.apply(context, args)
            start = curr
        } else {
            // 始终要走一次
            time = setTimeout(function() {
                fn.apply(context, args)
            }, threshold)
        }
    }
}
// window.onresize = throttle(function(){ // do some thing...}, 200)