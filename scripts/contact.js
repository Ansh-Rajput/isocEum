// const sendEmail=()=>{
//     Email.send({
//         SecureToken : "ab27377e-ca16-4697-b329-611da68eb601",
//         To : 'anshravikrish425317@gmail.com',
//         From : document.getElementById("email").value,
//         Subject : "contect from enquiry.",
//         Body : `Name: ${document.getElementById('name').value} 
//                 <br> Email: ${document.getElementById('email').value} 
//                 <br> Phone no: ${document.getElementById('phoneNo').value} 
//                 <br> Message: ${document.getElementById('message').value} 
//             `
//     }).then(
//       message => {alert(message);
//         console.log(document.getElementById("email").value)
//     }
//     );
// }
// const onSubscribe=()=>{
//     Email.send({
//         SecureToken : "ab27377e-ca16-4697-b329-611da68eb601",
//         To : document.getElementById("newsletter-email").value,
//         From : 'anshravikrish425317@gmail.com',
//         Subject : "ISOC EUM subscription",
//         Body : `You have subscribed to our newsletter.
//             `
//     }).then(
//       message => {alert(message);
//         console.log(document.getElementById("newsletter-email").value)
//     }
//     );
// }
const URL = "http://localhost:3000";

const onSubscribe = async ()=>{
    
    const email = document.getElementById("newsletter-email").value;
    
    const response = await fetch(`${URL}/api/subscribe`,{
        method:'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body:JSON.stringify({email})
    });

    const result = await response.json();
    console.log(result.message);
}

const contactUs = async ()=>{
    
    const email = document.getElementById("email").value;
    const name = document.getElementById("name").value;
    const number = document.getElementById("number").value;
    const message = document.getElementById("message").value;
    
    const response = await fetch(`${URL}/api/query`,{
        method:'POST',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
        body:JSON.stringify({email,name,number,message})
    });

    const result = await response.json();
    console.log(result.message);
}