
function processTheForm() 
{
	//a variable to collect all the data together
	var theData = ""; 

	//--------look at the NAME INPUT------------------------------------------
	//create a variable to collect the value of the name input
	var whatName = document.getElementById("theName").value;
	//alert("Your Name is " + whatName);
	//concatenate the variable onto theData and concatenate a "<br>"
	//theData += "Your name is " +  whatName + "<br>";
	theData = theData + "Your name is " +  whatName + "<br>";

	//--------look at the AGE INPUT------------------------------------------
	//create a variable to collect the value of the age input
	var whatAge = document.getElementById("age").value;
	//concatenate the variable onto theData and concatenate a "<br>"
	theData = theData + "Your age is " +  whatAge + "<br>";

	var whatTravel = document.getElementById("travel").value;
	theData = theData + "Your service is " +  whatTravel + "<br>";
	
	var whatService = document.getElementById("favourite part").value;
	theData = theData + "Your favourite part of our service is " +  whatService  + "<br>";
	
	var whatTwotravel = document.getElementById("two").value;
	theData = theData + "Your think that " +  whatTwotravel + "<br>";
	
	var whatChose = document.getElementById("services").value;
	theData = theData + "your chose is " +  whatChose + "<br>";
	
	
	var whatsuggestions= document.getElementById("suggestions").value;
	theData = theData + "your suggestions is " +  whatsuggestions + "<br>";

if(whatName =='')
{
var erro="check your from"
document.getElementById("responses").innerHTML = erro;
}
else{

	document.getElementById("responses").innerHTML = theData;
	
}
}




