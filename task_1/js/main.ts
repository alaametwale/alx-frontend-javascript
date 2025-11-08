// 1. Define Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// 2. Define Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example object
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// 3. Printing teachers
// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// The function printTeacher
function printTeacher(firstName: string, lastName: string): string {
  return firstName[0] + ". " + lastName;
}

// Test printTeacher
console.log(printTeacher("John", "Doe")); // J. Doe

// 4. Writing a class
// Interface describing the constructor argument
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class
interface StudentClassInterface {
  workOnHomewor
