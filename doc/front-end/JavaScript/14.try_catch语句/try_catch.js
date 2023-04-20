/*
js里面的try catch用于捕获异常 
    try
        允许定义在执行时进行错误测试的代码

    catch
        允许定义try代码发生错误时, 所执行的代码块

    finally
        在try和catch之间无论有无异常都会执行
*/ 

try{
    // 尝试执行代码块
    console.log('我是正常代码')

    // throw 抛出
    // throw new Error('我是错误代码')//捕获错误Error: 我是错误代码

    // Promise.reject('错误')//捕获不了

    console.log(a)//捕获错误ReferenceError: a is not defined

} catch(err){
    // 捕获错误代码、语法
    // 上面的Promise.reject('错误')捕获不了
    // 是因为try...catch检测的是错误代码、语法
    // 而Promise.reject('错误')抛出的是状态，本身并没有错
    console.log('捕获错误'+err)
}finally{
    // 无论try/catch结果如何都会执行
    console.log('一直在执行')
}