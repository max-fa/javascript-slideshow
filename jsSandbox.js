window.onload = function()	{
	//This is the start of the slideshow code.
		var boxArray = [document.getElementById('box1'),document.getElementById('box2'),document.getElementById('box3'),document.getElementById('box4'),document.getElementById('box5'),document.getElementById('box6')];
		
	
//Start: Targeting section of code,currentBox is the current box while nextBox is pretty self-explanatory.	
		var currentBox = 0;
		var nextBox = 1;
		//This hides the current box
		function hideBox(box)	{
			box.style.display = "none";
		}
		//This shows the next box
		function showBox(box)	{
			box.style.display = "block";
		}
		//This one combines the two functions for hiding and showing boxes
		function moveAlong()	{
			hideBox(boxArray[currentBox]);
			showBox(boxArray[nextBox]);
		}
		//This adds to the 'current' box and the 'next' box counters.
		function findNext()	{
		//currentBox takes an initial value of zero and keeps on increasing it 'till it reaches 4,it then restarts to zero where it will hide the blue box as its one-ahead friend nextBox show red 
			if (currentBox < boxArray.length - 1)	{ 
				currentBox++
			} else	{
				currentBox = 0;
			};
		//nextBox takes an initial value of one and keeps increasing it 'till it reaches the last element of the array and shows the last element,at the same time currentBox equals the penultimate element of the array and hides it,
		//,then on next click nextBox,having restarted to 0,shows the first array item while currentBox,equalling the last element,hides it.
		//and finally,nextBox continues by showing red while currentBox,now equalling 0, hides blue.
			if (nextBox < boxArray.length - 1)	{ //now:4 back then: 3
				nextBox++;
			} else	{
				nextBox = 0;
			};
		}
		


//These are my observations on the slidewhow code on the next two lines
//0,1,click,hide,show,check 1,2,click,hide,show,check 2,3,click,hide,show,check 3,4,click,hide,show,check <-- yellow and purple  4,5
//currentBox now equals 0,but with purple currently showing it ignores the purple and hides an already-hidden blue and skips to red next time I click it
			
//End: Targeting section of code
	var limit = 450;	
	var leftProperty = 10;
	var boxToMove = boxArray[currentBox];
	//This is the variable for the setInterval for moving right
	var rightInterval;
	
	//This function moves the box right.
	function moveRight()	{
		boxArray[currentBox].style.left = leftProperty +  "px";
	}
	
	//This is the clearInterval for the moveRight function
	function stopRight()	{
		window.clearInterval(rightInterval);
		alert("It stopped.");
	}
	
	//This is the onclick function for going forwards	
	document.getElementById('forwardButton').onclick = function()	{
		rightInterval = window.setInterval(function()	{
			moveRight();
			leftProperty++;
			console.log("Hello World!");
		},1);
		var rightStopper = window.setTimeout(stopRight,5000);
	}
		
//This is the end of the slideshow code.












/*var one = alert(8 + 19 + 26 + 34 + 43 + 40 + 37 + 56 + 50);
			var two = alert(9 + 11 + 16 + 15 + 22 + 20 + 16 + 20 + 19);
			alert(8 + 19 + 26 + 34 + 43 + 40 + 37 + 56 + 50 + 9 + 11 + 16 + 15 + 22 + 20 + 16 + 20 + 19);*/


			/*My code
			switch (currentDisplay)	{
				case document.getElementById("box1"):
					hideBox(document.getElementById("box1"));
					showBox(document.getElementById("box2"));
					currentDisplay = document.getElementById("box2");
					break;
				case document.getElementById("box2"):
					hideBox(document.getElementById("box2"));
					showBox(document.getElementById("box3"));
					currentDisplay = document.getElementById("box3");
					break;
				case document.getElementById("box3"):
					hideBox(document.getElementById("box3"));
					showBox(document.getElementById("box4"));
					currentDisplay = document.getElementById("box4");
					break;
				case document.getElementById("box4"):
					hideBox(document.getElementById("box4"));
					showBox(document.getElementById("box5"));
					currentDisplay = document.getElementById("box5");
					break;
				case document.getElementById("box5"):
					hideBox(document.getElementById("box5"));
					showBox(document.getElementById("box1"));
					currentDisplay = document.getElementById("box1");
					break;
				default:
					alert("HELLO");
			}*/


		
			/*Dad's Stuff
			
			if(currentBox.style.display = "block" && counter < currentBoxberOfBoxes)	{ 
			
			
				currentBox.style.display = "none";
				currentBox = currentBox + 1;
				alert(currentBox);
				//currentBox.style.display = "block";

				counter++;
			}
			
			//for(i = 0; i < boxArray.length; i++)	{
				//alert('hello');
				//if(boxArray[i].style.display = "block")	{
				//	hideBox(boxArray[i]);
				//	console.log(boxArray[i]);
				//	showBox(boxArray[i + 1]);
				//	break;
				//} else	{
					//alert("Try Something Else.");
				//};
			//};	*/		
			
			
		
	
		
}

	
	//This is outside the onclick function