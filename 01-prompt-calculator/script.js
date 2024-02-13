const main = () => {
  const output = document.getElementById('output');
  const operation = prompt('Select a number for your chosen operation: \n(1) Add \n(2) Subtract \n(3) Multiply \n(4) Divide');
  
  // Error validation #2
  if (!operation) {
    output.textContent = 'You pressed Cancel.';
    return;
  } else if (operation !== '1' &&
              operation !== '2' &&
              operation !== '3' &&
              operation !== '4') {
    output.textContent = 'Invalid Operation.';
    return;
  }

  // Ask for the two numbers
  const num1 = prompt('Enter the first number:');

  if (!num1) {
    output.textContent = 'You pressed Cancel.';
    return;
  }

  const num2 = prompt('Enter the second number:');

  if (!num2) {
    output.textContent = 'You pressed Cancel.';
    return;
  }

  // Calculate and display the result
  switch (operation) {
    case '1':
      output.textContent = `${num1} plus ${num2} is ${add(num1, num2).sum}`;
      break;
    case '2':
      output.textContent = `${num1} minus ${num2} is ${subtract(num1, num2).difference}`;
      break;
    case '3':
      output.textContent = `${num1} times ${num2} is ${multiply(num1, num2).product}`;
      break;
    case '4':
      const division = divide(num1, num2);
      output.textContent = `${num1} divided by ${num2} is ${division.quotient} remainder ${division.remainder}`;
      break;
  }
}

// Functions
const add = (num1, num2) => {
  return {
    sum: parseInt(num1) + parseInt(num2)
  };
};

const subtract = (num1, num2) => {
  return {
    difference: parseInt(num1) - parseInt(num2)
  };
};

const multiply = (num1, num2) => {
  return {
    product: parseInt(num1) * parseInt(num2)
  };
};

const divide = (num1, num2) => {
  const calculation = parseInt(num1) / parseInt(num2);

  if (calculation >= 0) {
    return {
      quotient: Math.floor(calculation),
      remainder: Math.abs(parseInt(num1) % parseInt(num2))
    };
  } else {
    return {
      quotient: Math.floor(calculation),
      remainder: Math.abs(parseInt(num1) % parseInt(num2))
    };
  }
};

main();