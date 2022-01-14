const connApi = async function (endpoint, email, pwd) {
    await fetch(`https://61e189f363f8fc0017618d00.mockapi.io/api/v1/${endpoint}`)
    .then(res => res.json())
    .then(data => getLoginApi(data, email, pwd))
}

const getLoginApi = function (data, email, pwd) {
    data.forEach(element => {
        if(element['email'] === email && element['password'] === pwd){
            successLogin()
            clearField(emailField ,pwdField)
        }
    });
}

const successLogin = function () {
    alert('login feito com sucesso!')
    window.location.href = 'http://127.0.0.1:5500/pages/home.html'
}

const dataUserLogin = function (userLogin) {
    connApi('auth', userLogin['email'], userLogin['password'])
}

const clearField = function (c1, c2) {
    c1.value = '',
    c2.value = ''
}