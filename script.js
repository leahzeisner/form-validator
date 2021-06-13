// DOM Elements
const form = document.getElementById('form')
const password1El = document.getElementById('password1')
const password2El = document.getElementById('password2')
const messageContainer = document.querySelector('.message-container')
const message = document.getElementById('message')

let isValid = false
let passwordsMatch = false



function validateForm() {
    // Using Constraint API
    isValid = form.checkValidity()

    // Style main message for an error
    if (!isValid) {
        changeMessageContainer('Please Fill Out All Fields!', 'red')
        return
    }

    // Check to see if passwords match
    if (password1El.value === password2El.value) {
        passwordsMatch = true
        changePasswordElColor('green')
    } else {
        passwordsMatch = false
        changeMessageContainer('Make sure passwords match!', 'red')
        changePasswordElColor('red')
        return
    }

    // If form is valid and passwords match, success!
    changeMessageContainer('Registration Successful!', 'green')
}


function changeMessageContainer(msg, color) {
    message.textContent = msg
    message.style.color = color
    messageContainer.style.borderColor = color
}


function changePasswordElColor(color) {
    password1El.style.borderColor = color
    password2El.style.borderColor = color
}


function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }

    // Do something with user, pass to database...
}


function processFormData(e) {
    e.preventDefault()
    validateForm()
    if (isValid && passwordsMatch) {
        storeFormData()
    }
}



// Event Listeners
form.addEventListener('submit', processFormData)