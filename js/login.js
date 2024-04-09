
const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const Users = JSON.parse(localStorage.getItem('users')) || []
    const validUser = Users.find(user => user.email === email && user.password === password)
    if(!validUser){
        return alert('Usuario y/o contraseña incorrectos!')
    }
    localStorage.setItem('login_success', JSON.stringify(validUser))
    window.location.href = 'index.html'   

})

const register = document.querySelector('.buttonR')
register.addEventListener('click', (e)=>{
    e.preventDefault()
    window.location.href = 'registro.html'
})

