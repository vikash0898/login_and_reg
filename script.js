
var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");

var name = document.getElementById('name');
var email = document.getElementById('email');
var mnum = document.getElementById('mnum');
var pass = document.getElementById('pass');

function store(){
	localStorage.setItem('name', name.value);
	localStorage.setItem('email', email.value);
	localStorage.setItem('mnum', mnum.value);
	localStorage.setItem('pass', pass.value);
}

function check(){
	var storedEmail = localStorage.getItem('email');
	var storedPass = localStorage.getItem('pass');

	var userEmail = document.getElementById('log_email');
	var userPass = document.getElementById('log_pass');

	if(userEmail.value !== storedEmail || userPass.value !== storedPass){
		alert('Wrong email or password');
	}else {
		alert('you have successfully logged in!');
	}
}

function prevPass(){
	var storedPrevPass = localStorage.getItem('pass');
	var resetpass = document.getElementById('old_pass');

	if(resetpass.value == storedPrevPass){
		changePass();
	}
	else{
		alert('You have entered the wrong old password!');
	}

}

function changePass(){
 	var oldP=document.getElementById("old_pass").value;
 	var newP=document.getElementById("new_pass").value;
 	var confirmP =document.getElementById("confirm_pass").value;

 	if(oldP!=""&&newP!=""&&confirmP!=""){
   		if(oldP!=newP){
	 		if(newP==confirmP){
				alert('Password is sucessfully changed');
	   			return true;
	  		}
	  		else{
		 		alert("Confirm Password is not same as you new password.");
		 		return false;
	   		}
   		}
   		else{
   			alert(" This Is Your Old Password,Please Provide A New Password");
   			return false;
  		}
 	}
 	else{
  		alert("All Fields Are Required");
  		return false;
 	}
}

// function display(){

// 	var storedName = localStorage.getItem('name');
// 	var storedEmail = localStorage.getItem('email');
// 	var storedMnum = localStorage.getItem('mnum');
// 	var storedPass = localStorage.getItem('pass');

// 	document.write(storedName);

// }

function register() {
	x.style.left = "-400px";
	y.style.left = "50px";
	z.style.left = "110px";
}

function login() {
	x.style.left = "50px";
	y.style.left = "450px";
	z.style.left = "0";
}

function resetpass() {
	x.style.left = "50px";
	y.style.left = "450px";
	z.style.left = "0";
}

		
function allLetter(inputtxt){ 
    var letters = /^[A-Z][a-zA-Z0-9]{1,19}$/;
    if(inputtxt.value.match(letters))
      {
      return true;
      }
    else
      {
      alert('Please write name in proper format, first letter should be capital and numeric value not allowed');
      return false;
      }
}
	  
function ValidateEmail(inputText){
	var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if(inputText.value.match(mailformat))
		{
		return true;
		}
	else
		{
		alert('Please enter valid email adderss');
		return false;
		}
}

function phonenumber(inputtxt){
	var phoneno = /^[6-9][0-9]{9,12}$/;
	if(inputtxt.value.match(phoneno))
		{
			return true;
		}
	else
		{
			alert('Phone number should be 10 to 12 digits and only starts with 6,7,8,9 ');
			return true;
		}
}

function CheckPassword(inputtxt) { 
	var passw=  /^[A-Za-z]\w{6,14}$/;
	if(inputtxt.value.match(passw)) 
		{ 
			return true;
		}
	else
		{ 
			alert('password should be 7 to 15 characters which contain only characters, numeric digits, underscore and first character must be a letter');
			return false;
		}
}


