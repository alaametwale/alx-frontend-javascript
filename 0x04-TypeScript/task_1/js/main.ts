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
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

// ==========================
// 3️⃣ StudentClass & interfaces
// ==========================
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

interface Stud
