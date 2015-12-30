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

var bananaMin = 30,
		bananaMax = 200;

$scope.bananaPrice = randomVal(bananaMin, bananaMax);

//function assign's random value of fruit
function randomVal(min, max) {
	return Math.floor((Math.random() * (max - min)) + min);
}

//Assign New Fruit Prices and Store Values
$scope.newPrices = function() {
	$scope.applePrice = randomVal(appleMin, appleMax);
	$scope.orangePrice = randomVal(orangeMin, orangeMax)
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

// function that creates new batches of fruit
function BatchFruit(numFruit, spoilageRate) {
	return {
		amount: numFruit,
		spoilTimer: spoilageRate
	}
}

// function that resets the $scope.fruitCount
function numFruitCheck(whichFruit, whichArray) {
	$scope[whichFruit + "Count"] = 0;
	for (var i = 0; i < whichArray.length; i++) {
		$scope[whichFruit + "Count"] += whichArray[i].amount;
	}
}

// function that handles buying of fruit batches
$scope.buyFruit = function(amount) {
	var maxAmount;

	//----APPLE HANDLER----//
	if ($scope.selectedFruit === "apple") {
		maxAmount = Math.floor($scope.myCash / $scope.applePrice);

		// return out of function if there isn't enough money
		if ((amount * $scope.applePrice > $scope.myCash) || $scope.applePrice > $scope.myCash) {
			return console.log("Insufficient funds.")
		}

		console.log((amount || maxAmount) + " apple(s) have been purchased.");

		if (amount) {
			$scope.myCash -= amount * $scope.applePrice;
			appleArray.push(BatchFruit(amount, 10));
		} else {
			$scope.myCash -= maxAmount * $scope.applePrice;
			appleArray.push(BatchFruit(maxAmount, 10));
		}
		numFruitCheck("apple", appleArray);
	}

	//----ORANGE HANDLER----//
	if ($scope.selectedFruit === "orange") {
		maxAmount = Math.floor($scope.myCash / $scope.orangePrice);

		// return out of function if there isn't enough money
		if ((amount * $scope.orangePrice > $scope.myCash) || $scope.orangePrice > $scope.myCash) {
			return console.log("Insufficient funds.")
		}

		console.log((amount || maxAmount) + " orange(s) have been purchased.");

		if (amount) {
			$scope.myCash -= amount * $scope.orangePrice;
			orangeArray.push(BatchFruit(amount, 5));
		} else {
			$scope.myCash -= maxAmount * $scope.orangePrice;
			orangeArray.push(BatchFruit(maxAmount, 5));
		}
		numFruitCheck("orange", orangeArray);
	}

	//----BANANA HANDLER----//
	if ($scope.selectedFruit === "banana") {
		maxAmount = Math.floor($scope.myCash / $scope.bananaPrice);

		// return out of function if there isn't enough money
		if ((amount * $scope.bananaPrice > $scope.myCash) || $scope.bananaPrice > $scope.myCash) {
			return console.log("Insufficient funds.")
		}

		console.log((amount || maxAmount) + " banana(s) have been purchased.");

		if (amount) {
			$scope.myCash -= amount * $scope.bananaPrice;
			bananaArray.push(BatchFruit(amount, 3));
		} else {
			$scope.myCash -= maxAmount * $scope.bananaPrice;
			bananaArray.push(BatchFruit(maxAmount, 3));
		}
		numFruitCheck("banana", bananaArray);
	}
}

// Mathmatical equation to sell fruit, adding the correct amount of money to "myCash", deducting from total fruit

$scope.sellFruit = function(amount) {
	var sellFruitAmount = amount || $scope[$scope.selectedFruit + "Count"];
	var currentFruitAmount;

	//----APPLE HANDLER----//
	if ($scope.selectedFruit === "apple") {

		// check to make sure the user has apples to sell
		if ($scope.appleCount === 0) {
			return console.log("No apples to sell.");
		}

		// loop through and sell the fruit through the batches on hand
		while (sellFruitAmount > 0) {

			// placeholder for the batch of fruit's total amount
			currentFruitAmount = appleArray[0].amount;
			appleArray[0].amount -= sellFruitAmount;
			sellFruitAmount -= currentFruitAmount;

			// if there is no more fruit left in the current batch, throw it out.
			if (appleArray[0].amount <= 0) {
				appleArray.shift();
			}
		}
		console.log((amount || "All of the") + " apple(s) have been deducted.");
		$scope.myCash += (amount || $scope.appleCount) * $scope.applePrice;
		numFruitCheck("apple", appleArray);
	}

	//----ORANGE HANDLER----//
	if ($scope.selectedFruit === "orange") {

		// check to make sure the user has oranges to sell
		if ($scope.orangeCount === 0) {
			return console.log("No oranges to sell.");
		}

		// loop through and sell the fruit through the batches on hand
		while (sellFruitAmount > 0) {

			// placeholder for the batch of fruit's total amount
			currentFruitAmount = orangeArray[0].amount;
			orangeArray[0].amount -= sellFruitAmount;
			sellFruitAmount -= currentFruitAmount;

			// if there is no more fruit left in the current batch, throw it out.
			if (orangeArray[0].amount <= 0) {
				orangeArray.shift();
			}
		}
		console.log((amount || "All of the") + " orange(s) have been deducted.");
		$scope.myCash += (amount || $scope.orangeCount) * $scope.orangePrice;
		numFruitCheck("orange", orangeArray);
	}

	//----BANANA HANDLER----//
	if ($scope.selectedFruit === "banana") {

		// check to make sure the user has bananas to sell
		if ($scope.bananaCount === 0) {
			return console.log("No bananas to sell.");
		}

		// loop through and sell the fruit through the batches on hand
		while (sellFruitAmount > 0) {

			// placeholder for the batch of fruit's total amount
			currentFruitAmount = bananaArray[0].amount;
			bananaArray[0].amount -= sellFruitAmount;
			sellFruitAmount -= currentFruitAmount;

			// if there is no more fruit left in the current batch, throw it out.
			if (bananaArray[0].amount <= 0) {
				bananaArray.shift();
			}
		}
		console.log((amount || "All of the") + " banana(s) have been deducted.");
		$scope.myCash += (amount || $scope.bananaCount) * $scope.bananaPrice;
		numFruitCheck("banana", bananaArray);
	}
}

/**************

 * Day Values *

 **************/

$scope.dayCount = 1,
		appleArray = [],
		orangeArray = [],
		bananaArray = [];

$scope.nextDay = function() {
  $scope.dayCount++;
	$scope.newPrices();

	//----APPLE HANDLER----//
	for (var i = 0; i < appleArray.length; i++) {
		appleArray[i].spoilTimer--;
		if (appleArray[i].spoilTimer === 0) {
			console.log("A batch of " + appleArray[i].amount + " apple(s) have been lost.");
			appleArray.shift();
			numFruitCheck("apple", appleArray);
			i--;
		}
	}

	//----ORANGE HANDLER----//
	for (var i = 0; i < orangeArray.length; i++) {
		orangeArray[i].spoilTimer--;
		if (orangeArray[i].spoilTimer === 0) {
			console.log("A batch of " + orangeArray[i].amount + " orange(s) have been lost.");
			orangeArray.shift();
			numFruitCheck("orange", orangeArray);
			i--;
		}
	}

	//----BANANA HANDLER----//
	for (var i = 0; i < bananaArray.length; i++) {
		bananaArray[i].spoilTimer--;
		if (bananaArray[i].spoilTimer === 0) {
			console.log("A batch of " + bananaArray[i].amount + " banana(s) have been lost.");
			bananaArray.shift();
			numFruitCheck("banana", bananaArray);
			i--;
		}
	}
	console.log("Total Fruit (Apples, Oranges, Bananas): " + $scope.appleCount + ", " + $scope.orangeCount + ", " + $scope.bananaCount);
}

});
