// Function to hide the paragraph by setting visibility to 'hidden'
function hideParagraph() {
    document.getElementById('hide').style.visibility = 'hidden';
}

// Function to show the paragraph by setting visibility to 'visible'
function showParagraph() {
    document.getElementById('hide').style.visibility = 'visible';
}

// Adding event listeners via JavaScript
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('seek').addEventListener('mouseover', showParagraph);
    document.getElementById('hide').addEventListener('mouseover', hideParagraph);
});
