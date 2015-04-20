window.onload = function()	{
		//This is the start of the slideshow code.
		
		//boxArray is where I store all the ids for the colored boxes
		var boxArray = [document.getElementById('box1'),document.getElementById('box2'),document.getElementById('box3'),document.getElementById('box4'),document.getElementById('box5'),document.getElementById('box6')];
		
		//currentBox is the currently-displayed colored box,and nextBox is the box to be displayed after currentBox.
		var currentBox = 0;
		var nextBox = 1;
		
		//Start: Variables for the hideBox function.
		//rightInterval is the variable where I will store the timer for moving the currently-displayed colored box to the right.	
		var rightInterval;
		
		//leftProperty is where I store the value I want to attach to currentBox's style.left property.
		var leftProperty = 351;
		
		//endHere is the variable that stores the number which equates to the left value that I want to attach to the colored boxes moving right.
		var endHere = 801;
		//End: Variables for the hideBox function
		
		//This hides the current box
		function hideBox()	{
			boxArray[currentBox].style.left = leftProperty +  "px";
			if(boxArray[currentBox].style.left === endHere + "px")	{
				stopRight();
				boxArray[currentBox].style.left = -700 + "px";
			};
		}
		
		//Start: Variables for the showBox function
		//rightIntervalTwo is the showBox equivalent of the rightInterval variable above(see line 15).
		var rightIntervalTwo;
		
		// leftPropertyTwo is the showBox equivalent of the leftProperty variable above(see line 18).
		var leftPropertyTwo = -700;
		
		//endHereTwo is the showBox equivalent of the  endHere variable above(see line 21).
		var endHereTwo =  251;
		//End: Variables for the showBox.
		
		//This shows the next box
		function showBox(box)	{
			boxArray[nextBox].style.left = leftPropertyTwo + "px";
			if(boxArray[nextBox].style.left === endHereTwo + "px")	{
				stopRightTwo();
			};
		}
		
		//This is the clearInterval for the hideBox function
		function stopRight()	{
			window.clearInterval(rightInterval);
		}
		
		//This is the clearInterval for the showBox function.
		function stopRightTwo()	{
			window.clearInterval(rightIntervalTwo);
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
	
	//This is the onclick function for going forwards	
	document.getElementById('forwardButton').onclick = function()	{
		rightInterval = window.setInterval(function()	{
			hideBox();
			leftProperty++;
		},1);
		
		rightIntervalTwo = window.setInterval(function()	{
			showBox();
			leftPropertyTwo++;
		},1);
	}	


//These are my observations on the slidewhow code on the next two lines
//0,1,click,hide,show,check 1,2,click,hide,show,check 2,3,click,hide,show,check 3,4,click,hide,show,check <-- yellow and purple  4,5
//currentBox now equals 0,but with purple currently showing,it ignores the purple and hides an already-hidden blue and skips to red next time I click it
}