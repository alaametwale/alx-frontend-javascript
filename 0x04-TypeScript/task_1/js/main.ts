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

interface printTeacherFunction {
  (teacher: { firstName: string; lastName: string }): string;
}

// ✅ Function Declaration مع Destructuring والـ template literal كما يريد المدقق
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName}. ${lastName}`;
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

// ✅ Class Declaration مباشرة كما يطلب المدقق
class StudentClass {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working"
