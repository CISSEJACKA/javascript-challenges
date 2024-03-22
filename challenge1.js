const prompt =require('prompt-sync')();


function calculateGrade(marks) {
    if (marks>79) {
        return 'A';
    } else if (marks >=60 && marks <=79) {
        return 'B';
    } else if (marks >=49 && marks <=59) {
        return 'C';
    } else if (marks >=40 && marks <=49) {
        return 'D';
    } else {
        return 'E';
    }
} 
const marks =parseInt(prompt('Enter student marks: '));
if (isNaN(marks) || marks < 0 || marks > 100){

} else {
    const grade = calculateGrade(marks);
    console.log('Grade:' , grade);

}

