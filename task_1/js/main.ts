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
// =================================================================

/**
 * Interface for the printTeacher function.
 * Accepts two string arguments: firstName and lastName.
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Traditional function declaration for printTeacher.
 * Returns the first initial of firstName and full lastName.
 */
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

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
  new (firstName: string, lastName: string): Stu
