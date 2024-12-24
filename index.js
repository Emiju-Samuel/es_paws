const nameInput = document.querySelector("#name");
const form = document.querySelector("form");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const submit = document.querySelector("#submit");
const a = document.querySelector("#a");
const errorNodes = document.querySelectorAll(".error");

// validate data

function validateForm(){
    clearMessages();
    if(nameInput.value.length < 1){
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
    }

}
// clear messages/success messages
function clearMessages(){

}

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(nameInput.value == ''){
        errorNodes[0].innerText = 'Name cannot be blank';
        errorNodes[1].innerText = '';
        errorNodes[2].innerText = '';
    }
    else if(email.value == ''){
        errorNodes[1].innerText = 'Email cannot be blank';
        errorNodes[0].innerText = '';
        errorNodes[2].innerText = '';
    }
    else if(message.value == ''){
        errorNodes[2].innerText = 'Message cannot be blank';
        errorNodes[1].innerText = '';
        errorNodes[0].innerText = '';
    }
    else if(nameInput.value == '' || email.value == '' || message.value == ''){
        errorNodes[2].innerText = 'Message cannot be blank';
        errorNodes[2].innerText = 'Message cannot be blank';
        errorNodes[2].innerText = 'Message cannot be blank';
    }else{
        a.href = `mailto:samuelemiju@gmail.com?subject=${nameInput.value}&body=${message.value}`
        // console.log(nameInput.value,email.value,message.value)
    }
})