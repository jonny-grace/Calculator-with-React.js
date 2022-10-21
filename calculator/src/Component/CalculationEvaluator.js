

export function evaluate({currentNumber, previusNumber, options }) {
  const prev = parseFloat(previusNumber);
  const current = parseFloat(currentNumber);

  let result = "";
  if (isNaN(prev) && isNaN(current)) return "";
  switch (options) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "/":
      result = current / prev;
      break;
    default: 
  }

  return result.toString();
}

