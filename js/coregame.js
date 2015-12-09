/****************

 * Fruit Values *

 ****************/

var appleMin = 10;

var appleMax = 20;

var applePrice;

var orangeMin = 50;

var orangeMax = 100;

var orangePrice;

var bananaMin = 200;

var bananaMax = 300;

var bananaPrice;

//function assign's random value of fruit 
function randomVal(min, max) {
	return Math.floor((Math.random() * (max - min)) + min);
}

//Assign New Fruit Prices and Store Values
function newPrices()
{
	
	//Assign Apple Price
							
	applePrice = randomVal(appleMin, appleMax);
	
	document.getElementById("appleCost").innerHTML = "$"+ applePrice;

	
	
	//Assign Orange Price
	
	orangePrice = randomVal(orangeMin, orangeMax)
	
	document.getElementById("orangeCost").innerHTML = "$"+ orangePrice;
	 

	
	//Assign Banana Price
	bananaPrice = randomVal(bananaMin, bananaMax);
	
	document.getElementById("bananaCost").innerHTML = "$"+ bananaPrice;

}



/************************

 * Buy / Sell Mechanics *

 ************************/

var appleCount = 0;

var orangeCount = 0;

var bananaCount = 0;

var myCash = 25;



// Update label text to match variable values
function updateMyStatus()
{
 
	document.getElementById("myCash").innerHTML = "$" + myCash;
 
	document.getElementById("appleSellValue").innerHTML = "$" + (appleCount * applePrice);
 
	document.getElementById("appleCount").innerHTML = appleCount;
 
	document.getElementById("orangeSellValue").innerHTML = "$" + (orangeCount * orangePrice);
 
	document.getElementById("orangeCount").innerHTML = orangeCount;
 
	document.getElementById("bananaSellValue").innerHTML = "$" + (bananaCount * bananaPrice);
 
	document.getElementById("bananaCount").innerHTML = bananaCount;




}

// Mathmatical equation to purchase fruit, deducting the correct amount of money from "myCash", adding to total fruit
function buyFruit(amount)
{
 
	if(document.getElementById("appleSelect").checked)
	{
  
		if(amount != 0 && (amount * applePrice) <= myCash)
		{
   
			myCash -= amount * applePrice;
   
			appleCount += amount;
  
		}
  
		else if(amount == 0)
		{
   
			appleCount += Math.floor(myCash / applePrice);
   
			myCash -= (Math.floor(myCash / applePrice)) * applePrice;
  
		}
 
	}
 

	if(document.getElementById("orangeSelect").checked)
	{
  
		if(amount != 0 && (amount * orangePrice) <= myCash)
		{
   
			myCash -= amount * orangePrice;
   
			orangeCount += amount;
  
		}
  
		else if(amount == 0)
		{
   
			orangeCount += Math.floor(myCash / orangePrice);
   
			myCash -= (Math.floor(myCash / orangePrice)) * orangePrice;
  
		}

	}
 

	if(document.getElementById("bananaSelect").checked)
	{
  
		if(amount != 0 && (amount * bananaPrice) <= myCash)
		{
   
			myCash -= amount * bananaPrice;
   
			bananaCount += amount;
  
		}
  
		else if(amount == 0)
		{
   
			bananaCount += Math.floor(myCash / bananaPrice);
   
			myCash -= (Math.floor(myCash / bananaPrice)) * bananaPrice;
  
		}
 
	}
 
	
	updateMyStatus();

}



// Mathmatical equation to sell fruit, adding the correct amount of money to "myCash", deducting from total fruit

function sellFruit(amount)
{
 
	if(document.getElementById("appleSelect").checked)
	{
  
		if(amount == 1 && appleCount > 0)
		{
   
			myCash += amount * applePrice;
   
			appleCount -= amount;
  
		}
  
		else if(amount == 10 && appleCount >= 10)
		{
   
			myCash += amount * applePrice;
   
			appleCount -= amount;
  
		}
  
		else if(amount == 0 && appleCount > 0)
		{
   
			myCash += appleCount * applePrice;
   
			appleCount = 0;
  
		}
 
	}
 

	if(document.getElementById("orangeSelect").checked)
	{
  
		if(amount == 1 && orangeCount > 0)
		{
   
			myCash += amount * orangePrice;
   
			orangeCount -= amount;
  
		}
  
		else if(amount == 10 && orangeCount >= 10)
		{
   
			myCash += amount * orangePrice;
   
			orangeCount -= amount;
  
		}
  
		else if(amount == 0 && orangeCount > 0)
		{
   
			myCash += orangeCount * orangePrice;
   
			orangeCount = 0;
  
		}
 
	}
 
	
	if(document.getElementById("bananaSelect").checked)
	{
  
		if(amount == 1 && bananaCount > 0)
		{
   
			myCash += amount * bananaPrice;
   
			bananaCount -= amount;
  
		}
  
		else if(amount == 10 && bananaCount >= 10)
		{
   
			myCash += amount * bananaPrice;
   
			bananaCount -= amount;
  
		}
  
		else if(amount == 0 && bananaCount > 0)
		{
   
			myCash += bananaCount * bananaPrice;
   
			bananaCount = 0;
  
		}
 
	}
 
	
	updateMyStatus();

}



/**************

 * Day Values *

 **************/

var dayCount = 1,
		
		appleArray = [],

		orangeArray = [],

		bananaArray = []; 


//Change the daily value of fruit, also add to the "dayCount"
function nextDay()
{
  dayCount += 1;
 
	document.getElementById("dayCount").innerHTML = dayCount;
 
	newPrices();
 
	

 
  if(appleCount != 0) 
  {

  	appleArray.push(appleCount);

  	if(appleArray.length === 6)
  	{

  			appleArray.sort(function(a, b){return a-b}); 				
  		
  		    badApple	=	 (appleArray[appleArray.length - 1] - appleArray.shift());
					
				  appleCount = 0;	
  		
  	}

  	console.log("Apple array: " + appleArray);

	} 

	else if (appleCount == 0)
	{

		appleArray.length = 0;

		console.log("Apple array: " + appleArray);

	}



//oranges
  if(orangeCount != 0) 
  {

  	orangeArray.push(orangeCount);

  	if(orangeArray.length === 4)
  	{

  			orangeArray.sort(function(a, b){return a-b}); 				
  		
  		    badOrange	=	 (orangeArray[orangeArray.length - 1] - orangeArray.shift());
					
				  orangeCount = 0;	
  		
  	}


  	console.log("Orange Array: " + orangeArray);

	} 

	else if (orangeCount == 0)
	{

		orangeArray.length = 0;

		console.log("Orange Array: " + orangeArray);

	}

//banana
  if(bananaCount != 0) 
  {

  	bananaArray.push(bananaCount);

  	if(bananaArray.length === 2)
  	{

  			bananaArray.sort(function(a, b){return a-b}); 				
  		
  		    badBanana	=	 (bananaArray[bananaArray.length - 1] - bananaArray.shift());
					
				  bananaCount = 0;	
  		
  	}


  	console.log("Banana array: " + bananaArray);

	} 

	else if (bananaCount == 0)
	{

		bananaArray.length = 0;

		console.log("Banana Array: " + bananaArray);

	}
	updateMyStatus();
}