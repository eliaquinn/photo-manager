const emailField = document.getElementById('user-login-field')
const pwdField = document.getElementById('psw-login-field')
const btnLogin = document.getElementById('btn-login')

const getUserLogin = function () {
    userObject = {
        email: emailField.value,
        password: pwdField.value
    }

    return userObject
}

btnLogin.onclick = function (e) {
    e.preventDefault()
    
    let dataUser = getUserLogin()

    dataUserLogin(dataUser)

    clearField(emailField, pwdField)
}