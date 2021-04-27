function validate()
{

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="admin")
    {
        alert("Login Successful");
        window.open('index.html')
        
    }
    else{
        alert("Login Failed");
    }
     
}

 validate() ==true
