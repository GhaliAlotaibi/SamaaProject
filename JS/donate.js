let div1 = document.getElementById('button0')
let username = localStorage.getItem('username')
let maindiv = document.getElementById('button')
let i = document.createElement('i')
if (username) {
    div1.remove()
    let dropdown = document.createElement('div')
    maindiv.appendChild(dropdown)
    dropdown.setAttribute('class', 'dropdown')
    let userbutton = document.createElement('button')
    userbutton.setAttribute('class', 'dropbtn')
    dropdown.appendChild(userbutton)
    i.setAttribute('class', 'fa-solid fa-user')
    i.style ='color: #e76f51;'
    userbutton.appendChild(i)
    let dropdowndiv = document.createElement('div')
    let dropdowna = document.createElement('a')
    let dropdownbutton = document.createElement('button')
    dropdowndiv.setAttribute('class', 'dropdown-content')
    dropdowna.href = '/HTML/Profile.html'
    dropdowna.textContent = 'الملف الشخصي'
    dropdownbutton.textContent = 'تسجيل الخروج'
    dropdown.appendChild(dropdowndiv)
    dropdowndiv.appendChild(dropdowna)
    dropdowndiv.appendChild(dropdownbutton)
    dropdownbutton.addEventListener('click', function Logout() {
        localStorage.clear()
        window.location.href = '/HTML/Home.html'
    })
}