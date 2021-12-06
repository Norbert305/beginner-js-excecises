function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
	let randomNumber = Math.floor(Math.random()*4)+1
	for (let i = 0; i < 8; i++) {
		console.log(getColor(randomNumber))
	}
	var exampleColor = getColor(randomNumber);
	console.log(randomNumber, exampleColor)
}		

//call the function below with the number of students in the class and print on the console
console.log(getAllStudentColors());

