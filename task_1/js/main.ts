// =================================================================
// 2️⃣ printTeacher function & interface
// =================================================================

/**
 * Interface for the printTeacher function.
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Traditional function declaration for printTeacher.
 */
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// ==========================
// Example usage
// ==========================
console.log(printTeacher("John", "Doe"));   // Output: J. Doe
console.log(printTeacher("Alice", "Smith")); // Output: A. Smith
