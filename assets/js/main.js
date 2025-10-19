const students = [
  { id:1, name:"Alice", major:"CS", age:21, gpa:3.8 },
  { id:2, name:"Ben",   major:"IT", age:22, gpa:3.4 },
  { id:3, name:"Cathy", major:"DS", age:23, gpa:3.6 },
  { id:4, name:"Dev",   major:"CS", age:20, gpa:3.2 }
];

const courses = [
  { id:1, code:"CS101", title:"Data Structures", credits:3, dept:"CS" },
  { id:2, code:"AI200", title:"AI Fundamentals", credits:4, dept:"CS" },
  { id:3, code:"WD110", title:"Web Development", credits:3, dept:"IT" }
];

const enrollments = [
  { id:1, studentId:1, courseId:1, term:"Spring 2025", numeric_grade:92 },
  { id:2, studentId:2, courseId:2, term:"Spring 2025", numeric_grade:78 },
  { id:3, studentId:3, courseId:3, term:"Fall 2025",   numeric_grade:88 },
  { id:4, studentId:4, courseId:1, term:"Fall 2025",   numeric_grade:75 }
];
