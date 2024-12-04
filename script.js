// Piecewise function to convert human age to elf age
function evaluatePiecewise(x) {
    if (x < 12) {
        return 1.5 * x;
    } else if (x >= 12 && x < 20) {
        return 5.25 * x - 45;
    } else if (x >= 20 && x < 50) {
        return (44 * x) / 3 - 223.33;
    } else if (x >= 50) {
        return 10 * x;
    }
    return null; // Return null for invalid input
}

// Event listener for the form submit
document.getElementById('converterForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const inputX = parseFloat(document.getElementById('inputX').value);

    // Validate the input and run the conversion
    if (isNaN(inputX) || inputX <= 0) {
        document.getElementById('result').textContent = 'Invalid input. Please enter a positive number.';
        return;
    }

    const result = evaluatePiecewise(inputX);

    if (result !== null) {
        document.getElementById('result').textContent = result.toFixed(2);
    } else {
        document.getElementById('result').textContent = 'Error in conversion.';
    }
});
