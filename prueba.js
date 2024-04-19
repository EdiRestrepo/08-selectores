// Palindromo
// Write a JavaScript program that identifies if a given text is palindrome. Specifications: - The program must prompt the user to enter a text from console.  - the program must identify if the text is palindrome. - the program must operate independently of dots, commans, spaces and capital characters. - the program must print by console "true" if the text is palindrome, "false" if not. Additional Requirementes. - Do not use third-party libraries, use only what is naturally provided by the language. - use flow control structures and variables to solve the problem. - You can use funtions and methods if you deem it necessary.

process.stdin.on('data', data => {
  // Split the input string into an array
  const input = data.toString().trim();

  // Call your function
  main(input);
});

function main(input) {
  // Convert the input text to lowercase and remove non-alphanumeric characters
  const cleanInput = input.toLowerCase().replace(/[^a-z0-9]/g, '');

  // Check if the clean input string is a palindrome
  const isPalindrome = checkPalindrome(cleanInput);

  // Print the result to the console
  console.log(isPalindrome);
}

function checkPalindrome(text) {
  // Initialize pointers for the start and end of the text
  let start = 0;
  let end = text.length - 1;

  // Iterate over the text from both ends, comparing characters
  while (start < end) {
      // If characters at the start and end positions don't match, it's not a palindrome
      if (text[start] !== text[end]) {
          return false;
      }
      // Move the pointers towards the center
      start++;
      end--;
  }
  // If all characters match, it's a palindrome
  return true;
}


// Contador de vocales
// Write a JavaScript program that identifies if a given text is palindrome. Specifications: - The program must prompt the user to enter a text from console.  - the program must identify if the text is palindrome. - the program must operate independently of dots, commans, spaces and capital characters. - the program must print by console "true" if the text is palindrome, "false" if not. Additional Requirementes. - Do not use third-party libraries, use only what is naturally provided by the language. - use flow control structures and variables to solve the problem. - You can use funtions and methods if you deem it necessary.
// Additional Requirementes. - Do not use third-party libraries, use only what is naturally provided by the language. - use flow control structures and variables to solve the problem. - You can use funtions and methods if you deem it necessary.
process.stdin.on('data', data => {
  // Split the input string into an array
  const input = data.toString().trim();

  // Call your function
  main(input);
});

function main(input) {
  // Count the number of vowels in the input text
  const vowelCount = countVowels(input);

  // Print the result to the console
  console.log(vowelCount);
}

function countVowels(text) {
  // Define an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Initialize a variable to count the number of vowels
  let count = 0;

  // Iterate over each character in the text
  for (let char of text.toLowerCase()) {
      // Check if the character is a vowel
      if (vowels.includes(char)) {
          // Increment the vowel count
          count++;
      }
  }

  // Return the total count of vowels
  return count;
}


//Ordenar numeros
// Write a JavaScript program that orders a list of numbers upward. Specifications: 1. the programa must prmpt the user to enter a list of numbers separated by commas from console.  2. The program must order the numbers obtained upward. 3. The program must take decimal numbers into consideration. 4. The program must print the ordered numbers in the same format. Additional Requirementes. - Do not use third-party libraries, use only what is naturally provided by the language. - use flow control structures and variables to solve the problem. - You can use funtions and methods if you deem it necessary. // We recommend not altering this code for the proper functioning of your solution.
// process.stdin.on('data', data => {
//     // Split the input string into an array
//     const input = data.toString().trim();

//     // Call your function
//     main(input);
// });

// function main(input) {
//     // console.log(input); // This is the value you should use to obtain the output
//     // Enter your code here, and feel free to use other functions according to your preference.
//     // console.log(output); // Something like this is expected for your response

// }
process.stdin.on('data', data => {
  // Split the input string into an array of numbers
  const numbers = data.toString().trim().split(',').map(parseFloat);

  // Call your function
  main(numbers);
});

function main(numbers) {
  // Order the numbers in ascending order
  const orderedNumbers = orderNumbers(numbers);

  // Print the ordered numbers to the console in the same format
  console.log(orderedNumbers.join(','));
}

function orderNumbers(numbers) {
  // Use the sort() method to order the numbers in ascending order
  numbers.sort((a, b) => a - b);

  // Return the ordered numbers array
  return numbers;
}


// Analisis de empleados

// write a JavaScript program that performs data analysis of employees in a company. Specifications:
// 1. The program must prompt the user to enter a number of lines from console.
// 2. The program must prompt the user to enter the employee information for each line from console in the following format: "Name,Department,Salary".
// 3. Find the number of employees in each department and print the results in the format: Department: Count.
// 4. Find the employee with the highest salary in each department and print the results in the format: Department: Name.
// 5. Calculate the average salary per department and print the results in the format: Department: Average.
// 6. Separating each department by commas and ordering them alphabetically.
// 7. In case the number of lines is 0 must print "No Employees".
// Additional Requirementes. - Do not use third-party libraries, use only what is naturally provided by the language. - use flow control structures and variables to solve the problem. - You can use funtions and methods if you deem it necessary. // We recommend not altering this code for the proper functioning of your solution.
// process.stdin.on('data', data => {
//     // Split the input string into an array
//     const input = data.toString().trim();

