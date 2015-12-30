function applyCheat() {
	var input = document.getElementById("cheatBox").value;
	switch (input) {
		case "irwinrar":
			myCash += 100000;
			updateMyStatus();
			document.getElementById("cheatBox").value = "valid"
			break;

		case "anappleaday":
			applePrice = 1;
			updateMyStatus();
			document.getElementById("cheatBox").value = "valid";
			break;

		case "orangeyaglad":
			orangePrice = 1;
			updateMyStatus();
			document.getElementById("cheatBox").value = "valid";
			break;

		case "bananarama":
			bananaPrice = 1;
			updateMyStatus();
			document.getElementById("cheatBox").value = "valid";
			break;

		default:
			document.getElementById("cheatBox").value = "invalid";
			break;
	}
}
