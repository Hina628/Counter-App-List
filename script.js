// Immediately Invoked Function Expression (IIFE) to avoid polluting the global scope
(function () {
  let counter = 0; // Initialize counter variable

  // Function to update the counter display
  const updateCounter = () => {
      document.getElementById("counter").textContent = counter;
  };

  // Function to increment the counter
  const increment = () => {
      counter++;
      updateCounter();
  };

  // Function to decrement the counter
  const decrement = () => {
      counter--;
      updateCounter();
  };

  // Function to reset the counter to zero
  const reset = () => {
      counter = 0;
      updateCounter();
  };

  // Adding event listeners to buttons
  document.getElementById("increment").addEventListener("click", increment);
  document.getElementById("decrement").addEventListener("click", decrement);
  document.getElementById("reset").addEventListener("click", reset);
})();
