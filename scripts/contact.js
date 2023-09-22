const sendEmail=()=>{
    Email.send({
        SecureToken : "ab27377e-ca16-4697-b329-611da68eb601",
        To : 'anshravikrish425317@gmail.com',
        From : document.getElementById("email").value,
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => {alert(message);
        console.log(document.getElementById("email").value      )
    }
    );
}