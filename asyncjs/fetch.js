//Basic syntax of fetch
//let request = fetch(url, [options])

const URL = 'https://jsonplaceholder.typicode.com';

function getPosts() {
    fetch(`${URL}/posts`)
        .then((res) => res.json())
        .then((data) => console.log(data));
}

function responseHeader() {
    fetch(`${URL}/posts`).then((res) => console.log(res.headers));
}

function requestHeader() {
    fetch(`${URL}/posts`, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
}

function post() {
    let title = document.getElementById('title').value;
    let body = document.getElementById('body').value;

    let obj = {
        title,
        body,
        id: 1,
    };

    fetch(`${URL}/posts`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(obj),
    })
        .then((res) => res.json())
        .then((data) => console.log(data));
}

function failedRequest() {
    fetch(`${URL}/posts`, {
        method: 'GET',
        body: {},
    })
        .then((res) => res.json())
        .then((data) => console.log(data))
        .catch((err) => console.log('There was an error, we could handle'));
}

getPosts();

responseHeader();

requestHeader();

failedRequest();
