/**
 * 1. Interface for the printTeacher function
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * 2. Implementation of the printTeacher function
 * - It returns the first letter of the firstName, a period, a space, and the full lastName.
 * - Example: 'John', 'Doe' -> 'J. Doe'
 */
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  // Get the first letter of the firstName
  const firstInitial: string = firstName.charAt(0);
  
  // Use string concatenation (as suggested by the commit message)
  return firstInitial + '. ' + lastName;
};

// -----------------------------------------------------------------------------

/**
 * Example Test
 */

// Define the existing Director interface for context (as provided in your prompt)
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

const teacherName: string = printTeacher(director1.firstName, director1.lastName);

console.log(teacherName); 
// Expected output: J. Doe