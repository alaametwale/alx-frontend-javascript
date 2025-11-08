/**
 * 1. Interface for the printTeacher function
 * - The function accepts two string arguments (firstName, lastName)
 * - The function returns a single string.
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * 2. Implementation of the printTeacher function
 * - Defined as a constant/arrow function (not using the 'function' keyword)
 * - Accepts two positional string arguments (not an object)
 * - Returns the first letter of the firstName, followed by a period, a space, and the full lastName.
 */
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  // Get the first initial, then use string concatenation (e.g., 'J' + '. ' + 'Doe')
  return firstName.charAt(0) + '. ' + lastName;
};

// -----------------------------------------------------------------------------

/**
 * Example Test (for verification)
 */
 
// Example data for testing
const testFirstName = 'Alice';
const testLastName = 'Smith';

// Test the function
const result: string = printTeacher(testFirstName, testLastName);

console.log(result); 
// Expected output: A. Smith