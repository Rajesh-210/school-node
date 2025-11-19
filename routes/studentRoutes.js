const express = require('express');
const fs = require('fs');
const path = require('path');
const Student = require('../models/student');

const router = express.Router();
const dataPath = path.join(__dirname, '../data/students.json');

// Helper to read data
const readData = () => {
  if (!fs.existsSync(dataPath)) return [];
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data || '[]');
};

// Helper to write data
const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

// Get all students
router.get('/', (req, res) => {
  const students = readData();
  res.json(students);
});

// Get student by ID
router.get('/:id', (req, res) => {
  const students = readData();
  const student = students.find(s => s.id === parseInt(req.params.id));
  if (student) res.json(student);
  else res.status(404).json({ message: 'Student not found' });
});

// Add new student
router.post('/', (req, res) => {
  const students = readData();
  const { name, age, grade } = req.body;

  const newStudent = new Student(students.length + 1, name, age, grade);
  students.push(newStudent);
  writeData(students);

  res.status(201).json(newStudent);
});

module.exports = router;
