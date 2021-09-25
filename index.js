const myform = document.querySelector("#my-form");
const email = document.querySelector("#email");
const name = document.querySelector("#password");
const msgoutput = document.querySelector(".msg");
const invalidmsg = document.querySelector(".invalid");
const success = document.querySelector(".success");


myform.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if (email.value == '' || password.value == '') {
        msgoutput.classList.add('error');
        msgoutput.innerHTML = 'Missing required feilds';
        setTimeout(() => msgoutput.remove(), 3000);
    }
    if (email.value != "saeeduabdulazeez@gmail.com" || password.value != "section") {
        invalidmsg.classList.add("error");
        invalidmsg.innerHTML = "Invalid Credentials";
        setTimeout(() => invalidmsg.remove(), 4000);
    } else {
        success.classList.add("success");
        success.innerHTML = "Login Successful";
        setTimeout(() => success.remove(), 2000);
    }
}