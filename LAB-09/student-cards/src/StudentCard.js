import React from 'react';

function StudentCard({ name, department, marks, rollNumber }) {
  const getGrade = (marks) => {
    if (marks >= 90) return "A+";
    if (marks >= 80) return "A";
    if (marks >= 70) return "B";
    if (marks >= 60) return "C";
    return "D";
  };

  return (
    <div className="student-card">
      <div className="card-header">
        <div className="avatar">👨‍🎓</div>
        <h3>{name}</h3>
      </div>

      <div className="card-body">
        <div className="info-row">
          <strong>Department</strong>
          <span>{department}</span>
        </div>
        <div className="info-row">
          <strong>Roll No</strong>
          <span>{rollNumber}</span>
        </div>
        <div className="info-row marks-row">
          <strong>Marks</strong>
          <span className="marks">{marks} / 100</span>
          <span className="grade">({getGrade(marks)})</span>
        </div>
      </div>
    </div>
  );
}

export default StudentCard;