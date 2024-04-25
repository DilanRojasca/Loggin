const LoggedOutLinks = document.querySelectorAll('.logged-out')
const LoggedInLinks = document.querySelectorAll('.logged-in')

console.log(LoggedOutLinks)
console.log(LoggedInLinks)


export const LoginCheck = user => {
    if(user){
        LoggedInLinks.forEach(link => link.style.display = 'block')
        LoggedOutLinks.forEach(link => link.style.display = 'none')      
    }else{
        LoggedOutLinks.forEach(link => link.style.display = 'block')
        LoggedInLinks.forEach(link => link.style.display = 'none')
    }
}