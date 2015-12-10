var fruitMarket = angular.module("fruitMarket", []);
fruitMarket.controller("MainController", function($scope) {

/****************

 * Fruit Values *

 ****************/

var appleMin = 10,
		appleMax = 20;

$scope.applePrice = randomVal(appleMin, appleMax);

var orangeMin = 50,
		orangeMax = 10;

$scope.orangePrice = randomVal(orangeMin, orangeMax);

var bananaMin = 200,
		bananaMax = 30;

$scope.bananaPrice = randomVal(bananaMin, bananaMax);

//function assign's random value of fruit
function randomVal(min, max) {
	return Math.floor((Math.random() * (max - min)) + min);
}

//Assign New Fruit Prices and Store Values
$scope.newPrices = function() {

	//Assign Apple Price
	$scope.applePrice = randomVal(appleMin, appleMax);

	//Assign Orange Price
	$scope.orangePrice = randomVal(orangeMin, orangeMax)

	//Assign Banana Price
	$scope.bananaPrice = randomVal(bananaMin, bananaMax);

}


/************************

 * Buy / Sell Mechanics *

 ************************/

var appleCount = 0;

var orangeCount = 0;

var bananaCount = 0;

$scope.myCash = 25;



// Update label text to match variable values
function updateMyStatus() {
	document.getElementById("appleSellValue").innerHTML = "$" + (appleCount * $scope.applePrice);

	document.getElementById("appleCount").innerHTML = appleCount;

	document.getElementById("orangeSellValue").innerHTML = "$" + (orangeCount * $scope.orangePrice);

	document.getElementById("orangeCount").innerHTML = orangeCount;

	document.getElementById("bananaSellValue").innerHTML = "$" + (bananaCount * $scope.bananaPrice);

	document.getElementById("bananaCount").innerHTML = bananaCount;
}

// Mathmatical equation to purchase fruit, deducting the correct amount of money from "myCash", adding to total fruit
$scope.buyFruit = function(amount) {

	if (document.getElementById("appleSelect").checked) {
		console.log(amount);
		if (amount != 0 && (amount * $scope.applePrice) <= $scope.myCash) {
			$scope.myCash -= amount * $scope.applePrice;
			appleCount += amount;
		}
		else if (amount == 0) {
			appleCount += Math.floor($scope.myCash / $scope.applePrice);
			$scope.myCash -= (Math.floor($scope.myCash / $scope.applePrice)) * $scope.applePrice;
		}
	}

	if (document.getElementById("orangeSelect").checked) {
		if (amount != 0 && (amount * $scope.orangePrice) <= $scope.myCash) {
			$scope.myCash -= amount * $scope.orangePrice;
			orangeCount += amount;
		}
		else if (amount == 0) {
			orangeCount += Math.floor($scope.myCash / $scope.orangePrice);
			$scope.myCash -= (Math.floor($scope.myCash / $scope.orangePrice)) * $scope.orangePrice;
		}
	}

	if (document.getElementById("bananaSelect").checked) {
		if (amount != 0 && (amount * $scope.bananaPrice) <= $scope.myCash) {
			$scope.myCash -= amount * $scope.bananaPrice;
			bananaCount += amount;
		}
		else if (amount == 0) {
			bananaCount += Math.floor($scope.myCash / $scope.bananaPrice);
			$scope.myCash -= (Math.floor($scope.myCash / $scope.bananaPrice)) * $scope.bananaPrice;
		}
	}
	updateMyStatus();
}



// Mathmatical equation to sell fruit, adding the correct amount of money to "myCash", deducting from total fruit

$scope.sellFruit = function(amount) {

	if (document.getElementById("appleSelect").checked) {
		if (amount == 1 && appleCount > 0) {
			$scope.myCash += amount * $scope.applePrice;
			appleCount -= amount;
		}
		else if (amount == 10 && appleCount >= 10) {
			$scope.myCash += amount * $scope.applePrice;
			appleCount -= amount;
		}
		else if(amount == 0 && appleCount > 0) {
			$scope.myCash += appleCount * $scope.applePrice;
			appleCount = 0;
		}
	}

	if (document.getElementById("orangeSelect").checked) {
		if(amount == 1 && orangeCount > 0) {
			$scope.myCash += amount * $scope.orangePrice;
			orangeCount -= amount;
		}
		else if (amount == 10 && orangeCount >= 10) {
			$scope.myCash += amount * $scope.orangePrice;
			orangeCount -= amount;
		}
		else if (amount == 0 && orangeCount > 0) {
			$scope.myCash += orangeCount * $scope.orangePrice;
			orangeCount = 0;
		}
	}

	if (document.getElementById("bananaSelect").checked) {
		if (amount == 1 && bananaCount > 0) {
			$scope.myCash += amount * $scope.bananaPrice;
			bananaCount -= amount;
		}
		else if (amount == 10 && bananaCount >= 10) {
			$scope.myCash += amount * $scope.bananaPrice;
			bananaCount -= amount;
		}
		else if (amount == 0 && bananaCount > 0) {
			$scope.myCash += bananaCount * $scope.bananaPrice;
			bananaCount = 0;
		}
	}
	updateMyStatus();
}



/**************

 * Day Values *

 **************/

$scope.dayCount = 1,

		appleArray = [],

		orangeArray = [],

		bananaArray = [];


//Change the daily value of fruit, also add to the "dayCount"
$scope.nextDay = function() {
  $scope.dayCount++;
	$scope.newPrices();

  if (appleCount != 0) {
  	appleArray.push(appleCount);
  	if (appleArray.length === 6) {
  		appleArray.sort(function(a, b){return a-b});
  		badApple = (appleArray[appleArray.length - 1] - appleArray.shift());
			appleCount = 0;
  	}
  	console.log("Apple array: " + appleArray);
	}

	else if (appleCount == 0) {
		appleArray.length = 0;
		console.log("Apple array: " + appleArray);
	}

//oranges
  if (orangeCount != 0) {
  	orangeArray.push(orangeCount);
  	if (orangeArray.length === 4) {
  		orangeArray.sort(function(a, b){return a-b});
  		badOrange	=	 (orangeArray[orangeArray.length - 1] - orangeArray.shift());
			orangeCount = 0;
  	}
  	console.log("Orange Array: " + orangeArray);
	}

	else if (orangeCount == 0) {
		orangeArray.length = 0;
		console.log("Orange Array: " + orangeArray);
	}

//banana
  if (bananaCount != 0) {
  	bananaArray.push(bananaCount);
  	if (bananaArray.length === 2) {
  		bananaArray.sort(function(a, b){return a-b});
  		badBanana	=	(bananaArray[bananaArray.length - 1] - bananaArray.shift());
			bananaCount = 0;
  	}
  	console.log("Banana array: " + bananaArray);
	}

	else if (bananaCount == 0) {
		bananaArray.length = 0;
		console.log("Banana Array: " + bananaArray);
	}
	updateMyStatus();
}

});
