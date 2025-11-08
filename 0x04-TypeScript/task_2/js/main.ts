// =================================================================
// 1️⃣ DirectorInterface & TeacherInterface
// =================================================================

/**
 * Interface describing a Director with expected methods.
 */
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/**
 * Interface describing a Teacher with expected methods.
 */
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// =================================================================
// 2️⃣ Classes Director & Teacher
// =================================================================

/**
 * Director class implementing DirectorInterface.
 */
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

/**
 * Teacher class implementing TeacherInterface.
 */
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// =================================================================
// 3️⃣ Function createEmployee
// =================================================================

/**
 * Factory function that creates either a Teacher or a Director
 * based on the salary provided.
 * @param salary number or string
 * @returns Teacher or Director instance
 */
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// =================================================================
// 4️⃣ Example usage
// =================================================================

console.log(createEmployee(200));    // Teacher
console.log(createEmployee(1000));   // Director
console.log(createEmployee("$500")); // Director
