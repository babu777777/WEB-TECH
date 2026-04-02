import React from 'react';

function StudentProfile() {
  // Student details stored as JavaScript variables
  const studentName = "Rahul Sharma";
  const department = "Computer Science and Engineering";
  const year = "3rd Year";
  const section = "A";
  const rollNumber = "CSE-045";
  const email = "rahul.sharma@example.com";

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar">👨‍🎓</div>
          <h2>Student Profile</h2>
        </div>

        <div className="profile-details">
          <div className="detail-item">
            <strong>Name:</strong>
            <span>{studentName}</span>
          </div>
          <div className="detail-item">
            <strong>Department:</strong>
            <span>{department}</span>
          </div>
          <div className="detail-item">
            <strong>Year:</strong>
            <span>{year}</span>
          </div>
          <div className="detail-item">
            <strong>Section:</strong>
            <span>{section}</span>
          </div>
          <div className="detail-item">
            <strong>Roll Number:</strong>
            <span>{rollNumber}</span>
          </div>
          <div className="detail-item">
            <strong>Email:</strong>
            <span>{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentProfile;