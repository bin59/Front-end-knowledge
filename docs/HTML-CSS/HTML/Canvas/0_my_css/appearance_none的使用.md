在知乎上看到一个问题，为什么前端开发总喜欢用div代替语意更好的button按钮来实现button，原因无非是各个浏览器的button丑且样式不一致，所以干脆用div模拟反而要比修改button的默认样式反而更便捷。

    其实一直有一个非标准的css而且兼容还出奇的好的属性--ie无视，能够在某种程度上缓解这种矛盾，就是 

-webkit-appearance: none;（这里只以chrome为例，其他浏览器自行修改webkit前缀）。以button为例，添加如下样式
[type=button]{
    -webkit-appearance: none;
    border: none;
    outline: none;
}
button就和div一样，什么样式都没有了，但还能保留button的语意，除此之外，button的一些其他样式还被保留了下来，比如user-select，div里的文字默认是可以被用户选择的，但是button不能，在多数情况下也不应该能，是不是发现用-webkit-appearance: none;代替div莫名的给自己填了个坑。除此之外，对空格的处理也更加友好，如果是用div模拟的话，需得加上white-space: pre;来处理空格。

    另外，对于多选框的处理，也可以用这个属性。多选框能修改的部分很少，所以有人用+div和:checked+div这种方式模拟多选框的选中/未选中状态，但是如果用-webkit-appearance: none;的话，只需一个checkbox就可以，而不需多余的div。代码大致如下

[type=checkbox]{
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 1px solid red;
    outline: none;
    position: relative;
    overflow: hidden;
}
[type=checkbox]:checked:after{
    position: absolute;
    content: '';
    left: -29%;
    top: -56%;
    width: 20px;
    height: 20px;
    border: 1px solid black;
    transform:rotate(45deg);
}
代码更加简洁，容易复用

// 除select边框和三角
appearance: none;
border: none;