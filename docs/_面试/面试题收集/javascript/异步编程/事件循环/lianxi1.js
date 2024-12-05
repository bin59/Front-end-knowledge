{
        console.log('A:' + new Date());

        setTimeout(function() {
            console.log('B:' + new Date());
        }, 1000);

        var end = Date.now() + 3000;

        while (Date.now() < end) {};

        console.log('C:' + new Date());

}
{        //宏任务 = [setTimeout];

        //微任务  = []

        console.log('sync'); //1

        setTimeout(function() {
            console.log('setTimeout') //5
        }, 0);

        var promise = new Promise(function(resolve, reject) {
            console.log('promise'); //2

            setTimeout(function() {
                promise.then(function() {
                    console.log('promise-setTimeout-then') //7
                })
                console.log('promise-setTimeout') //6
            }, 0);

            resolve();
        });

        promise.then(function() {
            setTimeout(function() {
                promise.then(function() {
                    console.log('then-setTimeout-then') //9
                })

                console.log('then-setTimeout') //8
            }, 0);

            console.log('then'); //3

            promise.then(function() {
                console.log('then-then') //4
            })
        });

        // sync
        // promise
        // then
        // then-than
        // setTimeout
        // promise-setTimeout
        // promise-setTimeout-then
        // then-setTimeout
        // then-setTimeout-then
}