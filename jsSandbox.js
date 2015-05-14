window.onload = function()	{
	var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box2');
	var box3 = document.getElementById('box3');
	var box4 = document.getElementById('box4');
	var box5 = document.getElementById('box5');
	var box6 = document.getElementById('box6');
	
	var boxArray = [document.getElementById('box1'),document.getElementById('box2'),document.getElementById('box3'),document.getElementById('box4'),document.getElementById('box5'),document.getElementById('box6')];
	var centerToRight = 449;
	var leftToCenter = 456;
	
	var currentBox = 0;
	var nextBox = 1;
	
	var getLeft = window.getComputedStyle(boxArray[currentBox],null).getPropertyValue("left");
	console.log(getLeft);
	var leftOne = parseInt(getLeft);
	
	function someThing()	{
		function stop()	{
			clearInterval(firstInterval);
			counter = 0;
		}
		
		var counter = 0;
		
		var firstInterval = window.setInterval(function()	{
			boxArray[currentBox].style.left = leftOne + "px";
			leftOne++;
			counter++;
			if (counter == 446)	{
				stop();
				console.log("Too effective");
			};
		},1);
		
		
	}
	someThing();
	
	//This adds to the 'current' box and the 'next' box counters.
	function findNext()	{
	//currentBox takes an initial value of zero and keeps on increasing it 'till it reaches 4,it then restarts to zero where it will hide the blue box as its one-ahead friend nextBox show red 
		if (currentBox < boxArray.length - 1)	{ 
			currentBox++
		} else	{
			currentBox = 0;
		};
	//nextBox takes an initial value of one and keeps increasing it 'till it reaches the last element of the array and shows the last element,at the same time currentBox equals the penultimate element of the array and hides it,		//,then on next click nextBox,having restarted to 0,shows the first array item while currentBox,equalling the last element,hides it.
	//and finally,nextBox continues by showing red while currentBox,now equalling 0, hides blue.
		if (nextBox < boxArray.length - 1)	{
			nextBox++;
		} else	{
			nextBox = 0;
		};
		}
	//800
	//251
}