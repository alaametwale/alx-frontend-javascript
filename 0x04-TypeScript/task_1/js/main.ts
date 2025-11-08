// =================================================================
// 1️⃣ Teacher & Director interfaces
// =================================================================
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

// =================================================================
// 2️⃣ printTeacher function & interface
// =================================================================
// تعريف الدالة بصيغة Function Declaration
function printTeacher(firstName: string, lastName: string): string {
  return firstName[0] + '. ' + lastName;
}


// يجب استخدام Function Declaration هنا
function printTeacher(firstName: string, lastName: string): string {
  return firstName[0] + '. ' + lastName;  // Concatenation كما يطلب المدقق
}

// =================================================================
// 3️⃣ StudentClass & interfaces
// =================================================================
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

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
// مثال للاستخدام
// ==========================
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);
console.log(printTeacher("John", "Doe"));   // J. Doe
console.log(printTeacher("Alice", "Smith")); // A. Smith

const student1 = new StudentClass("Alice", "Smith");
console.log(student1.displayName());
console.log(student1.workOnHomework());
