var firstNumber;
		var secondNumber;
		var step = 0;
		var operation;
		var result = 0;

		var numArray = [];
		var secondNumberArr = [];

		var display = document.getElementById('display');

		function getNumber(num) {
		
			if (step === 0 || step === 1) {
			num1();
			function num1(){
				numArray.push(num);
				step = 1;
				firstNumber = Number(numArray.join(''));
				document.getElementById('display').value = firstNumber;
				return firstNumber;
				}
			} 
			else if (step === 2) {
			num2();
			function num2(){
				secondNumberArr.push(num);
				secondNumber = Number(secondNumberArr.join(''));
				document.getElementById('display').value += secondNumber;
				return secondNumber;
				}
			}
		}
		var num1 = num1();
		var num2 = num2();
		function getOperator(operator) {
			step = 2;
			document.getElementById('display').value += operator;
			operation = operator;
		}

		function calculateResult(num1,num2) {
			console.log('first number', firstNumber, 'second number', secondNumber)
			if (operation == '+') {
				result = firstNumber + secondNumber;
				display.value = result;
			} 
			else if (operation == '-') {
				result = firstNumber - secondNumber;
				display.value = result;
			} 
			else if (operation == '*') {
				result = firstNumber * secondNumber;
				display.value = result;
			} 
			else if (operation == '/') {
				result = firstNumber / secondNumber;
				display.value = result;
			}
			return result;
		}

		function clearDisplay() {
			display.value = 0;
			firstNumber = null;
			secondNumber = null;
			step = 0;
			operation = null;
			result = 0;
			numArray = [];
			secondNumberArr = [];
		}