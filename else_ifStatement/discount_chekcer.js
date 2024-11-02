function checkDiscount() {
    let paymentTotal = parseFloat(document.getElementById('paymentTotal').value);
    let discount;
  
    if (paymentTotal > 300) {
      discount = 4;
    } else if (paymentTotal > 100) {
      discount = 2;
    } else {
      discount = 0;
    }
  
    let resultElement = document.getElementById('discountResult');
    if (discount > 0) {
      resultElement.innerText = "Discount: " + discount + "%";
    } else {
      resultElement.innerText = "No discount available";
    }
  }
  