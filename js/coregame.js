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

$scope.appleCount = 0;
$scope.orangeCount = 0;
$scope.bananaCount = 0;

$scope.myCash = 25;

$scope.selectedFruit;

// Mathmatical equation to purchase fruit, deducting the correct amount of money from "myCash", adding to total fruit
$scope.buyFruit = function(amount) {

	if ($scope.selectedFruit === "apple") {
		console.log(amount);
		if (amount != 0 && (amount * $scope.applePrice) <= $scope.myCash) {
			$scope.myCash -= amount * $scope.applePrice;
			$scope.appleCount += amount;
		}
		else if (amount == 0) {
			$scope.appleCount += Math.floor($scope.myCash / $scope.applePrice);
			$scope.myCash -= (Math.floor($scope.myCash / $scope.applePrice)) * $scope.applePrice;
		}
	}

	if ($scope.selectedFruit === "orange") {
		if (amount != 0 && (amount * $scope.orangePrice) <= $scope.myCash) {
			$scope.myCash -= amount * $scope.orangePrice;
			$scope.orangeCount += amount;
		}
		else if (amount == 0) {
			$scope.orangeCount += Math.floor($scope.myCash / $scope.orangePrice);
			$scope.myCash -= (Math.floor($scope.myCash / $scope.orangePrice)) * $scope.orangePrice;
		}
	}

	if ($scope.selectedFruit === "banana") {
		if (amount != 0 && (amount * $scope.bananaPrice) <= $scope.myCash) {
			$scope.myCash -= amount * $scope.bananaPrice;
			$scope.bananaCount += amount;
		}
		else if (amount == 0) {
			$scope.bananaCount += Math.floor($scope.myCash / $scope.bananaPrice);
			$scope.myCash -= (Math.floor($scope.myCash / $scope.bananaPrice)) * $scope.bananaPrice;
		}
	}
}



// Mathmatical equation to sell fruit, adding the correct amount of money to "myCash", deducting from total fruit

$scope.sellFruit = function(amount) {

	if ($scope.selectedFruit === "apple") {
		if (amount == 1 && $scope.appleCount > 0) {
			$scope.myCash += amount * $scope.applePrice;
			$scope.appleCount -= amount;
		}
		else if (amount == 10 && $scope.appleCount >= 10) {
			$scope.myCash += amount * $scope.applePrice;
			$scope.appleCount -= amount;
		}
		else if(amount == 0 && $scope.appleCount > 0) {
			$scope.myCash += $scope.appleCount * $scope.applePrice;
			$scope.appleCount = 0;
		}
	}

	if ($scope.selectedFruit === "orange") {
		if(amount == 1 && $scope.orangeCount > 0) {
			$scope.myCash += amount * $scope.orangePrice;
			$scope.orangeCount -= amount;
		}
		else if (amount == 10 && $scope.orangeCount >= 10) {
			$scope.myCash += amount * $scope.orangePrice;
			$scope.orangeCount -= amount;
		}
		else if (amount == 0 && $scope.orangeCount > 0) {
			$scope.myCash += $scope.orangeCount * $scope.orangePrice;
			$scope.orangeCount = 0;
		}
	}

	if ($scope.selectedFruit === "banana") {
		if (amount == 1 && $scope.bananaCount > 0) {
			$scope.myCash += amount * $scope.bananaPrice;
			$scope.bananaCount -= amount;
		}
		else if (amount == 10 && $scope.bananaCount >= 10) {
			$scope.myCash += amount * $scope.bananaPrice;
			$scope.bananaCount -= amount;
		}
		else if (amount == 0 && $scope.bananaCount > 0) {
			$scope.myCash += $scope.bananaCount * $scope.bananaPrice;
			$scope.bananaCount = 0;
		}
	}
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

	//apples
  if ($scope.appleCount != 0) {
  	appleArray.push($scope.appleCount);
  	if (appleArray.length === 6) {
  		appleArray.sort(function(a, b){return a-b});
  		badApple = (appleArray[appleArray.length - 1] - appleArray.shift());
			$scope.appleCount = 0;
  	}
  	console.log("Apple array: " + appleArray);
	}

	else if ($scope.appleCount == 0) {
		appleArray.length = 0;
		console.log("Apple array: " + appleArray);
	}

	//oranges
  if ($scope.orangeCount != 0) {
  	orangeArray.push($scope.orangeCount);
  	if (orangeArray.length === 4) {
  		orangeArray.sort(function(a, b){return a-b});
  		badOrange	=	 (orangeArray[orangeArray.length - 1] - orangeArray.shift());
			$scope.orangeCount = 0;
  	}
  	console.log("Orange Array: " + orangeArray);
	}

	else if ($scope.orangeCount == 0) {
		orangeArray.length = 0;
		console.log("Orange Array: " + orangeArray);
	}

	//banana
  if ($scope.bananaCount != 0) {
  	bananaArray.push($scope.bananaCount);
  	if (bananaArray.length === 2) {
  		bananaArray.sort(function(a, b){return a-b});
  		badBanana	=	(bananaArray[bananaArray.length - 1] - bananaArray.shift());
			$scope.bananaCount = 0;
  	}
  	console.log("Banana array: " + bananaArray);
	}

	else if ($scope.bananaCount == 0) {
		bananaArray.length = 0;
		console.log("Banana Array: " + bananaArray);
	}
	// updateMyStatus();
}

});
