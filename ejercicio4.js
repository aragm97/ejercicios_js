/* let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.
 */

let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
const commonCourses = student1Courses.reduce((acc, courses) => {
    if (student2Courses.includes(courses)) {
      acc.push(courses);
    }
    return acc;
  }, []);
  
  console.log(commonCourses);