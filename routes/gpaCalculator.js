// backend/routes/gpaCalculator.js
const express = require('express');
const router = express.Router();

// Function to calculate GPA and assign letter grades
const calculateGPA = (subjects) => {
  const grades = [];
  const totalSubjects = subjects.length;

  // Calculate GPA and assign grades
  const totalPoints = subjects.reduce((acc, item) => {
    let gradePoint = 0;
    let letterGrade = '';

    if (item.marks >= 90) {
      gradePoint = 10;
      letterGrade = 'O'; // Outstanding
    } else if (item.marks >= 80) {
      gradePoint = 9;
      letterGrade = 'A+';
    } else if (item.marks >= 70) {
      gradePoint = 8;
      letterGrade = 'A';
    } else if (item.marks >= 60) {
      gradePoint = 7;
      letterGrade = 'B+';
    } else if (item.marks >= 50) {
      gradePoint = 6;
      letterGrade = 'B';
    } else {
      gradePoint = 0;
      letterGrade = 'F'; // Fail
    }

    grades.push({ subject: item.name, grade: letterGrade });
    return acc + gradePoint;
  }, 0);

  const gpa = (totalPoints / totalSubjects).toFixed(2);

  return { gpa, grades };
};

router.post('/calculate', (req, res) => {
  const { subjects } = req.body; // Array of subjects with name and marks
  const result = calculateGPA(subjects);
  res.json(result);
});

module.exports = router;
