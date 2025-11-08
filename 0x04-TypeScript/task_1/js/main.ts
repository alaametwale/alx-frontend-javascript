// ==========================
// 1️⃣ Teacher & Director interfaces
// ==========================
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

// ==========================
// 2️⃣ printTeacher function & interface
// ==========================
/**
 * Interface for the printTeacher function
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Implements the printTeacher function
 * Returns the first initial of the firstName followed by the full lastName (e.g., "J. Doe").
 */
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  return `${firstName[0]}. ${lastName}`;
};

// ==========================
// 3️⃣ StudentClass & interfaces
// ==========================
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

/**
 * Class representing a Student
 */
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// ==========================
// ✅ Example usage (اختياري للتجربة)
// ==========================
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  location: "London",
  contract: false,
};

const director1: Directors = {
  firstName: "Jane",
  lastName: "Smith",
  location: "New York",
  fullTimeEmployee: true,
  numberOfReports: 10,
};

console.log(printTeacher("John", "Doe")); // "J. Doe"

const student = new StudentClass("Alice", "Johnson");
console.log(student.displayName()); // "Alice"
console.log(student.workOnHomework()); // "Currently working"
