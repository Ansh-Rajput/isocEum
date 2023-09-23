const sendEmail=()=>{
    Email.send({
        SecureToken : "ab27377e-ca16-4697-b329-611da68eb601",
        To : 'anshravikrish425317@gmail.com',
        From : document.getElementById("email").value,
        Subject : "contect from enquiry.",
        Body : `Name: ${document.getElementById('name').value} 
                <br> Email: ${document.getElementById('email').value} 
                <br> Phone no: ${document.getElementById('phoneNo').value} 
                <br> Message: ${document.getElementById('message').value} 
            `
    }).then(
      message => {alert(message);
        console.log(document.getElementById("email").value)
    }
    );
}
const onSubscribe=()=>{
    Email.send({
        SecureToken : "ab27377e-ca16-4697-b329-611da68eb601",
        To : document.getElementById("newsletter-email").value,
        From : 'anshravikrish425317@gmail.com',
        Subject : "ISOC EUM subscription",
        Body : `You have subscribed to our newsletter.
            `
    }).then(
      message => {alert(message);
        console.log(document.getElementById("newsletter-email").value)
    }
    );
}