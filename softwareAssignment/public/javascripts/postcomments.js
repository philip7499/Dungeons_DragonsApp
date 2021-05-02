function postComment() {
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'https://us-central1-dungeonsdragonsapp-488b2.cloudfunctions.net/postcomment');
	xhr.setRequestHeader("Content-type", "application/json");
	
	// Track the state changes of the request.
	xhr.onreadystatechange = function () {
		var DONE = 4; // readyState 4 means the request is done.
		var OK = 200; // status 200 is a successful return.
		if (xhr.readyState === DONE) {
			if (xhr.status === OK) {
				getComments(); // 'Call get comments to retrieve the latest'
			} else {
				console.log('Error: ' + xhr.status); // An error occurred during the request.
			}
		}
	};
	
	
	var radioButtonRace = document.getElementsByName('group1');
	for(var i = 0; i < radioButtonRace.length; i++)
	{
		if(radioButtonRace[i].checked == true)
		{
			var selectedRace = radioButtonRace[i].value;
		}
	};
	
	var radioButtonClass = document.getElementsByName('group2');
	for(var i = 0; i < radioButtonClass.length; i++)
	{
		if(radioButtonClass[i].checked == true)
		{
			var selectedClass = radioButtonClass[i].value;
		}
	};
	
	
var radioButtonBackground = document.getElementsByName('group3');
	for(var i = 0; i < radioButtonBackground.length; i++)
	{
		if(radioButtonBackground[i].checked == true)
		{
			var selectedBackground = radioButtonBackground[i].value;
		}
	};
	
	
	
	xhr.send(JSON.stringify(
		{"Race": selectedRace, "Class": selectedClass, "Background": selectedBackground, "Strength": document.getElementById('abilityStrength').value,
		"Dexterity": document.getElementById('abilityDexterity').value, "Constitution": document.getElementById('abilityConstitution').value, 
		"Intelligence": document.getElementById('abilityIntelligence').value, "Wisdom": document.getElementById('abilityWisdom').value, "Charisma": document.getElementById('abilityCharisma').value, "uid": getCookie('uid')}
));
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


