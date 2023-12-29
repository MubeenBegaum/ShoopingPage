// console.log('====================================');
// console.log("Connected");
// console.log('====================================');



document.addEventListener('DOMContentLoaded', function () {
  // Get the original price element
  var originalPriceElement = document.getElementById('originalPrice');

  // Extract the original price value
  var originalPrice = parseFloat(originalPriceElement.innerText.replace('$', ''));

  // Calculate the discounted price (70% of the original price)
  var discountedPrice = originalPrice * 0.65;

  // Round the decimal part up or down based on the condition
  var decimalPart = discountedPrice % 1;
  if (decimalPart <= 0.6) {
      discountedPrice = Math.floor(discountedPrice);
  } else {
      discountedPrice = Math.ceil(discountedPrice);
  }

  // Get the discounted price element
  var discountedPriceElement = document.getElementById('discountedPrice');

  // Update the content of the discounted price element
  discountedPriceElement.innerText = '$' + discountedPrice.toFixed(2);
});



     // Function to change the quantity
     function changeQuantity(amount) {
      var quantityElement = document.getElementById('quantity');
      var currentQuantity = parseInt(quantityElement.innerText, 10);
      var newQuantity = Math.max(currentQuantity + amount, 1); // Ensure quantity is at least 1
      quantityElement.innerText = newQuantity;
    }

    // Function to show the "Item added to cart!" message
    function addToCart() {
      var messageContainer = document.getElementById('message-container');
      messageContainer.style.display = 'block';
      setTimeout(function() {
        messageContainer.style.display = 'none';
      }, 2000); // Hide the message after 2 seconds
    }

    function selectCard(card) {
      // Remove 'selected' class from all cards
      const allCards = document.querySelectorAll('.card');
      allCards.forEach(c => c.classList.remove('selected'));

      // Add 'selected' class to the clicked card
      card.classList.add('selected');
    }
