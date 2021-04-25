function login()
{
    let email = document.getElementById('exampleInputEmail1').value  
    let password = document.getElementById('exampleInputPassword1').value 
    firebase.auth().signInWithEmailAndPassword(email, password)  
    .then((userCredential) => {    
        // Signed in    
        var user = userCredential.user;
        window.location.href="/myCharacters.html";    
        // ...  
    })  
    .catch((error) => {    
        var errorCode = error.code;    
        var errorMessage = error.message;  
    }); 

}

function spinner() 
{
    document.getElementsByClassName("loader")[0].style.display = "block";
}

function hide() {
    var x = document.getElementById("button");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }