function isEven(num) {
	return num % 2 == 0;
}

function calcTrippled(num) {
	return num * 3;
}

function sumOfTripledEvens(array) {
  let even = array.filter(isEven);
  console.log("Even: " + even);
  let trippled = even.map(calcTrippled);
  console.log("Trippled: " + trippled);
  let sum = trippled.reduce((total, currentItem) => {
	  return total + currentItem;
  }, 0);
  return sum;
}

array = [1,2,3,4,5];

console.log("Sum: " + sumOfTripledEvens(array));

/*********************************************************/

function Original_sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
  }

  /*********************************************************/
  function Solution_sumOfTripledEvens(array) {
    return array
      .filter((num) => num % 2 === 0)
      .map((num) => num * 3)
      .reduce((acc, curr) => acc + curr);
  }