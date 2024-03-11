function countFactors() {
    const numberInput = document.getElementById('numberInput').value;
    const factorCount = document.getElementById('factorCount');

    // Convert input value to a number
    const number = parseInt(numberInput);

    // Check if the input is a valid number
    if (!isNaN(number)) {
        let count = 0;
        for (let i = 1; i <= number; i++) {
            if (number % i === 0) {
                count++;
            }
        }
        factorCount.textContent = `The number ${number} has ${count} factors.`;
    } else {
        factorCount.textContent = 'Please enter a valid number.';
    }
}
