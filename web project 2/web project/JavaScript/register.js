function check(event) { 
    var FirstPassword = document.getElementById("firstPassword"); 
    var SecondPassword = document.getElementById("secondPassword"); 
    var form = document.getElementById("Form"); 
    var FirstPasswordLabel = document.getElementById("firstPasswordLabel"); 
    var SecondPasswordLabel = document.getElementById("secondPasswordLabel"); 
    var Terms = document.getElementById("terms"); 
    var TermsCheckbox = document.getElementById("termsCheckbox"); 
   
    if (FirstPassword.value != SecondPassword.value) { 
      event.preventDefault(); 
      form.action = ""; 
      FirstPasswordLabel.style.color = "red"; 
      SecondPasswordLabel.style.color = "red"; 
      alert("the passwords are not the same"); 
    } 
   
    if (!TermsCheckbox.checked) { 
      Terms.style.color = "red"; 
    } 
  }