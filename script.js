// Prices for the pizza order
const SIZE_PRICES = { small: 8, medium: 10, large: 13 };
const TOPPING_PRICE = 2;
const DELIVERY_PRICE = 5;

// Grab the form and the element where we'll show the total
const form = document.getElementById("pizza-order-form");
const totalDisplay = document.getElementById("total");
const deliveryCheckbox = document.getElementById("delivery");
const sizeSelect = document.getElementById("size");

// Calculates the total cost based on the selected size, toppings, and delivery
function calculateTotal(size, selectedToppings, isDelivery) {
  let total = SIZE_PRICES[size] + selectedToppings.length * TOPPING_PRICE;
  if (isDelivery) {
    total += DELIVERY_PRICE;
  }
  return total;
}

// Runs when the user submits the form
form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  // Get all checked topping checkboxes
  const selectedToppings = form.querySelectorAll('input[name="topping"]:checked');

  // Calculate the total using the current selections
  const total = calculateTotal(sizeSelect.value, selectedToppings, deliveryCheckbox.checked);

  // Show the total on the page, formatted as currency
  totalDisplay.textContent = `Total: $${total.toFixed(2)}`;
});
