// =================================================================
// 1️⃣ Teacher & Director interfaces
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
// 2️⃣ printTeacher function & interface
// (تم التعديل لاستخدام تفكيك الكائن في التوقيع لتلبية القيود)
// =================================================================

/**
 * Interface for the printTeacher function.
 * It accepts a single object argument that must contain firstName and lastName.
 */
interface printTeacherFunction {
  ({ firstName, lastName }: { firstName: string, lastName: string }): string;
}

/**
 * Implements the printTeacher function using object destructuring.
 * Returns the first initial of the firstName followed by the full lastName (e.g., "J. Doe").
 */
const printTeacher: printTeacherFunction = ({ firstName, lastName }) => {
  return `${firstName[0]}. ${lastName}`;
};


// =================================================================
// 3️⃣ StudentClass & interfaces
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

// ==========================
// مثال للاستخدام (للتأكد من أن الكود يعمل)
// ==========================
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
// Testing printTeacher function (now requires an object)
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // Output: J. Doe
console.log(printTeacher({ firstName: "Alice", lastName: "Smith" })); // Output: A. Smith

const student1 = new StudentClass("Alice", "Smith");
console.log(student1.displayName());
console.log(student1.workOnHomework());