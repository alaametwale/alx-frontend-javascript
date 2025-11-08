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
 * Implements the printTeacher function using the traditional function syntax.
 * Returns the first initial of the firstName followed by the full lastName (e.g., "J. Doe").
 *
 * @param firstName The teacher's first name.
 * @param lastName The teacher's last name.
 * @returns The formatted teacher name.
 */
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// ==========================
// مثال للاستخدام
// ==========================
console.log(printTeacher("John", "Doe"));   // Output: J. Doe
console.log(printTeacher("Alice", "Smith")); // Output: A. Smith
