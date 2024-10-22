function calculateNameLength() {
    const name = document.getElementById('nameInput').value;
    const nameLength = name.length;
    document.getElementById('LengthResult').innerHTML = `The length of your name is: ${nameLength} characters.`;
}
