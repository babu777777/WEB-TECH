import React from 'react';
import StudentCard from './StudentCard';
import './App.css';

function App() {
  const students = [
    {
      name: "Rahul Sharma",
      department: "Computer Science and Engineering",
      marks: 92,
      rollNumber: "23BCE20080"
    },
    {
      name: "Priya Patel",
      department: "Electronics and Communication",
      marks: 88,
      rollNumber: "23BEC20145"
    },
    {
      name: "Aarav Singh",
      department: "Mechanical Engineering",
      marks: 85,
      rollNumber: "23BME20067"
    },
    {
      name: "Sneha Reddy",
      department: "Information Technology",
      marks: 95,
      rollNumber: "23BIT20112"
    },
    {
      name: "Vikram Rao",
      department: "Civil Engineering",
      marks: 78,
      rollNumber: "23BCE20033"
    }
  ];

  return (
    <div className="App">
      <h1>Student Information System</h1>
      <p className="subtitle">Exercise 2 - Reusable Student Card Component using Props</p>
      
      <div className="cards-container">
        {students.map((student, index) => (
          <StudentCard 
            key={index}
            name={student.name}
            department={student.department}
            marks={student.marks}
            rollNumber={student.rollNumber}
          />
        ))}
      </div>
    </div>
  );
}

export default App;