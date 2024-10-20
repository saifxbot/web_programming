
function thisDay() {

    const today = new Date();
    
 
    const dateString = today.toDateString();

    const dateField = document.getElementById('dateField');
    dateField.textContent = `Today's Date: ${dateString}`;
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('showDateButton');
    button.addEventListener('click', thisDay);
  });
  