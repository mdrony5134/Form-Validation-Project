let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes); 

let userName = id('username'),
 email = id('email'),
 form = id('form'),
 password = id('password'),
 errorMsg = classes('error'),
 failureIcon = classes('failure-icon'),
 successIcon = classes('success-icon')

 form.addEventListener('submit' , (e) => {
    e.preventDefault();


   engine(userName , 0 , "Username cannot be blank");
   engine(email , 1 , "Email cannot be blank");
   engine(password , 2 , "Password cannot be blank");
 })

let engine = (id , serial , message) =>{
    if(id.value.trim() === ''){
        errorMsg[serial].innerHTML = message;
        failureIcon[serial].style.opacity ='1';
        successIcon[serial].style.opacity = 0;
    }else{
        errorMsg[serial].innerHTML = '';
        successIcon[serial].style.opacity = 1;
        failureIcon[serial].style.opacity =0;
    }
 }