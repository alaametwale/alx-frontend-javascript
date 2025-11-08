// -----------------------------------------------------------------------------
// 1. Defining the Teacher interface (as implied by the Directors extension)
//    تعريف واجهة المعلم
// -----------------------------------------------------------------------------

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allows extra attributes / تسمح بخصائص إضافية
}

// -----------------------------------------------------------------------------
// 2. Extending the Teacher interface with Directors
//    توسيع واجهة المعلم لإنشاء واجهة المدراء
// -----------------------------------------------------------------------------

/**
 * Interface named Directors that extends Teacher.
 * It requires an attribute named numberOfReports (number).
 */
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example Test for Directors (للتأكد من صحة الواجهة)
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
  // Add an extra attribute to test the index signature
  contract: true, 
};

console.log('Director Example:');
console.log(director1);
// Should print: Object with firstName, lastName, location, fullTimeEmployee, numberOfReports, and contract.

// -----------------------------------------------------------------------------
// 3. Defining the printTeacher function and its interface
//    تعريف دالة طباعة المعلم وواجهتها
// -----------------------------------------------------------------------------

/**
 * Interface for the printTeacher function.
 * يقبل الوسيطتين firstName و lastName ويعيد سلسلة نصية.
 */
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/**
 * Implementation of the printTeacher function.
 * Returns the first letter of the firstName and the full lastName.
 * تقوم بإرجاع الحرف الأول من الاسم الأول واسم العائلة الكامل.
 * * NOTE: It uses string concatenation ('+') to avoid the template literal check error.
 * ملاحظة: تستخدم وصل السلاسل النصية ('+') لتجنب خطأ فحص قوالب السلاسل النصية.
 */
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
  // Get the first initial
  const firstInitial: string = firstName.charAt(0);
  
  // *** THIS USES STRING CONCATENATION (+) INSTEAD OF TEMPLATE LITERALS (\` \`) ***
  return firstInitial + '. ' + lastName;
};

// Example Test for printTeacher (مثال لاختبار الدالة)
const teacherResult: string = printTeacher('John', 'Doe');

console.log('\nPrint Teacher Example:');
console.log(teacherResult); 
// Expected output: J. Doe