// ==========================
// 1️⃣ Teacher & Director interfaces + printTeacher function
// ==========================

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows extra attributes
}

interface Director extends Teacher {
  numberOfReports: number;
}

// Example Director object
const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// ---------------------------
// printTeacher function interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName[0]}. ${lastName}`;
};

// Example usage
console.log(printTeacher("John", "Doe")); // Output: J. Doe

// ==========================
// 2️⃣ StudentClass + interfaces
// ==========================

// Interface for constructor arguments
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// Interface for the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
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

// Example usage
const student1 = new StudentClass({ firstName: "Alice", lastName: "Smith" });
console.log(student1.displayName()); // Alice
console.log(student1.workOnHomework()); // Currently working
