$(document).ready(function(){
	$("#username").focus();

	//set default values for username and password
	var username = "al";
	var password = "passme";
	var user;
	var pass;
	var username_valid = false;
	var password_valid = false;
	var errorMsg = "";
	
	//grab the data input by user on CLICK of the button
	$("#submitBTN").click(function(){
		username_valid = false;
		password_valid = false;
		errorMsg = "";

		user = $("#username").val();
		pass = $("#password").val();

		//console.log(user);
		//console.log(pass);

		validate();

	});

	//check if the username and password from the user input match the defaults
function validate(){
	if(user == username){
		username_valid = true;
	}else{
		username_valid = false;
		errorMsg = "Username is incorrect";
	}

	if(pass == password){
		password_valid = true;
	}else{
		password_valid = false;
		if(errorMsg != ""){
			errorMsg = errorMsg + " & ";
		}

		errorMsg = errorMsg + "Password is incorrect";
	}

	if(username_valid && password_valid){
		//alert("Welcome");
		$('#login').submit();
	}else{
		//alert("try again");
		$("#err").html(errorMsg)
		$("#err").fadeIn();
	}
}


});