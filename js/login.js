document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log("submit button clicked")
    // for user email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    console.log(email);

    // for user password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    console.log(password);

    if(email === "sahaapurbo01@gmail.com" && password === "2022-2023"){
        window.location.href = 'bank.html';
    }
    else{
        alert("invalid user")
    }
})