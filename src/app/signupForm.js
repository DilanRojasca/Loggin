import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"
import { auth } from "./firebase.js"
import { showMessage } from "./showMessage.js"

const signupForm = document.querySelector('#Signup-form')

signupForm.addEventListener('submit', async (e) =>{
    e.preventDefault()

    const email = signupForm['signup-email'].value
    const password = signupForm['signup-password'].value

    console.log(email, password)

   try {
    const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
   console.log(userCredentials)

   const signupModal = document.querySelector('#SignupModal')
   const modal = bootstrap.Modal.getInstance(signupModal)
   modal.hide()

   showMessage("welcome " + userCredentials.user.email, "success")

    } catch (error) {
    console.log(error.message)
    console.log(error.code)

    if (error.code === 'auth/email-already-in-use'){
        showMessage("Email already in use.", "error")
    }else if (error.code === 'auth/invalid-email'){
        showMessage("Invalid Email", "error")
    } else if (error.code === 'auth/weak-password'){
        showMessage("Weak Password", "error")
    } else if (error.code) {
        showMessage("Something went wrong", "error")
    }
   }


})

