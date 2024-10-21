// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {
 function countClicks() {
        const h1Element = document.querySelector('h1');
        let clicksCount = parseInt(h1Element.getAttribute('data-clicks'));

        clicksCount++;
        h1Element.setAttribute('data-clicks', clicksCount);
        h1Element.textContent = `Button clicked ${clicksCount} times`;
    }
    document.getElementById('clickButton').addEventListener('click', countClicks);
});
