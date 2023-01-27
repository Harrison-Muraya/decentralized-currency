// script.js

// Add event listener to the form
document.querySelector('form').addEventListener('submit', function(e) {
  // Prevent the form from submitting
  e.preventDefault();

  // Get the selected bank
  var selectedBank = document.querySelector('#banks').value;

  // Log the selected bank to the console
  console.log('Selected bank: ' + selectedBank);

  // Add code here to redirect the user to the selected bank's website
});
