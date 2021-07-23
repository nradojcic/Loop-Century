// get the values from the page, call other functions
// Contoller function
function getValues() {
  // get values from the page
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  // validate input, parse into integers
  startValue = parseInt(startValue);
  endValue = parseInt(endValue);

  if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
    // generate numbers
    let numbers = generateNumbers(startValue, endValue);
    // display numbers
    displayNumbers(numbers);
  } else {
    alert("You must enter integers!");
  }
}

// generate numbers from startValue to endValue
// Logic function
function generateNumbers(startValue, endValue) {
  let numbers = [];

  // get all numbers from start to end value
  for (let index = startValue; index <= endValue; index++) {
    numbers.push(index);
  }

  return numbers;
}

// display the numbers and mark the even ones bold
// Disaplay or View function
function displayNumbers(numbers) {
  let templateRows = "";

  for (let index = 0; index < numbers.length; index++) {
    let className = "even";
    let number = numbers[index];

    // assign CSS classes
    if (number % 2 == 0) {
      className = "even";
    } else {
      className = "odd";
    }

    // construct a table row, and add it to others
    templateRows += `<tr><td class="${className}">${number}</td></tr>`;
  }

  // display the whole table
  document.getElementById("results").innerHTML = templateRows;
}
