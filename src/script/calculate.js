export const calculate = (operator, firstNumber, secondNumber) => {
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(firstNumber) + parseFloat(secondNumber);
      break;

    case '-':
      result = parseFloat(firstNumber) - parseFloat(secondNumber);
      break;

    case '/':
      result = parseFloat(firstNumber) / parseFloat(secondNumber);
      break;

    case '*':
      result = parseFloat(firstNumber) * parseFloat(secondNumber);
      break;

    default:
      break;
  }
  return result;
};
