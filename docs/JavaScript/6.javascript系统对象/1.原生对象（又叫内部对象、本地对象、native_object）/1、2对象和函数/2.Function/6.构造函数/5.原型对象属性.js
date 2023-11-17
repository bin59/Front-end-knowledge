
{
  function Fn(id,num) {
    this.id = id
    this.num=num
    
  }
  let f = new Fn(1,99)
  console.log(f);

// * hasOwnProperty
//每个实例对象都会有hasOwnProperty，判断某个属性是否存在当前构造函数的属性
// 返回值是布尔值
  console.log(f.hasOwnProperty('id'))//true
  console.log(f.hasOwnProperty('name'))//false
  console.log(f.hasOwnProperty('num'))//true

// * isPrototypeOf
// 判断某个prototype对象和某个实例对象之间的关系(当前构造函数是否存在指定的实例)
  console.log(Fn.prototype.isPrototypeOf(f))//true
  console.log(Fn.prototype.isPrototypeOf(new Array()))//false

}

