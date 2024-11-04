function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

function isPalindrome() {
    let userWord = document.getElementById("userWord").value;
    let reversedWord = reverseString(userWord);
    let resultElement = document.getElementById("result");

    if (userWord === reversedWord) {
        resultElement.innerHTML = `The word "${userWord}" reversed is "${reversedWord}", and it is a palindrome.`;
    } else {
        resultElement.innerHTML = `The word "${userWord}" reversed is "${reversedWord}", and it is not a palindrome.`;
    }
}
