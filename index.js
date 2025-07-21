// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  const colors = ['blue', 'red', 'orange', 'pink', 'green'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // Implement the function to change background color
   document.body.style.backgroundColor = randomColor;
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
  // Implement the function to reset background color
}

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress(event) {
  const keyPressed = event.key;
  const keyPressDisplay = document.getElementById('keyPressDisplay');
  keyPressDisplay.textContent = `Key Pressed: ${keyPressed}`;
  // Implement the function to display key pressed
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput(event) {
  const paragraph = document.getElementById('textInputDisplay');
  paragraph.textContent = `You typed: ${event.target.value}`;

  // Implement the function to display user input

const colorButton = document.getElementById('changeColorButton');

colorButton.addEventListener('mouseover', () => {
  colorButton.style.backgroundColor = 'blue';
  });
}


// Attach Event Listeners

// Attach event listener to change background color when the button is clicked
document
  .getElementById('changeColorButton')
  .addEventListener('click', changeBackgroundColor)

// Attach event listener to reset background color when the body is double-clicked
document
  .getElementById('resetColorButton')
  .addEventListener('dblclick', resetBackgroundColor)

// Attach event listener to display key pressed when a key is pressed down
document.addEventListener('keydown', displayKeyPress)

// Attach event listener to display user input in real-time as they type
document.getElementById('textInput').addEventListener('input', displayUserInput)

colorButton.addEventListener('mouseout', () => {
  colorButton.style.backgroundColor = '';
});
