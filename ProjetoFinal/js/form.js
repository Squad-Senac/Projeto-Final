const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {

    const nomeValue = nome.value
    const emailValue = email.value
    const telefoneValue = telefone.value

    if(nomeValue === '') {
        // mostrar erro
        // add classe
        erro(nome, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        certinho(nome)
    }
    
    if(telefoneValue === '') {
        // mostrar erro
        // add classe
        erro(telefone, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        certinho(telefone)
    }

    if(emailValue === '') {
        // mostrar erro
        // add classe
        erro(email, 'Preencha esse campo')
    } else {
        // adicionar a classe de sucesso
        certinho(email)
    }
           
}
function erro(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

function certinho(input) {
    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}
