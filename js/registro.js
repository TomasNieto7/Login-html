const signupForm = document.querySelector('.registro')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const email = document.querySelector('#email').value
    const name = document.querySelector('#name').value
    const password = document.querySelector('#password').value
    const phone = document.querySelector('#phone').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya esta registado!')
    }

    Users.push({email: email, name: name, password: password, phone: phone})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    window.location.href = 'login.html'

})