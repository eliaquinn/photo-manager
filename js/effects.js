const userMenu = document.querySelector('.menu-user')
const btnUser = document.getElementById('btn-user')

btnUser.onclick = function () {
    if(!userMenu.classList.contains('menu-user--show')){
        userMenu.classList.add('menu-user--show')
    } else {
        userMenu.classList.remove('menu-user--show')
    }
}