//     // Call your function
//     main(input);
// });

// function main(input) {
//     // console.log(input); // This is the value you should use to obtain the output
//     // Enter your code here, and feel free to use other functions according to your preference.
//     // console.log(output); // Something like this is expected for your response

// }

process.stdin.on('data', data => {
  // Split the input string into an array of lines
  const lines = data.toString().trim().split('\n');

  // Call your function
  main(lines);
});

function main(lines) {
  // Check if there are no lines
  if (lines.length === 0) {
      console.log("No Employees");
      return;
  }

  // Create an object to store department information
  const departments = {};

  // Iterate over each line to process employee information
  lines.forEach(line => {
      const [name, department, salary] = line.split(',');
      const salaryValue = parseFloat(salary);

      // Update department count
      departments[department] = (departments[department] || 0) + 1;

      // Update employee with highest salary in each department
      if (!departments[`${department}_highest`] || salaryValue > departments[`${department}_highest`].salary) {
          departments[`${department}_highest`] = { name, salary: salaryValue };
      }

      // Update total salary for each department
      departments[`${department}_total`] = (departments[`${department}_total`] || 0) + salaryValue;
  });

  // Sort departments alphabetically
  const sortedDepartments = Object.keys(departments).filter(key => !key.includes('_'))
                                                  .sort()
                                                  .reduce((obj, key) => {
                                                      obj[key] = departments[key];
                                                      return obj;
                                                  }, {});

  // Print results
  for (const department in sortedDepartments) {
      if (sortedDepartments.hasOwnProperty(department)) {
          const count = sortedDepartments[department];
          const highest = departments[`${department}_highest`];
          const average = (departments[`${department}_total`] / count).toFixed(2);

          console.log(`${department}: ${count}`);
          console.log(`${department}: ${highest.name}`);
          console.log(`${department}: ${average}`);
      }
  }
}

// Word Reverser
// Write a JavaScript program that reverse a given text. Specifications: 1. The program must prompt the user to enter a text from console. 2. The program reverse each word of the text. 3. The program must print on console the edited text.  Additional Requirementes. - Do not use third-party libraries, use only what is naturally provided by the language. - use flow control structures and variables to solve the problem. - You can use funtions and methods if you deem it necessary. // We recommend not altering this code for the proper functioning of your solution.
// process.stdin.on('data', data => {
//     // Split the input string into an array
//     const input = data.toString().trim();

//     // Call your function
//     main(input);
// });

// function main(input) {
//     // console.log(input); // This is the value you should use to obtain the output
//     // Enter your code here, and feel free to use other functions according to your preference.
//     // console.log(output); // Something like this is expected for your response

// }
process.stdin.on('data', data => {
  // Split the input string into an array of words
  const input = data.toString().trim();

  // Call your function
  main(input);
});

function main(input) {
  // Reverse each word in the text
  const reversedText = reverseText(input);

  // Print the reversed text to the console
  console.log(reversedText);
}

function reverseText(text) {
  // Split the text into an array of words
  const words = text.split(' ');

  // Initialize an array to store the reversed words
  const reversedWords = [];

  // Iterate over each word and reverse it
  for (const word of words) {
      // Reverse the characters of the word
      const reversedWord = word.split('').reverse().join('');

      // Add the reversed word to the array
      reversedWords.push(reversedWord);
  }

  // Join the reversed words back into a single string
  const reversedText = reversedWords.join(' ');

  // Return the reversed text
  return reversedText;
}


// The largest number
// Write a JavaScript program that finds the largest number in the given list. Specifications: 1. The program must prompt the user to enter a list of numbers separated by commas from console. 2. The program must find the largest number in the list. 3. The program must print finded number.  Additional Requirementes. - Do not use third-party libraries, use only what is naturally provided by the language. - use flow control structures and variables to solve the problem. - You can use funtions and methods if you deem it necessary. // We recommend not altering this code for the proper functioning of your solution.
// process.stdin.on('data', data => {
//     // Split the input string into an array
//     const input = data.toString().trim();

//     // Call your function
//     main(input);
// });

// function main(input) {
//     // console.log(input); // This is the value you should use to obtain the output
//     // Enter your code here, and feel free to use other functions according to your preference.
//     // console.log(output); // Something like this is expected for your response

// }
process.stdin.on('data', data => {
  // Split the input string into an array of numbers
  const numbers = data.toString().trim().split(',').map(Number);

  // Call your function
  main(numbers);
});

function main(numbers) {
  // Find the largest number in the list
  const largestNumber = findLargestNumber(numbers);

  // Print the largest number to the console
  console.log(largestNumber);
}

function findLargestNumber(numbers) {
  // Initialize a variable to store the largest number
  let largest = numbers[0];

  // Iterate over the array of numbers to find the largest number
  for (let i = 1; i < numbers.length; i++) {
      if (numbers[i] > largest) {
          largest = numbers[i];
      }
  }

  // Return the largest number
  return largest;
}
