import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js"
import { auth } from "./app/firebase.js"
import { LoginCheck } from "./app/loginCheck.js"

import  './app/signupForm.js'
import './app/SigninForm.js'
import './app/logout.js'


onAuthStateChanged( auth , async (user)=> {
    
    if(user){
      LoginCheck(user)
    }else{
      LoginCheck(user)
    }
})