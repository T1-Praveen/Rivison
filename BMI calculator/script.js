document.getElementById('calculate').addEventListener('click', calculateBMI);

function calculateBMI() {
    const heightInput = document.getElementById('heightInput');
    const weightInput = document.getElementById('weightInput');
    const result = document.getElementById('result');

    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    if (isNaN(height) || isNaN(weight)) {
        result.textContent = 'Please enter valid numbers.';
        return;
    }

    const bmi = (weight / Math.pow(height / 100, 2)).toFixed(2);
    let bmiCategory;

    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi <= 24.9) {
        bmiCategory = 'Ideal';
    } else if (bmi <= 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obesity';
    }

    result.textContent = `Your BMI is ${bmi} (${bmiCategory})`;
}