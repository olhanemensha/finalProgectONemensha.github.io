export function myAjax(method, url, callback, body) {
    const loader = document.querySelector('.mark');
    const xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    loader.style.display = 'block';
    xhr.onload = () => {
        if (xhr.status < 400) {
            if (typeof callback === "function") {
                callback(xhr.response);
                loader.style.display = 'none';
            } else {
                console.log(xhr.response);
                a = xhr.response;
            }
        } else {
            console.log(xhr.response, xhr.status);
        }
    };
    xhr.onerror = () => {
        console.log(xhr.response, xhr.status)
    }
    xhr.open(method, url);
    if (method === 'GET') {
        xhr.send();
    } else if (method === 'POST') {
        xhr.setRequestHeader('Content-type', 'application/json');
        xhr.send(JSON.stringify(body));
    }
}