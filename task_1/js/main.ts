// =================================================================
// 2️⃣ printTeacher function & interface
// =================================================================

/**
 * Interface for the printTeacher function.
 * It accepts two string arguments: firstName and lastName.
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

// ==========================
// مثال للاستخدام
// ==========================
console.log(printTeacher("John", "Doe"));   // Output: J. Doe
console.log(printTeacher("Alice", "Smith")); // Output: A. Smith
