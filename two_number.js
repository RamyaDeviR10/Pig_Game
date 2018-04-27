console.log('test Number');

var totalNumbers ;
var loopCount =0;
var targetNumber;
var numbers = new Array();
var setVariable =0;
var changeVariable =1;
var matchFound = false;

function addFields() 
	{
		document.getElementById ('addFields').style.display="none";
		document.getElementById ('target').style.display ="block";
		totalNumbers = document.getElementById('count').value;
		var inputs = document.getElementById("inputs");
          while (inputs.hasChildNodes()) 
			{
                inputs.removeChild(inputs.lastChild);
			}
            for (i=0;i<totalNumbers;i++)
				{
                inputs.appendChild(document.createTextNode("Number " + (i+1)));
                var input = document.createElement("input");
                input.type = "text";
                input.id = "Number" + i;
                inputs.appendChild(input);	
				console.log(input);				
                inputs.appendChild(document.createElement("br"));									
				}	
		document.getElementById ('submit').style.display ="block";
	
	}
	
	function submit()
	{	
		targetNumber = document.getElementById('target').value;
		for(i=0;i<totalNumbers;i++)
		{
		numbers[i]=document.getElementById('Number'+i).value;
		console.log(numbers[i]);
		}
		while(totalNumbers!=0)
		{
			totalNumbers = totalNumbers-1;
			loopCount = loopCount + totalNumbers;
		}
				
		for(i=1;i<=loopCount;i++)
		{   
			var variable1 = numbers[setVariable];
			var variable2 = numbers[changeVariable];
			var sum = Number(variable1) + Number(variable2);
			console.log("sum"+sum);
			if (sum == targetNumber)
			{
			   document.getElementById("result").innerHTML ="Result :" + setVariable + "," + changeVariable;			   
			   matchFound = true;
			   break;
			}
			if(changeVariable+1 == numbers.length)
			{
			setVariable = setVariable+1;
			changeVariable = setVariable+1;
						}
			else { changeVariable++;}		 
			
		}
		
		if(matchFound == false) {document.getElementById("result").innerHTML ="Result : Sum doesnt match";}
	}
