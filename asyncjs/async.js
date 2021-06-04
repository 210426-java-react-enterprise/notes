function foo() {
    console.log('First');
}
function bar() {
    setTimeout(() => console.log('Second'), 500);
}

function baz() {
    console.log('third');
}

function testAsync() {
    bar();
    foo();
    baz();
}

//Basic Promise syntax
let promise1 = new Promise(function (resolve, reject) {});

let promise2 = new Promise(function (resolve, reject) {
    const x = 5;
    const y = 6;

    if (x >= y) {
        resolve({
            name: 'Bob',
            age: 25,
        });
    } else {
        reject(new Error());
    }
});

promise2
    .then((obj) => console.log(obj))
    .catch((e) => console.log(e))
    .finally(() => console.log('We should run no matter what'));
