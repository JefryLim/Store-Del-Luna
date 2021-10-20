function getData(){
    let username = document.getElementById('usernametxt').value
    let password = document.getElementById('passwordtxt').value
    let confirmationpassword = document.getElementById('confirmationpasswordtxt').value
    let fullname = document.getElementById('nametxt').value
    let male = document.getElementById('malerb')
    let female = document.getElementById('femalerb')
    let email = document.getElementById('emailtxt').value
    let age = document.getElementById('agetxt').value
    let tnc = document.getElementById('agreecb').checked

    if(username.length == 0){
        alert('Username must be filled!')
    }else if(password.length == 0){
        alert('Password must be filled!')
    }else if(confirmationpassword.length == 0){
        alert('Confirmation Password must be filled!')
    }else if(confirmationpassword != password){
        alert('Confirmation Password wrong!')
    }else if(fullname.length == 0){
        alert('Full Name must be filled!')
    }else if(!male.checked && !female.checked){
        alert('Gender must be filled!')
    }else if(email.length == 0){
        alert('Email must be filled!')
    }else if(age == 0 || age <= 0){
        alert('Age must be filled!')
    }else if(tnc == false){
        alert('You must agree with Terms & Conditions!')
    }else{
        confirm('Successful Welcome to Store Del Luna, '+ fullname)
    }
}