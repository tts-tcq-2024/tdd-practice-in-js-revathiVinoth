function findDelimiter(inputString) {
  if (inputString.startsWith("//")) {
    const parts = inputString.split("\n");
    return {
      delimiter: parts[0].substring(2),
      numbers: parts[1]
    };
  }
  else {
    return {
      delimiter: ",",
      numbers: inputString
    };
  }
}

const splitNumbers = (inputString, delimiter) => {
  const inputNumberArray = inputString.split(new RegExp(`[${delimiter},\n]`));
  return inputNumberArray.map(num => parseInt(num)).filter(num => !isNaN(num));
}

function addNumbers(numbers) {
  return numbers.reduce((sum, num) => {
    if (num <= 1000) {
      sum += num;
    }
    return sum;
  }, 0);
}
const add = (inputString) => {
  if (inputString === "" || inputString === "0") {
    return 0;
  }
  const { delimiter, numbers: numbers } = findDelimiter(inputString)
  const inputNumber = splitNumbers(numbers, delimiter)
  console.log("number", inputNumber);
  return addNumbers(inputNumber)

}
module.exports = {
  add
}
