function getSecureAPI(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://us-central1-dungeonsdragonsapp-488b2.cloudfunctions.net/authorizedendpoint');
	
	// Track the state changes of the request.
    xhr.onreadystatechange = function () {
        var DONE = 4; // readyState 4 means the request is done.
        var OK = 200; // status 200 is a successful return.
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
				
				//I dont know why this code below doesnt work . would be useful to fix for the sake of tidying data 
				var sHTML = "";
				var data = JSON.parse(xhr.responseText);
				for(var i = 0; i<data.length; i++)
				{
					sHTML += "<div class='myCharchterItem'>";
					sHTML += "<img src='media/Class/class_ensorceleur.png' alt=''>";
					sHTML += "<div class='informationCharacter'>";
					sHTML += "<h4>Charachter " + (i+1) + "</h4>";
					sHTML += "<p> Race: " + data[i].Race + "</p>";
					sHTML += "<p> Class: " + data[i].Class + "</p>";
					sHTML += "<p> Background: " + data[i].Background + "</p>";
					sHTML += "<p> Strength: " + data[i].Strength + "</p>";
					sHTML += "<p> Dexterity: " + data[i].Dexterity + "</p>";
					sHTML += "<p> Constitution: " + data[i].Constitution + "</p>";
					sHTML += "<p> Intelligence: " + data[i].Intelligence + "</p>";
					sHTML += "<p> Wisdom: " + data[i].Wisdom + "</p>";
					sHTML += "<p> Charisma: " + data[i].Charisma + "</p>";	
					sHTML += "</div>";
					sHTML += "<button>Delete</button>";
					sHTML += "</div>";
					response.innerHTML = sHTML;
				}
				
                //response.innerHTML = xhr.responseText;
				}
				} else {
					response.innerHTML = "Unauthorized to view this content";
					console.log('Error: ' + xhr.status); // An error occurred during the request.
					}
					};
					// Set the Authorization header
					xhr.setRequestHeader('Authorization', 'Bearer ' + getCookie('accessToken'))
					xhr.send(null);
					}
					
					// W3C Schools
function getCookie(cname) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for(var i = 0; i < ca.length; i++) {
				var c = ca[i];
				while (c.charAt(0) == ' ') {
				c = c.substring(1);
				}
				if (c.indexOf(name) == 0) {
					return c.substring(name.length, c.length);
					}
					}
					return "";
					}
								
								
								
function logout(){
	firebase.auth().signOut().then(() => {
		console.log("Sign out successful");
		// Reset cookie
		document.cookie = "accessToken= ";
		// Redirect to the home page
		window.location.href = "/index.html";
		// Sign-out successful.
		}).catch((error) => {
			// An error happened.
			});
			}
