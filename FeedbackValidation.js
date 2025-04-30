document.getElementById('feedback').addEventListener('submit',function(event){event.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const rating=document.getElementById('rating').value;
    const message=document.getElementById('message').value;

    let errors=[];
    
    if(name.trim()===""){
        errors.push("Name is required.");
    }
    const emailRegex=/^[a-zA-Z0-9._-]+@[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)){
        errors.push("Please enter a valid email address");
    }
    if(rating===""){
        errors.push("Please select a rating");
    }
    if(message.trim()===""){
        errors.push("Feedback message is required.");
    }
    const errorMessagesDiv=document.getElementById('errorMessages');
    errorMessagesDiv.innerHTML='';
    if (errors.length>0){
        errors.forEach(function(error){
            const errorelement=document.createElement('p');
            errorelement.textContent= error;
            errorMessagesDiv.appendChild(errorElement);
        });
    } else {
        alert("Feedback submitted successfully!");
    }
})