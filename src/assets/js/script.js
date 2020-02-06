// Store data
var product = 'The data that I want to store for later.';
localStorage.setItem('myDataKey', product);

// Get data
var data = localStorage.getItem('myDataKey');

// const prod = document.getElementById('product').innerHTML = product

// Remove data
localStorage.removeItem('myDatakey');