// The `typeof` operator returns a string indicating the type of the operand's value.

// 1. "undefined"
console.log(typeof undefined)
let declareButUndefinedVariable
console.log(typeof declareButUndefinedVariable)
console.log(typeof undeclareVariable)

console.log('------------------------------')

// 2. "boolean"
console.log(typeof true)
console.log(typeof false)
console.log(typeof Boolean(1)) // Boolean() will convert value based on if they're truthy or falsy
console.log(typeof !!(1)) // two calls of the ! operator are equivalent to Boolean()

console.log('------------------------------')

// 3. "number"
console.log(typeof 100)
console.log(typeof 3.14)
console.log(typeof (50))
console.log(typeof Math.LN2)
console.log(typeof Infinity)
console.log(typeof NaN)
console.log(typeof Number(1)) // Number() tries to parse value into a number
console.log(typeof Number('apple')) // including values that cannot be type coerced to a number

console.log('------------------------------')

// 4. "bigint"
console.log(typeof 1n)

console.log('------------------------------')

// 5. "string"
console.log(typeof "")
console.log(typeof "hello world")
console.log(typeof `template literal`)
console.log(typeof "1") // note that a number within a string is still typeof string.
console.log(typeof (typeof 1)) // typeof always returns a string
console.log(typeof String(1)) // String converts anything into a string, safer than toString

console.log('------------------------------')

// 6. "symbol"
console.log(typeof Symbol())
console.log(typeof Symbol('foo'))
console.log(typeof Symbol.for('bar'))
console.log(typeof Symbol.iterator)

console.log('------------------------------')

// 7. "function"
console.log(typeof function () { })
console.log(typeof class Foo { })
console.log(typeof Math.sin)
console.log(typeof new Function())

console.log('------------------------------')

// 8. "object"
console.log(typeof null) // notice
console.log(typeof {})
// use Array.isArray or Object.prototype.toString.call
// to differentiate regular object from array
console.log(typeof [])
console.log(typeof new Date())
console.log(typeof /regex/)
console.log(typeof Array(1, 2, 3))
console.log(typeof new Array(1, 2, 3))
// avoid the following
console.log(typeof new Boolean(true))
console.log(typeof new Number(1))
console.log(typeof new String("hello world"))

console.log('------------------------------')