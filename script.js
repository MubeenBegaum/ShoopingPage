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

   // Get the discounted price element
   var discountedPriceElement = document.getElementById('discountedPrice');

   // Update the content of the discounted price element
   discountedPriceElement.innerText = '$' + discountedPrice.toFixed(2);
 });
