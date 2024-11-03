function passwordStrengthCheck() {
    const password = document.getElementById('passwordField').value;
    const result = document.getElementById('result');
    const specialCharPattern = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < 8) {
        result.textContent = 'Very weak';
    } else if (password.length > 10 && !specialCharPattern.test(password)) {
        result.textContent = 'Simple. Add some special characters';
    }else if (password.length >= 8 && specialCharPattern.test(password)) {
        result.textContent = 'Strong';
    } else {
        result.textContent = 'Moderate';
    }
}