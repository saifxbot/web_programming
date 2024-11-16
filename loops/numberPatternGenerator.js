document.getElementById("patternForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const number = parseInt(document.getElementById("numberInput").value);
    const patternDiv = document.getElementById("pattern");
  
    if (isNaN(number) || number <= 0) {
      patternDiv.textContent = "Please enter a valid positive number.";
      return;
    }
  
    let pattern = "";
    for (let i = 1; i <= number; i++) {
      for (let j = 1; j <= i; j++) {
        pattern += j;
      }
      pattern += "\n";
    }
  
    patternDiv.textContent = pattern;
  });
  