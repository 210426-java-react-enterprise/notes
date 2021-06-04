const URL = 'https://jsonplaceholder.typicode.com';

async function getPosts() {
    let req = await fetch(`${URL}/posts`);
    let res = await req.json();
    console.log(res);
}

async function post() {
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;
    let obj = {
        title: 'Test',
        body: 'Test',
        id: 1,
    };

    let req = await fetch(`${URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    });

    let res = await req.json();

    console.log(res);
}

async function failedRequest() {
    try {
        let req = await fetch(`${URL}/posts`, {
            method: 'GET',
            body: {},
        });
        let res = await req.json();
        console.log(res);
    } catch (e) {
        console.log('An error occured');
    }
}

getPosts();

failedRequest();
