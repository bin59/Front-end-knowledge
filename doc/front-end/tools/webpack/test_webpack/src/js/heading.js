export default () =>{
    const ele = document.createElement('h2')
    ele.innerHTML = '今晚吃什么？(请点击)'
    ele.addEventListener('click',()=>{
        alert('今晚吃美餐乐')
    })
    return ele
}