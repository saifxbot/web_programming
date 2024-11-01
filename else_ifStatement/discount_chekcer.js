// Function to check discount
function checkDiscount() {
    // Get the payment total from the text field
    let paymentTotal = parseFloat(document.getElementById('paymentTotal').value);
  
    let discount;
  
    // Check discount amount based on payment total
    if (paymentTotal > 300) {
      discount = 4;
    } else if (paymentTotal > 100) {
      discount = 2;
    } else {
      discount = 0;
    }
  
    // Display the discount result in the browser using if-else
    let resultElement = document.getElementById('discountResult');
    if (discount > 0) {
      resultElement.innerText = "Discount: " + discount + "%";
    } else {
      resultElement.innerText = "No discount available";
    }
  }
  