window.onload = function()	{
		//This is the start of the slideshow code.
		
	//This is the onclick function for going forwards	
	document.getElementById('forwardButton').onclick = function()	{
		rightInterval = window.setInterval(function()	{
			hideBox();
			leftProperty++;
			endHere++;
		},1);
		rightIntervalTwo = window.setInterval(function()	{
			showBox();
			leftPropertyTwo++;
			endHereTwo++;
		},1);
	}	
		
		//boxArray is where I store all the ids for the colored boxes
		var boxArray = [document.getElementById('box1'),document.getElementById('box2'),document.getElementById('box3'),document.getElementById('box4'),document.getElementById('box5'),document.getElementById('box6')];
		
		//currentBox is the currently-displayed colored box,and nextBox is the box to be displayed after currentBox.
		var currentBox = 0;
		var nextBox = 1;
		//The following two count the distance from spot to spot.
		var calcLength = 449;//Center to right
		var calcLengthTwo = 456;//Left to center
		
		//endHere is the variable that stores the number which equates to the left value that I want to attach to the currentBox,endHereTwo does the same for the nextBox.
		var endHere = 0;//446
		var endHereTwo = 0;//456
		
		//Start: Variables for the showBox function
		//These are the variables to contain the setIntervals when I call them(rightInterval for the hideBox function,and righIntervalTwo for the showBox function.).
		var rightInterval;
		var rightIntervalTwo;
		
		//leftProperty is where I store the value I want to attach to currentBox's style.left property,leftProperty does the same for nextBox's style.left property.
		var leftProperty = 355;
		var leftPropertyTwo = -205;
		
		
		//This hides the current box
		function hideBox()	{
			boxArray[currentBox].style.left = leftProperty + "px";
			if(endHere == 446)	{
				stopRight();
				boxArray[currentBox].style.left = -101 + "px";
				endHere = 0;
			};
		}
		
		
		//This shows the next box
		function showBox()	{
			boxArray[nextBox].style.left = leftPropertyTwo + "px";
			if(endHereTwo == 456)	{
				stopRightTwo();
				endHereTwo = 0;
				findNext();
			};
		}
		
		
		//This is the clearInterval for the hideBox function
		function stopRight()	{
			window.clearInterval(rightInterval);
		}
		
		
		//This is the clearInterval for the showBox function.
		function stopRightTwo()	{
			window.clearInterval(rightIntervalTwo);
			whenToUpdate = true;
		}
		
		
		//This adds to the 'current' box and the 'next' box counters to find the next two boxes to move.
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
//currentBox now equals 0,but with purple currently showing,it ignores the purple and hides an already-hidden blue and skips to red next time I click it
}