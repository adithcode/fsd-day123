usr = document.getElementById("usr");
pass = document.getElementById("pass");
btn = document.getElementById("btn");
err1 = document.getElementById("err1")

function validate()
{
 if(usr.value.trim()=="" || pass.value.trim()=="")
    {
    alert("field cannot be empty");
        return false
    }
    else if(pass.value.length<5)
      {
        pass.style.border="2px solid red";
        err1.textContent="password should be greater than 5"
        return false
      }
    else
    {
        pass.style.border="2px solid green";
        err1.textContent="";
        return true
    }
}

