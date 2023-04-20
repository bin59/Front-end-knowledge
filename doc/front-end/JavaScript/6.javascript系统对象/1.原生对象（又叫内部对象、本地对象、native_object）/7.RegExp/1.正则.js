// JavaScript RegExp 对象 https://www.runoob.com/jsref/jsref-obj-regexp.html
/* 
    正则表达式（英语：Regular Expression，在代码中常简写为regex、regexp或RE）
    使用单个字符串来描述、匹配一系列符合某个句法规则的字符串搜索模式。

    搜索模式可用于文本搜索和文本替换。

    创建正则表达式
        1. 字面量创建
            语法： /正则表达式主体(用于检索)/修饰符(可选)  例如--》  /鬼/g

            检测方法：
                支持正则表达式的 String 对象的方法
                search()	检索与正则表达式相匹配的值。	
                match()	找到一个或多个正则表达式的匹配。	
                replace()	替换与正则表达式匹配的子串。	
                split()	把字符串分割为字符串数组。

             str.match(regexp)  
                参数：regexp  规定要匹配模式的RgeExp对象（需要匹配正则）
                返回：在字符串内检索指定的值，返回找到一个或多个正则表达式的匹配

        2.new RegExp() 实例化RegExp构造函数
            用于规定的文本中检索内容

            new RegExp(pattern,attr)
                参数
                    pattern
                        是一个字符串，指定正则表达式的模式（匹配正则）
                    attr  可选
                        匹配模式（包含 g,i,m等）
            检测方法
                test()  用于检测一个字符串是否匹配某个模式. 如果字符串中有匹配的值返回 true ，否则返回 false。
                    new RegExp().test(str)
*/

    // 当使用构造函数创造正则对象时，需要常规的字符转义规则（在前面加反斜杠 \）
    // 比如这两个是等价的
    var re = new RegExp("\\w+");
    var re = /\w+/;

    var reg = new RegExp("^[\d]"),//  /^[d]/
        rgg = new RegExp("^[\\d]"), //  /^[\d]/
        rgg = /^[\d]/  

/*
    匹配模式（修饰符）
        i	不区分大小写匹配。
        g	执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
        m	执行多行匹配。

    正则表达式模式
        方括号用于查找某个范围内的字符：
        [abc]	查找方括号之间的任何字符。
        [0-9]	查找任何从 0 至 9 的数字。
        (x|y)	查找任何以 | 分隔的选项。

    元字符（Metacharacter）
        普通元字符
            \s	表示一个空格
            \S	表示一个非空格
            \t	表示一个制表符
            \d	表示一个数字
            \D	表示一个非数字
            \w	表示一个数字、字母、下划线必有其一
            \W	表示有除数字、字母、下划线外的其它字符
            .	表示有非换行的任意字符
            \	转义符

        边界元字符
            ^	表示字符串的开始
            $	表示字符串的结束
        限定元字符	写在普通元字符或字母符号的后面，限制一个符号出现的次数
            *	表示出现 0 ~ 多 次
            +	表示出现 1 ~ 多 次
            ？	表示出现 0 ~ 1 次
            {n}	表示出现 n 次
            {n,}	表示出现 n ~ 多 次
            {n,m}	表示出现 n ~ m 次
            `*?` `+?` `??` `{n}?` `{n,}?` `{n,m}?`	这六个为非贪婪匹配

       
        \xxx	查找以八进制数 xxx 规定的字符。
        \xdd	查找以十六进制数 dd 规定的字符。
        \uxxxx	查找以十六进制数 xxxx 规定的 Unicode 字符。

        特殊的元字符
            ()	将（）中的内容作为一个整体
                单独截取

            (?:)	整体匹配但不截取

            |	占位或
                表示左边与右边都行，分为两个整体

            []	一个 [] 占一个字符位置
                表示里面的任意一个都行

            [^]	一个 [^] 占一个字符位置
                表示非里面的任意一个都行

            -	使用在 [] 里面的一个符号
                表示至或到，从哪一个字符到哪一个字符，要求字符在 ASCII 表中连续

        特殊元字符表示普通元字符
            [0-9a-zA-Z_]	\w
            [^0-9a-zA-Z_]	\W
            [0-9]	        \d
            [^0-9]	        \D
            [ ]           	\s
            [^ ]	        \S
            [.]	          仅表示一个点字符
*/ 

        let str = "今天是什么鬼天气，好鬼热",
        str2 = "Hi JavaScript,how Are You",
        num = "10088888612888"
        console.log(str.replace(/鬼/g,"好"))
        console.log(str2.replace(/h/g,"Q"))

        console.log(str.match(/鬼/))//['鬼', index: 5, input: '今天是什么鬼天气，好鬼热', groups: undefined]
        console.log(str.match(/鬼/g))//['鬼', '鬼']
        console.log(str2.match(/a/gi))//['a', 'a', 'A']
        console.log(str2.match(/鬼/g))//null

    //     n$	匹配任何结尾为 n 的字符串。
            console.log(str.match(/热$/))// ['热', index: 11, input: '今天是什么鬼天气，好鬼热', groups: undefined]

    //     ^n	匹配任何开头为 n 的字符串。
            console.log(str.match(/^今天是什么/))// ['今天是什么', index: 0, input: '今天是什么鬼天气，好鬼热', groups: undefined]

    //     n+	匹配任何包含至少一个 n 的字符串。
            console.log(num.match(/8+/))//[ '88888', index: 3, input: '10088888612888', groups: undefined ] 

        // n* 匹配任何包含零个或多个 n 的字符串。
        let str4 = "A ghost booooed",
            str5 ="A bird warbled",
            str6 = "A goat grunted"
        console.log(str4.match(/bo*/))//"boooo"
        console.log(str5.match(/bo*/))//'b'
        console.log(str6.match(/bo*/))//null

        // n?  匹配任何包含零个或一个 n 的字符串。
        //     例如，/e?le?/ 匹配 "angel" 中的 "el"，"angle" 中的 "le"。

        // n{X} 匹配包含 X 个 n 的序列的字符串。
        //     例如，/a{2}/ 不匹配 "candy," 中的 "a"，但是匹配 "caandy," 中的两个 "a"，且匹配 "caaandy." 中的前两个 "a"。

        // n{X,}   X 是一个正整数。前面的模式 n 连续出现至少 X 次时匹配。
        //     例如，/a{2,}/ 不匹配 "candy" 中的 "a"，但是匹配 "caandy" 和 "caaaaaaandy." 中所有的 "a"。

        // n{X,Y}	 X 和 Y 为正整数。前面的模式 n 连续出现至少 X 次，至多 Y 次时匹配。
        //      例如，/a{1,3}/ 不匹配 "cndy"，匹配 "candy," 中的 "a"，"caandy," 中的两个 "a"，匹配 "caaaaaaandy" 中的前面三个 "a"。注意，当匹配 "caaaaaaandy" 时，即使原始字符串拥有更多的 "a"，匹配项也是 "aaa"。

    // /  ?=n	匹配任何其后紧接指定字符串 n 的字符串。
    // /   ?!n	匹配任何其后没有紧接指定字符串 n 的字符串。