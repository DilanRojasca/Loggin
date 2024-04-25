import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"
const SignInForm = document.querySelector('#Login-form')

SignInForm.addEventListener('submit', async e => {
    e.preventDefault()

    const email = SignInForm['login-email'].value;
    const password = SignInForm['login-password'].value;

    try {
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    console.log(credentials)
    showMessage("welcome " + credentials.user.email, "success")
} catch (error) {
    console.log(error.code)
    console.log(error.message)


    if (error.code === 'auth/too-many-requests'){
        showMessage("Your Email or password are incorrect", "error")
    }else if (error.code === 'auth/invalid-email'){
        showMessage("Your email is incorrect", "error")
    } else if (error.code === 'auth/weak-password'){
        showMessage("Your password is incorrect", "error")
    } else if (error.code) {
        showMessage("Your Email or password are incorrect", "error")
    }
    }
})