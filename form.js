//Purpose: To check the data typed by a user in a web form
//Programmer: David Fenton
//Date: August 2017

function validate() {
	var emailOK = checkEmail();
	var amountOK = checkAmount();
	var radioOK = checkRadio();
	var genderOK = checkGender();
	var dropdownOK = checkDropdown();
	var textareaOK = checkTextarea();
	var checkboxOK = checkCheckbox();
	
	if (emailOK && radioOK && genderOK && dropdownOK && textareaOK && checkboxOK)
	{
		alert('Everything looks good. Sending the form for review');
		document.getElementById("formOne").style.display="none";
		document.getElementById("success").style.display="block";
	}
}

function checkEmail()
{
	var email = document.getElementById("email").value;
	if ( email == '' ) 
	{
		//document.getElementById("email").style.backgroundColor='red';
		document.getElementById("emailError").innerHTML = 'eMail address cannot be empty';
		return false;
	}
	else
	{
		
		alert("Your email address is " +  email);
		document.getElementById("emailError").innerHTML = '';
		return true;
	}
}

function checkAmount()
{
	var amount = document.getElementById("amount").value;
	if ( amount == 0 || amount == '') 
	{
		//document.getElementById("amount").style.backgroundColor='red';
		document.getElementById("amountError").innerHTML = 'amount cannot be zero';
		return false;
	}
	else
	{
		alert("You are paying an amount of $ " +  amount);
		document.getElementById("amountError").innerHTML = '';
		return true;
	}
}

function checkRadio()
{
	var payments = document.getElementsByName("payment");
	//Length is how many radio buttons are in the group named "payment".
	var paymentsLength = payments.length;
	
	//Which payment option did they choose?
	var paymentChosen = '';
	
	//The loop continues while the variable called i is less than 
	//the length of the radio buttons array "payments[ ]".
	for (var i = 0; i < paymentsLength; i++) 
	{	
		if (payments[i].checked) 
		{
			paymentChosen = payments[i].value;
			alert("You want to pay by " +  paymentChosen);
		}
	}
	
	if (paymentChosen=='')
	{
		document.getElementById("paymentError").innerHTML = 'Payment option must be selected';
		return false;
	}
	else
	{
		document.getElementById("paymentError").innerHTML = '';
		return true;
	}
}

function checkGender()
{
	var genders = document.getElementsByName("gender");
	//Length is how many radio buttons are in the group named "gender".
	var gendersLength = genders.length;
	
	//Which gender option did they choose?
	var gender = '';
	
	//The loop continues while the variable called i is less than 
	//the length of the radio buttons array "genders[ ]".
	for (var i = 0; i < gendersLength; i++) 
	{	
		if (genders[i].checked) 
		{
			gender = genders[i].value;
			alert("Your gender is " +  gender);
		}
	}
	
	if (gender == '')
	{
		document.getElementById("genderError").innerHTML = 'Please choose a gender';
		return false;
	}
	else
	{
		document.getElementById("genderError").innerHTML = '';
		return true;
	}
}

function checkDropdown()
{
	var hearAbout = document.getElementById("hearAbout").value;
	if (hearAbout=='Choose')
	{
		document.getElementById("hearAboutError").innerHTML = 'Select how you heard about us';
		return false;
	}
	else
	{
		alert("You said you heard about us through " +  hearAbout)
		document.getElementById("hearAboutError").innerHTML = '';
		return true;
	}
}

function checkTextarea()
{
	var comments = document.getElementById("comments").value;
	//if the user didn't make a comment, the the value of the comments teaxtarea
	//will be empty and so have a string length of zero
	if ( comments.length == 0 ) 
	{
		//document.getElementById("comments").style.backgroundColor='red';
		document.getElementById("commentError").innerHTML = 'Please make a comment';
		return false;
	}
	else
	{
		alert("You commented: " +  comments)
		document.getElementById("commentError").innerHTML = '';
		return true;
	}
}

function checkCheckbox()
{
	var terms = document.getElementById("cbTerms").checked;
	//if cbTerms has been ticked it will return a value of true to the variable 'terms'
	//this can be used as the if statement conditional (true or false)
	if (terms)
	{
		alert("You agreed to the Terms and Conditions")
		document.getElementById("termsError").innerHTML = '';
		return true;
	}
	else
	{
		document.getElementById("termsError").innerHTML = 'You need to agree with the terms.';
		return false;
	}
}
