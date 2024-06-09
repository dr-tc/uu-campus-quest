function validateNumbers() {
    // Prevent form submission
    event.preventDefault();
    
    // Get the values from the input fields
    var num1 = document.getElementById('number1').value;
    var num2 = document.getElementById('number2').value;
    var num3 = document.getElementById('number3').value;
    
    // Convert inputs to numbers
    num1 = Number(num1);
    num2 = Number(num2);
    num3 = Number(num3);

    // Predefined correct values
    var correctNum1 = 5;
    var correctNum2 = 10;
    var correctNum3 = 15;

    // Check if the input numbers match the correct values
    if (num1 === correctNum1 && num2 === correctNum2 && num3 === correctNum3) {
        // Show the special code
        document.getElementById('special-code').innerText = 'XYZ123';
        document.getElementById('result').style.display = 'block';
    } else {
        alert('Incorrect numbers. Please try again.');
    }
}
