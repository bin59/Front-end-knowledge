// // 1.Accessible Object.prototype.hasOwnProperty
// {
//   let obj = { name: 'Ravi' }
//   console.log(obj.hasOwnProperty('name')) // true
// }
// {
//   let obj = { hasOwnProperty: false }
//   //   console.log(obj.hasOwnProperty('name')) // throws error
// }
// {
//   let obj = { hasOwnProperty: false }
//   console.log(Object.prototype.hasOwnProperty.call(obj, 'name'))
//   // false
// }
// {
//   let obj = { name: 'Ravi' }
//   console.log(Object.hasOwn(obj, 'name')) // true

//   let obj2 = { hasOwnProperty: false }
//   console.log(Object.hasOwn(obj2, 'name')) // false

//   let obj3 = Object.create({ name: 'Ravi' })
//   obj3.age = 22
//   console.log(Object.hasOwn(obj3, 'name'), Object.hasOwn(obj3, 'age'))
//   // false true
// }

// Object.hasOwnProperty / hasOwn

// const foo = Object.create(null)
// foo.prop = 'exists'
// if (Object.hasOwn(foo, 'prop')) {
//   console.log(foo.prop) //exists
// }

// if (Object.prototype.hasOwnProperty.call(foo, 'prop')) {
//   console.log(foo.prop) //exists
// }

// //Cannot convert object to primitive value
// if (Object.hasOwnProperty(foo, 'prop')) {
//   console.log(foo.prop)
// }
