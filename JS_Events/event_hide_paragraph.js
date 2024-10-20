function hideParagraph() {
    document.getElementById('hide').style.visibility = 'hidden';
}

function showParagraph() {
    document.getElementById('hide').style.visibility = 'visible';
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('seek').addEventListener('mouseover', showParagraph);
    document.getElementById('hide').addEventListener('mouseover', hideParagraph);
});

