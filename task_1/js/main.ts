// =================================================================
// Context Interfaces
// =================================================================

/**
 * Interface describing a Teacher object.
 */
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

/**
 * Interface describing a Directors object, which extends Teacher.
 */
interface Directors extends Teacher {
  numberOfReports: number;
}

// =================================================================
// 3. Printing teachers (printTeacher)
// =================================================================

/**
 * Interface describing the signature for the printTeacher function.
 * Note: The implementation must match the expected output format.
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Implements the printTeacher function.
 * It accepts two string arguments: firstName and lastName.
 * Returns the first letter of the firstName followed by a period and the full lastName.
 *
 * @param firstName The teacher's first name.
 * @param lastName The teacher's last name.
 * @returns A formatted string (e.g., "J. Doe").
 */
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  // Use a template literal to construct the required format: First initial + period + space + Last Name
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Expected output: J. Doe

// =================================================================
// 4. Writing a class (StudentClass)
// =================================================================

/**
 * Interface describing the structure of the StudentClass instance.
 */
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

/**
 * Interface describing the constructor signature for the StudentClass.
 */
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

/**
 * Class representing a Student.
 * Implements StudentClassInterface.
 */
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  /**
   * Constructor for StudentClass.
   * @param firstName The student's first name.
   * @param lastName The student's last name.
   */
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  /**
   * Method that simulates working on homework.
   * @returns The string "Currently working".
   */
  workOnHomework(): string {
    return "Currently working";
  }

  /**
   * Method that returns the student's first name.
   * @returns The student's first name.
   */
  displayName(): string {
    return this.firstName;
  }
}

// Example usage
// const student = new StudentClass("Mark", "Johnson");
// console.log(student.displayName());      // Expected output: Mark
// console.log(student.workOnHomework());   // Expected output: Currently working