const form = document.querySelector('#signupForm');
const logout = window.document.querySelector("#logout");
const main = document.querySelector('main');

if (sessionStorage.getItem('token')) {
    form.setAttribute('hidden', 'false');
    logout.removeAttribute('hidden');
    main.removeAttribute('hidden');
}

form.addEventListener('submit', (event) => {

    const usernameElement = document.querySelector('#username');
    const passwordElement = document.querySelector('password');

    const dataToBeSent = {
        username: usernameElement.value,
        password: passwordElement.value
    }
    fetch('/api/auth/signup', {
        method: 'POST',
        body: Json.stringify(dataToBeSent),
        headers: {
            'content-type': 'application/json'
        },
    })
        .then(data => data.json())
        .then(userData => {
            sessionStorage.setItem('token', userData.token);
            form.setAttribute('hidden', 'true');
            logout.removeAttribute('hidden');
            main.removeAttribute('hidden');
            location.reload();
        })
    event.preventdefault();
})

logout.addEventListener('click', (event) => {
    sessionStorage.removeItem('token');
    form.setAttribute('hide', 'false');
    location.reload()
})

// There are 5 errors in this file