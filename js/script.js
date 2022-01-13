const userField = document.getElementById('user-login-field')
const pswField = document.getElementById('psw-login-field')
const btnLogin = document.getElementById('btn-login')

function fieldListener (element, event) {
    element.addEventListener(event, () => {
        this.getField = element.value
        if(this.getField == 'teste') {
            return;
        }
        if(this.getField == 'teste123') {
            btnLogin.onclick = () => window.location.href = 'http://127.0.0.1:5500/pages/home.html'
        }
    })
}

function validationUser () {

}

fieldListener(userField, 'blur')
fieldListener(pswField, 'blur')